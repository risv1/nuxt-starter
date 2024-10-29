<script setup lang="ts">
const counter = useCount();

const buttons = [
  { icon: "ic:baseline-plus", fn: counter.increment },
  { icon: "ic:baseline-minus", fn: counter.decrement },
];
</script>

<template>
  <div class="mt-4 sm:mt-6 md:mt-8">
    <div
      class="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-gray-900 dark:text-gray-100"
    >
      <p class="text-2xl sm:text-3xl font-medium">
        Counter: {{ counter.count }}
      </p>
      <div class="flex items-center gap-2 sm:gap-3 md:gap-4">
        <button
          v-for="button in buttons"
          :key="button.icon"
          class="group flex items-center justify-center rounded-lg border-none bg-neutral-800 px-3 py-1.5 sm:px-4 sm:py-2 text-gray-100 transition-colors duration-200 hover:bg-neutral-700"
          @click="button.fn"
        >
          <Icon :name="button.icon" class="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </div>
  </div>
</template>
