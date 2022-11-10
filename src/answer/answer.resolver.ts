import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AnswerService } from './answer.service';
import { Answer } from './models/answer.model';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { IsValidResult } from './dto/is-valid.result';
import { IsValidInput } from './dto/is-valid.input';

@Resolver(() => Answer)
export class AnswerResolver {
  constructor(private readonly answerService: AnswerService) {}

  @Mutation(() => Answer)
  updateAnswer(@Args('data') updateAnswerInput: UpdateAnswerInput) {
    return this.answerService.update(updateAnswerInput.id, updateAnswerInput);
  }

  @Mutation(() => Answer)
  removeAnswer(@Args('id', { type: () => String }) id: string) {
    return this.answerService.remove(id);
  }

  @Query(() => IsValidResult)
  isValid(@Args('data') isValidInput: IsValidInput) {
    return this.answerService.isValid(isValidInput.id);
  }
}
