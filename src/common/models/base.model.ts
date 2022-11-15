import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => ID)
  id: string;
}
