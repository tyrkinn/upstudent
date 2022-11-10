import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuizResultInput {
  @Field()
  quizId: string;

  @Field(() => [String])
  answerIds: string[];
}
