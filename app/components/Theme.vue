<script setup lang="ts">
const colorMode = useColorMode({
	modes: {
		light: "light",
		dark: "dark",
	},
});
const isDark = useState("isDark", () => true);

const toggleColorMode = () => {
	colorMode.value = colorMode.value === "light" ? "dark" : "light";
	isDark.value = !isDark.value;
};

onMounted(() => {
	isDark.value = colorMode.value === "dark";
});
</script>

<template>
    <button @click="toggleColorMode" class="p-2 bg-inherit border-none">
        <Icon name="solar:moon-bold" v-if="isDark" class="p-1 text-white" />
        <Icon name="solar:sun-bold" v-else  class="p-1 text-black" />
    </button>
</template>