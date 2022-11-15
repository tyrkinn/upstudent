import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class AnswersForQuizCreation {
  @Field()
  text: string;

  @Field()
  valid: boolean;
}

@InputType()
export class QuestionForQuizCreation {
  @Field()
  text: string;

  @Field(() => [AnswersForQuizCreation])
  answers: AnswersForQuizCreation[];
}

@InputType()
export class CreateFullQuizInput {
  @Field()
  title: string;

  @Field(() => [QuestionForQuizCreation])
  questions: QuestionForQuizCreation[];
}
