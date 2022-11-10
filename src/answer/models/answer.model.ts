import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Answer extends BaseModel {
  @Field()
  text: string;

  @Field()
  valid: boolean;
}
