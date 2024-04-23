<template>
  <div class="w-full h-10 flex">
    <NuxtLink
      to="/"
      class="text-white gap-1 font-semibold text-2xl pl-5 pt-2 flex flex-row items-center"
      ><img
        src="public/icon-green.png"
        class="w-10 h-10"
        alt=""
      />Nuxt</NuxtLink
    >
    <NuxtLink
      v-if="!isLoggedIn"
      to="/login"
      class="text-green-500 font-semibold text-2xl pr-5 pt-2 ml-auto"
      >Login</NuxtLink
    >
    <p
      v-if="isLoggedIn"
      @click="logout"
      class="text-green-500 font-semibold text-2xl pr-5 pt-2 ml-auto hover:cursor-pointer"
    >
      Logout
    </p>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();
const { user, setUser } = useAuthStore();
const isLoggedIn = computed(() => user !== null);

const logout = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (res.ok) {
      setUser(null);
      navigateTo("/login");
    } else {
      toast({
        title: "Error",
        description: "Failed to logout",
      });
      console.error("Failed to logout");
    }
  } catch (error) {
    console.error(error);
    toast({
      title: "Error",
      description: "Failed to logout",
    });
    throw createError({
      statusCode: 500,
      message: "Failed to logout",
    });
  }
};
</script>
