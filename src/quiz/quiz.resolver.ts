import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuizService } from './quiz.service';
import { Quiz } from './models/quiz.model';
import { CreateQuizInput } from './dto/create-quiz.input';
import { UpdateQuizInput } from './dto/update-quiz.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { User } from 'src/users/models/user.model';
import { CheckAuthorResult } from './dto/check-author.result';
import { CheckAuthorInput } from './dto/check-author.input';

@UseGuards(GqlAuthGuard)
@Resolver(() => Quiz)
export class QuizResolver {
  constructor(private readonly quizService: QuizService) {}

  @Mutation(() => Quiz)
  createQuiz(@UserEntity() user: User, @Args('data') input: CreateQuizInput) {
    return this.quizService.create(input.title, user.id);
  }

  @Query(() => [Quiz], { name: 'quiz' })
  findAll() {
    return this.quizService.findAll();
  }

  @Query(() => Quiz, { name: 'quiz' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.quizService.findOne(id);
  }

  @Mutation(() => Quiz)
  updateQuiz(@Args('data') updateQuizInput: UpdateQuizInput) {
    return this.quizService.update(updateQuizInput.id, updateQuizInput);
  }

  @Mutation(() => Quiz)
  removeQuiz(@Args('id', { type: () => String }) id: string) {
    return this.quizService.remove(id);
  }

  @Query(() => CheckAuthorResult)
  async checkAuthor(
    @Args('data', { type: () => CheckAuthorInput }) input: CheckAuthorInput,
    @UserEntity() user: User
  ) {
    const quiz = await this.quizService.findOne(input.quizId);
    return { isAuthor: quiz.authorId === user.id };
  }
}
