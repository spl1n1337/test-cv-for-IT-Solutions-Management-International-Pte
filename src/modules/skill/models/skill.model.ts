import { Skill } from '@/prisma/generated/client.js';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SkillModel implements Skill {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  profileId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
