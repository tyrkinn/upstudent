import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuizInput {
  @Field(() => String)
  title: string;
}
