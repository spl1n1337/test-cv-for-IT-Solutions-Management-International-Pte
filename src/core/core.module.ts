import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ExperienceModule } from '../modules/experience/experience.module.js';
import { LinkModule } from '../modules/link/link.module.js';
import { ProfileModule } from '../modules/profile/profile.module.js';
import { ProjectModule } from '../modules/project/project.module.js';
import { SkillModule } from '../modules/skill/skill.module.js';
import appConfig from './config/app.config.js';
import dbConfig from './config/db.config.js';
import { getGraphqlConfig } from './config/graphql.config.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [appConfig, dbConfig],
    }),
    PrismaModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: getGraphqlConfig,
      inject: [ConfigService],
    }),
    ProfileModule,
    ExperienceModule,
    LinkModule,
    ProjectModule,
    SkillModule,
  ],
})
export class CoreModule {}
