run:
	@bun run dev

build-client:
	@bun run generate
	@bunx serve .output/public

build:
	@bun run build
	@bun .output/server/index.mjs 

format:
	@bunx biome format --write ./app ./server

lint:
	@bunx biome lint --write ./app ./server 

update-deps:
	@ncu -u
	@bun i