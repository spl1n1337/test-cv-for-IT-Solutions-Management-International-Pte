import { Link } from '@/prisma/generated/client.js';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LinkModel implements Link {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  label: string;

  @Field(() => String)
  url: string;

  @Field(() => String)
  profileId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
