Цифровая визитка: GraphQL API на NestJS, база CockroachDB, Docker сompose.

Создайте в каталоге проекта `.env`.

```bash
printf 'HTTP_PORT=4000\n' > .env
```

How to run:

```bash
docker compose up --build
```

Песочница Apollo gql на http://localhost:4000/graphql

АПИ хост: `4000`
БД: `26257`
Seed перетирается при каждом запуске