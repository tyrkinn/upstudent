import { Field, InterfaceType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CheckAuthorResult {
  @Field()
  isAuthor: boolean;
}
