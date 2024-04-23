<template>
  <div class="bg-gray-900 w-screen h-screen flex">
    <div
      @click="() => navigateTo('/')"
      class="fixed top-0 text-white right-0 p-3 pr-5 text-xl hover:cursor-pointer"
    >
      X
    </div>
    <div v-if="login" class="w-full h-full flex justify-center items-center">
      <Login :switchLayer="switchRegister" />
    </div>
    <div v-else class="w-full h-full flex justify-center items-center">
      <Register :switchLayer="switchLogin" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const login = ref(true);

const switchLogin = () => {
  console.log("switching layer");
  login.value = true;
};

const switchRegister = () => {
  console.log("switching layer");
  login.value = false;
};
</script>
