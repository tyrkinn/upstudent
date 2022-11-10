import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
  @Field()
  text: string;

  @Field()
  valid: boolean;
}
