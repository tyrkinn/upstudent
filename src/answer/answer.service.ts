import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UpdateAnswerInput } from './dto/update-answer.input';

@Injectable()
export class AnswerService {
  constructor(private prisma: PrismaService) {}

  async update(id: string, updateAnswerInput: UpdateAnswerInput) {
    return await this.prisma.answer.update({
      where: { id },
      data: updateAnswerInput,
    });
  }

  async remove(id: string) {
    return await this.prisma.answer.delete({ where: { id } });
  }

  async isValid(id: string) {
    const answer = await this.prisma.answer.findFirst({ where: { id } });
    return answer.valid;
  }
}
