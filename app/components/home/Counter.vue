<script setup lang="ts">
const { count, increment, decrement } = useCount();

const buttons = [
  { icon: 'ic:baseline-plus', fn: increment },
  { icon: 'ic:baseline-minus', fn: decrement },
]

</script>

<template>
  <div class="mt-8">
    <div class="flex flex-col items-center gap-4">
      <p class="text-gray-100 text-3xl font-medium">Counter: {{ count }}</p>
      <div class="flex items-center gap-4">
        <button v-for="button in buttons" @click="button.fn"
          class="bg-neutral-800 border-none hover:bg-neutral-700 text-gray-100 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center group">
          <Icon :name="button.icon" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
</template>