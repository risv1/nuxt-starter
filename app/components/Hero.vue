<script setup lang="ts">
const icons = [
  {
    name: "nuxt",
    iconName: "logos:nuxt-icon",
    label: "Nuxt",
  },
  {
    name: "pinia",
    iconName: "logos:pinia",
    label: "Pinia",
  },
  {
    name: "drizzle",
    iconName: "simple-icons:drizzle",
    label: "Drizzle ORM",
  },
  {
    name: "biome",
    iconName: "devicon:eslint",
    label: "ESLint",
  },
  {
    name: "docker",
    iconName: "logos:docker-icon",
    label: "Docker",
  },
  {
    name: "unocss",
    iconName: "logos:unocss",
    label: "UnoCSS",
  },
];
</script>

<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center overflow-auto bg-inherit p-4"
  >
    <div
      class="mx-auto w-full max-w-6xl flex flex-col items-center gap-8 sm:gap-12"
    >
      <div class="flex flex-col items-center gap-3 sm:gap-4">
        <Icon
          name="logos:nuxt-icon"
          class="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-green-500"
        />
        <h1
          class="text-3xl sm:text-4xl text-gray-900 font-bold dark:text-gray-100 text-center"
        >
          Nuxt Starter
        </h1>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-2/3 gap-3 sm:gap-4 text-gray-900 dark:text-gray-100"
      >
        <div
          v-for="icon in icons"
          :key="icon.name"
          class="border-2 border-neutral-700/50 rounded-xl bg-gray-100 p-4 sm:p-5 md:p-6 hover:border-green-500 dark:bg-neutral-800/50 transition-all duration-200"
        >
          <div class="flex flex-col items-center gap-2 sm:gap-3">
            <Icon
              :name="icon.iconName"
              :class="[
                'h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 group-hover:scale-110 transition-transform duration-200',
                icon.name === 'drizzle' ? 'text-yellow-400' : '',
              ]"
            />
            <span class="font-medium text-sm sm:text-base">{{
              icon.label
            }}</span>
          </div>
        </div>
      </div>

      <Counter />
    </div>
  </section>
</template>
