<script setup lang="ts">
const isLogin = ref(true);

const toggleType = () => {
	isLogin.value = !isLogin.value;
};

const toggleText = computed(() =>
	isLogin.value
		? "Already have an account? Login here!"
		: "Don't have an account? Sign up here!",
);
</script>

<template>
    <main class="w-screen h-screen flex justify-center items-center">
        <AuthForm :text="toggleText" toggle="toggleType" :isLogin="isLogin" />
    </main>
</template>