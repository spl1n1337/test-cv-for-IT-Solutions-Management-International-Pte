import { Resolver } from '@nestjs/graphql';
import { SkillService } from './skill.service.js';

@Resolver('Skill')
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}
}
