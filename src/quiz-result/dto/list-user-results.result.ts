import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ListUserResultsOutput {
  @Field()
  id: string;

  @Field()
  quizTitle: string;

  @Field()
  quizId: string;

  @Field()
  total: number;

  @Field()
  points: number;
}
