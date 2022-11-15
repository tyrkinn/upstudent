import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CheckQuizResultsInput } from './dto/check-answers.input';
import { CreateQuizResultInput } from './dto/create-quiz-result.input';

@Injectable()
export class QuizResultService {
  constructor(private prisma: PrismaService) {}

  private async countValid(answerIds: string[]) {
    const answers = await this.prisma.answer.findMany({
      where: { id: { in: answerIds } },
    });
    const validAnswersCount = answers.filter((a) => a.valid).length;
    return validAnswersCount;
  }

  async checkQuiz(input: CheckQuizResultsInput) {
    const validAnswers = await this.countValid(input.answerIds);
    const questions = await this.prisma.quiz
      .findFirst({ where: { id: input.quizId } })
      .questions({ include: { answers: true } });
    const totalAnswers = questions.flatMap((q) => q.answers).length;
    return { total: totalAnswers, valid: validAnswers };
  }

  async create(userId: string, input: CreateQuizResultInput) {
    const validAnswers = await this.countValid(input.answerIds);
    return await this.prisma.quizResult.create({
      data: {
        quizId: input.quizId,
        participantId: userId,
        points: validAnswers,
      },
    });
  }

  async listQuizResults(userId: string, quizId: string) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        results: {
          include: {
            participant: true,
          },
        },
        questions: {
          include: {
            answers: true,
          },
        },
      },
    });
    if (quiz.authorId !== userId) {
      throw new NotAcceptableException(
        'You must me author of quiz to view participants results'
      );
    }

    const { results } = quiz;
    return results.flatMap((r) => ({
      quizTitle: quiz.title,
      id: r.id,
      userFullName: r.participant.firstname + ' ' + r.participant.lastname,
      total: quiz.questions.flatMap((q) => q.answers).filter((a) => a.valid)
        .length,
      points: r.points,
    }));
  }

  async listUserResults(userId: string) {
    const results = await this.prisma.quizResult.findMany({
      where: { participantId: userId },
      include: {
        quiz: {
          include: {
            questions: {
              include: {
                answers: true,
              },
            },
          },
        },
      },
    });

    return results.flatMap((r) => ({
      id: r.id,
      quizTitle: r.quiz.title,
      quizId: r.quiz.id,
      total: r.quiz.questions.flatMap((q) => q.answers).filter((a) => a.valid)
        .length,
      points: r.points,
    }));
  }
}
