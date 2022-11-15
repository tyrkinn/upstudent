import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UpdateQuizInput } from './dto/update-quiz.input';

@Injectable()
export class QuizService {
  constructor(private prisma: PrismaService) {}

  async create(title: string, userId: string) {
    const newQuiz = this.prisma.quiz.create({
      data: { title: title, authorId: userId },
      include: { author: true },
    });
    return await newQuiz;
  }

  async findAll() {
    return await this.prisma.quiz.findMany({ include: { author: true } });
  }

  async findOne(id: string) {
    const quiz = this.prisma.quiz.findFirst({
      where: { id: id },
      include: {
        author: true,
      },
    });
    return await quiz;
  }

  async update(id: string, updateQuizInput: UpdateQuizInput) {
    return await this.prisma.quiz.update({
      data: updateQuizInput,
      where: { id },
    });
  }

  async remove(id: string) {
    return await this.prisma.quiz.delete({ where: { id } });
  }
}
