import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ListQuizResults {
  @Field()
  id: string;

  @Field()
  userFullName: string;

  @Field()
  total: number;

  @Field()
  points: number;
}
