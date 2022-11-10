import { ObjectType, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';
import { Quiz } from 'src/quiz/models/quiz.model';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class QuizResult extends BaseModel {
  @Field(() => Quiz)
  quiz: Quiz;

  @Field(() => User)
  user: User;

  @Field()
  points: number;
}
