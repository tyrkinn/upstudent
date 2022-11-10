import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class IsValidResult {
  @Field()
  isValid: boolean;
}
