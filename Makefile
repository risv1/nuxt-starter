run:
	@pnpm run dev
	@pnpm run dev

build-client:
	@pnpm run generate
	@pnpm dlx serve .output/public

build:
	@pnpm run build
	@node .output/server/index.mjs 

lint:
	@pnpm lint

upgrade-deps:
	@ncu -u
	@pnpm i

up:
	@docker compose up -d

down:
	@docker compose down -v
	@pnpm i

up:
	@docker compose up -d

down:
	@docker compose down -v