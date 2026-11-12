FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bunx prisma generate --config prisma7.config.ts && bun run build

ENV HTTP_HOST=0.0.0.0
ENV HTTP_PORT=4000

EXPOSE 4000

CMD ["sh", "-c", "bunx prisma migrate deploy --config prisma7.config.ts && bun run db:seed && bun run start:prod"]