import { CreateQuestionInput } from './create-question.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuestionInput {
  @Field({ nullable: true })
  text: string;

  @Field()
  id: string;
}
