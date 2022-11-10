import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CheckQuizResultsInput {
  @Field()
  quizId: string;

  @Field()
  answerIds: string[];
}
