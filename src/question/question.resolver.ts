import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { Question } from './models/question.model';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Mutation(() => Question)
  createQuestion(@Args('data') input: CreateQuestionInput) {
    return this.questionService.create(input);
  }

  @Query(() => [Question], { name: 'question' })
  findAll() {
    return this.questionService.findAll();
  }

  @Query(() => Question, { name: 'question' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.questionService.findOne(id);
  }

  @Mutation(() => Question)
  updateText(
    @Args('updateQuestionInput') updateQuestionInput: UpdateQuestionInput
  ) {
    return this.questionService.updateText(
      updateQuestionInput.id,
      updateQuestionInput.text
    );
  }

  @Mutation(() => Question)
  removeQuestion(@Args('id', { type: () => String }) id: string) {
    return this.questionService.remove(id);
  }
}
