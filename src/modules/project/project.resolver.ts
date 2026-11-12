import { Resolver } from '@nestjs/graphql';
import { ProjectService } from './project.service.js';

@Resolver('Project')
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}
}
