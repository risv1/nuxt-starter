<template>
  <div class="bg-gray-900 w-screen h-screen overflow-hidden p-3">
    <Nav />
    <h1 v-if="isLoggedIn" class="text-white text-3xl pt-8 pl-5 font-semibold">
      Welcome, <span class="text-green-500">{{ user.name }}</span
      >!
    </h1>
    <div class="w-full pt-16 flex flex-col gap-5 justify-center items-center">
      <h1 class="text-5xl text-white font-bold flex flex-row items-center">
        <img src="public/icon-green.png" class="w-20 h-20" alt="" />Nuxt Starter
      </h1>
      <p class="text-xl text-white font-bold">
        using <span class="text-green-500">Nuxt</span>.js, Shadcn-<span
          class="text-green-500"
          >vue</span
        >, and <span class="text-yellow-500">Drizzle</span>-ORM
      </p>
    </div>
    <div class="w-full pt-10 flex flex-col gap-5 justify-center items-center">
      <ToastButton
        class="text-white bg-green-600 hover:bg-green-700 p-2 rounded-md font-semibold"
        name="Count +1"
        title="Count increased!"
        @click="increment"
      />
      <p class="text-white text-xl font-semibold flex flex-row gap-2">
        Count: <span class="text-green-500">{{ count }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "@/components/ui/toast/use-toast";
import { useAuthStore } from "@/store/auth";

const { toast } = useToast();
const { user, setUser } = useAuthStore();
const isLoggedIn = computed(() => user !== null);

onMounted(() => {
  console.log("mounted");
  console.log("user:", user);
});

const count = ref(0);
const increment = () => {
  count.value++;
  console.log(count.value);
};
</script>
