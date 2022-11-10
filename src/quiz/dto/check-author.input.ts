import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CheckAuthorInput {
  @Field()
  quizId: string;
}
