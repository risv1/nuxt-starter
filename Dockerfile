FROM oven/bun:1.0-slim as builder

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM oven/bun:1.0-slim

WORKDIR /app

COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/.nuxt /app/.nuxt
COPY --from=builder /app/package.json /app/package.json

EXPOSE 3000

ENV NODE_ENV=production

CMD ["bun", "run", ".output/server/index.mjs"]


