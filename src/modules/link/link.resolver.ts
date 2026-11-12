import { Resolver } from '@nestjs/graphql';
import { LinkService } from './link.service.js';

@Resolver('Link')
export class LinkResolver {
  constructor(private readonly linkService: LinkService) {}
}
