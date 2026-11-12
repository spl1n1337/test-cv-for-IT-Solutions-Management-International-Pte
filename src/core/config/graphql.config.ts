import { ApolloDriverConfig } from '@nestjs/apollo';
import { type ConfigService } from '@nestjs/config';
import type { Request, Response } from 'express';
import { join } from 'path';
import { ENV } from './constans/env.constants.js';

export function getGraphqlConfig(
  configService: ConfigService,
): ApolloDriverConfig {
  return {
    playground: true,
    path: configService.getOrThrow<string>(ENV.GRPAPHQL_PREFIX),
    autoSchemaFile: join(process.cwd(), 'src/core/graphql/schema.gql'),
    sortSchema: true,
    context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }),
  };
}
