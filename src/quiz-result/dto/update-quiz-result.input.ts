import { CreateQuizResultInput } from './create-quiz-result.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuizResultInput extends PartialType(CreateQuizResultInput) {
  @Field(() => Int)
  id: number;
}
