import { Module } from '@nestjs/common';
import { LinkService } from './link.service.js';
import { LinkResolver } from './link.resolver.js';

@Module({
  providers: [LinkResolver, LinkService],
})
export class LinkModule {}
