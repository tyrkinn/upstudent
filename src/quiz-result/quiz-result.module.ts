import { Module } from '@nestjs/common';
import { QuizResultService } from './quiz-result.service';
import { QuizResultResolver } from './quiz-result.resolver';

@Module({
  providers: [QuizResultResolver, QuizResultService],
})
export class QuizResultModule {}
