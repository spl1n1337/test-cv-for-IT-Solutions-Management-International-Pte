import { PrismaService } from '../../core/prisma/prisma.service.js';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async myProfile() {
    const myProfile = await this.prisma.profile.findFirst({
      include: {
        links: true,
        skills: { orderBy: { name: 'asc' } },
        experience: { orderBy: { period: 'desc' } },
        projects: true,
      },
    });

    if (!myProfile) {
      throw new NotFoundException('Profile not found');
    }

    return myProfile;
  }
}
