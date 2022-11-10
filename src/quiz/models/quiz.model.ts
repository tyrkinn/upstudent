import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { Question } from 'src/question/models/question.model';
import { QuizResult } from 'src/quiz-result/models/quiz-result.model';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class Quiz extends BaseModel {
  @Field(() => String)
  title: string;

  @Field(() => [Question])
  questions: [Question];

  @Field(() => User)
  author: User;

  @Field(() => [QuizResult])
  results: [QuizResult];
}
