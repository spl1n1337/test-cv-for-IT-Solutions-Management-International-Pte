import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service.js';
import { ExperienceResolver } from './experience.resolver.js';

@Module({
  providers: [ExperienceResolver, ExperienceService],
})
export class ExperienceModule {}
