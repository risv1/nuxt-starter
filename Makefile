run:
	@pnpm run dev

build-client:
	@pnpm run generate
	@pnpm dlx serve .output/public

start:
	@pnpm run start

build:
	@pnpm run build
	@node .output/server/index.mjs 

format:
	@pnpm biome format --write ./app ./server

lint:
	@pnpm biome lint --write ./app ./server 

upgrade-deps:
	@ncu -u
	@pnpm i

up:
	@docker compose up -d

down:
	@docker compose down -v