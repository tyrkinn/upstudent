import { CreateQuizInput } from './create-quiz.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuizInput extends PartialType(CreateQuizInput) {
  @Field()
  id: string;
}
