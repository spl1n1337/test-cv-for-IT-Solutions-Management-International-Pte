import { Profile } from '@/prisma/generated/client.js';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ExperienceModel } from '../../experience/models/experience.model.js';
import { LinkModel } from '../../link/models/link.model.js';
import { ProjectModel } from '../../project/models/project.model.js';
import { SkillModel } from '../../skill/models/skill.model.js';

@ObjectType()
export class ProfileModel implements Profile {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => [SkillModel])
  skills: SkillModel[];

  @Field(() => [LinkModel])
  links: LinkModel[];

  @Field(() => [ExperienceModel])
  experience: ExperienceModel[];

  @Field(() => [ProjectModel])
  projects: ProjectModel[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
