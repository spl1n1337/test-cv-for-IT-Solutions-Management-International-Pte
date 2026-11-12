import { Resolver } from '@nestjs/graphql';
import { ExperienceService } from './experience.service.js';

@Resolver('Experience')
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}
}
