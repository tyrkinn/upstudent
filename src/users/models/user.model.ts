import 'reflect-metadata';
import { ObjectType, HideField, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { BaseModel } from 'src/common/models/base.model';
import { Quiz } from 'src/quiz/models/quiz.model';
import { QuizResult } from 'src/quiz-result/models/quiz-result.model';

@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  firstname?: string;

  @Field(() => String, { nullable: true })
  lastname?: string;

  @HideField()
  password: string;

  @Field(() => [Quiz])
  createdQuizes: [Quiz];

  @Field(() => [QuizResult])
  results: [QuizResult];
}
