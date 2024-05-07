<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";
import { fetchUser } from "@/lib/fetchUser";
import { useAuthStore } from "@/store/auth";
import { ref, onMounted } from "vue";

const { user, setUser } = useAuthStore();

onMounted(async () => {
  console.log("mounted");
  try {
    const userData = await fetchUser();
    setUser(userData);
    console.log("fetched", user);
  } catch (error) {
    console.error(error);
  }
});
</script>
