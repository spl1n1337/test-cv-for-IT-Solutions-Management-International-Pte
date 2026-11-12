import { Prisma, PrismaClient } from '@/prisma/generated/client.js';
import { BadRequestException, Logger } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.POSTGRES_URI }),
  transactionOptions: {
    maxWait: 5000,
    timeout: 10000,
    isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
  },
});

async function main() {
  try {
    Logger.log('Starting database seeding');

    await prisma.$transaction([
      prisma.profile.deleteMany(),
      prisma.skill.deleteMany(),
    ]);

    await prisma.profile.create({
      data: {
        name: 'Евгений Панов',
        description:
          'Senior Fullstack developer. Последние годы вёл продуктовые системы от требований заказчика до продакшена: API, данные, интеграции, разработка CRM.',
        links: {
          create: [
            { label: 'Telegram', url: 'https://t.me/mrrr_panov' },
            { label: 'Email', url: 'mailto:panov.webdev@gmail.com' },
            { label: 'Github', url: 'https://github.com/spl1n1337' },
          ],
        },
        skills: {
          create: [
            { name: 'TypeScript' },
            { name: 'Node.js' },
            { name: 'NestJS' },
            { name: 'GraphQL' },
            { name: 'Prisma' },
            { name: 'PostgreSQL' },
            { name: 'Docker' },
          ],
        },
        experience: {
          create: [
            {
              company: 'GOLD Fusion HVAC & Appliance Repair',
              position: 'Senior Fullstack Engineer / Lead Software Engineer',
              period: '2025-09 - 2026-10',
              achievements: [
                'Выступал главным инженером и техническим лидом трёх продуктов компании.',
                'Отвечал за архитектуру, ключевые компоненты и техническую реализацию.',
                'Координировал двух разработчиков, двух QA, менеджера проекта, дизайнера и customer managers.',
                'Собирал требования у заказчика и принимал технические решения.',
                'Спроектировал и поддерживал production на k3s.',
              ],
            },
            {
              company: 'Extyl',
              position: 'Senior Fullstack Engineer',
              period: '2022-10 - 2025-09',
              achievements: [
                'Пришёл по рекомендации как контрактор, после этого получил оффер на постоянную работу.',
                'Работал fullstack с упором на backend: проекты, общение с заказчиком, разработка.',
                'За три года стек включал React, Next, Vue, Angular, Nest, Docker, k3s, k8s, Rust, Go, PostgreSQL, MongoDB и ClickHouse.',
              ],
            },
            {
              company: 'EPAM',
              position: 'Frontend-developer',
              period: '2021-01 — 2022-08',
              achievements: [
                'Разрабатывал frontend коммерческих проектов: интерфейсы, вёрстка, интеграция с backend API.',
                'Занимался производительностью и SEO веб-приложений.',
                'Стек: JavaScript, TypeScript, React, Next, REST API, Node.js, Express.',
              ],
            },
          ],
        },
        projects: {
          create: [
            {
              name: 'Customer & IoT Platform',
              url: 'https://fusion-repair.com/',
              description:
                'Внутренняя платформа GOLD Fusion поверх Housecall Pro: клиентские и внутренние приложения, админка, backend, мобильные приложения на Capacitor и IoT-датчики.',
            },
            {
              name: 'Stedly.ai',
              url: 'https://stedly.ai/',
              description:
                'Мультитенантная SaaS-платформа для сервисных компаний: изоляция данных, онбординг тенантов, онлайн-запись, чат, голосовые операторы и интеграции.',
            },
            {
              name: 'DispatchOS',
              description:
                'MVP мультитеннантной field-service CRM. Backend на PostgreSQL, Drizzle, Redis, Kafka и k3s. Сервисы на Go, PDF на Rust, frontend на Next, Twilio, Stripe и ClickHouse.',
            },
          ],
        },
      },
    });

    Logger.log('Database seeding completed successfully');
  } catch (error) {
    Logger.error(error);
    throw new BadRequestException('Failed to seed the database');
  } finally {
    Logger.log('Closing database connection...');
    await prisma.$disconnect();
    Logger.log('Database connection successfully closed');
  }
}

main();
