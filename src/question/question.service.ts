import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateQuestionInput } from './dto/create-question.input';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateQuestionInput) {
    const newQuestion = await this.prisma.question.create({
      data: {
        text: input.text,
        quizId: input.quizId,
        answers: { create: input.answers },
      },
      include: {
        answers: true,
      },
    });
    return newQuestion;
  }

  async findAll() {
    return await this.prisma.question.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.question.findFirst({ where: { id } });
  }

  async updateText(id: string, newText: string) {
    return await this.prisma.question.update({
      data: { text: newText },
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.prisma.question.delete({ where: { id } });
  }
}
