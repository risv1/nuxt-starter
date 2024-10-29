<script setup lang="ts">
const colorMode = useColorMode({
  modes: {
    light: "light",
    dark: "dark",
  },
});
const isDark = useState("isDark", () => true);

function toggleColorMode() {
  colorMode.value = colorMode.value === "light" ? "dark" : "light";
  isDark.value = !isDark.value;
}

onMounted(() => {
  isDark.value = colorMode.value === "dark";
});
</script>

<template>
  <button class="border-none bg-inherit p-2" @click="toggleColorMode">
    <Icon v-if="isDark" name="solar:moon-bold" class="p-1 text-white" />
    <Icon v-else name="solar:sun-bold" class="p-1 text-black" />
  </button>
</template>
