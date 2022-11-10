import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { QuizResultService } from './quiz-result.service';
import { QuizResult } from './models/quiz-result.model';
import { CreateQuizResultInput } from './dto/create-quiz-result.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { User } from 'src/users/models/user.model';
import { ListUserResultsOutput } from './dto/list-user-results.result';
import { ListQuizResults } from './dto/list-quiz-results.result';
import { ListQuizResultsInput } from './dto/list-quiz-results.input';

@UseGuards(GqlAuthGuard)
@Resolver(() => QuizResult)
export class QuizResultResolver {
  constructor(private readonly quizResultService: QuizResultService) {}

  @Mutation(() => QuizResult)
  async createQuizResult(
    @UserEntity() user: User,
    @Args('data') input: CreateQuizResultInput
  ) {
    return await this.quizResultService.create(user.id, input);
  }

  @Query(() => [ListUserResultsOutput])
  async listUserResults(@UserEntity() user: User) {
    return await this.quizResultService.listUserResults(user.id);
  }

  @Query(() => [ListQuizResults])
  async listQuizResults(
    @UserEntity() user: User,
    @Args('data') input: ListQuizResultsInput
  ) {
    return await this.quizResultService.listQuizResults(user.id, input.quizId);
  }
}
