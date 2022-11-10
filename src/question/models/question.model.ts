import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Answer } from 'src/answer/models/answer.model';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Question extends BaseModel {
  @Field()
  text: string;

  @Field(() => [Answer])
  answers: Answer[];
}
