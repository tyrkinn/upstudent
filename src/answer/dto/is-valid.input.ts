import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class IsValidInput {
  @Field()
  id: string;
}
