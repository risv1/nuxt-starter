# Nuxt-Shadcn-Drizzle Starter

This is a starter project for bootstrapping a Nuxt app with Shadcn-vue and Drizzle ORM, with Pinia for state 
management.

## Stack

Built using ![Nuxt Logo](public/icon-green.png)[Nuxt](https://nuxt.com/), ![Shadcn Logo](public/icon-shadcn.png)[Shadcn-vue](https://www.shadcn-vue.com/), ![Drizzle Logo](public/icon-drizzle.png)[Drizzle ORM](https://orm.drizzle.team/), ![TailwindCSS Logo](public/icon-tailwind.png)[TailwindCSS](https://tailwindcss.com/)

## Setup

1. Run `pnpm install` to install all dependencies.
2. Create a .env file, and add `DB_URL`, `JWT_SECRET` respectively.
3. Setup your preferred SQL database in `database/`, this example uses Postgres
4. Run `docker compose up -d` if an instance is preferred.
5. Run `pnpm dev` to start the application

## License

Nuxt-Shadcn-Drizzle Starter is licensed under the [MIT License](https://github.com/risv1/nuxt-shadcn-drizzle-starter/blob/main/LICENSE).