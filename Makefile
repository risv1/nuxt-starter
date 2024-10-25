run:
	@pnpm run dev

build-client:
	@pnpm run generate
	@pnpm dlx serve .output/public

build:
	@pnpm run build
	@node .output/server/index.mjs 

format:
	@pnpm dlx biome format --write ./app ./server

lint:
	@pnpm dlx biome lint --write ./app ./server 

upgrade-deps:
	@ncu -u
	@pnpm i