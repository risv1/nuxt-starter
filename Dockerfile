FROM node:20-slim as builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/data /app/data

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]