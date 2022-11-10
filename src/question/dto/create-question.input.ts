import { InputType, Field } from '@nestjs/graphql';
import { CreateAnswerInput } from 'src/answer/dto/create-answer.input';

@InputType()
export class CreateQuestionInput {
  @Field()
  quizId: string;

  @Field()
  text: string;

  @Field(() => [CreateAnswerInput])
  answers: [CreateAnswerInput];
}
