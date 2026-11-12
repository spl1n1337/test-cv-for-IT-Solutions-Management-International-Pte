import { Experience } from '@/prisma/generated/client.js';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExperienceModel implements Experience {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  company: string;

  @Field(() => String)
  position: string;

  @Field(() => String)
  period: string;

  @Field(() => [String])
  achievements: string[];

  @Field(() => String)
  profileId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
