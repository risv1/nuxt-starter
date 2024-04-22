<template>
  <div class="bg-gray-900 w-screen h-screen overflow-hidden p-3">
    <div class="w-full h-10 flex">
      <NuxtLink
        to="/"
        class="text-white gap-1 font-semibold text-2xl pl-5 pt-2 flex flex-row items-center"
        ><img src="public/icon-green.png" class="w-10 h-10" alt="">Nuxt</NuxtLink
      >
      <NuxtLink
        to="/login"
        class="text-green-500 font-semibold text-2xl pr-5 pt-2 ml-auto"
        >Login</NuxtLink
      >
    </div>
    <div class="w-full pt-16 flex flex-col gap-5 justify-center items-center">
      <h1 class="text-5xl text-white font-bold flex flex-row items-center"><img src="public/icon-green.png" class="w-20 h-20" alt="">Nuxt Starter</h1>
      <p class="text-xl text-white font-bold">
        using <span class="text-green-500">Nuxt</span>.js, Shadcn-<span
          class="text-green-500"
          >vue</span
        >, and <span class="text-yellow-500">Drizzle</span>-ORM
      </p>
    </div>
    <div class="w-full pt-10 flex flex-col gap-5 justify-center items-center">
        <ToastButton class="text-white bg-green-500 hover:bg-green-600 p-2 rounded-md font-bold" name="Count +1" title="Count increased!" :description="`New count: ${count}`" @click="increment" />
        <p class="text-white text-xl font-semibold">Count: {{ count }}</p>
    </div>
  </div>
</template>

<script setup >
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
  console.log(count.value)
}
</script>
