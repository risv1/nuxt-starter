<script setup lang="ts">

const props = defineProps<{
    isLogin: boolean;
    text: string;
    toggle: () => void;
}>()

const title = computed(() => props.isLogin ? 'Login' : 'Sign Up');

const username = ref('');
const email = ref('');
const password = ref('');

const submit = () => {
    console.log({ username: username.value, email: email.value, password: password.value });
}
</script>

<template>
    <form
        bg="white dark:neutral-900"
        border="rounded neutral-300"
        class="p-6 rounded-lg shadow-lg"
        @submit.prevent="submit"
        >
        <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
        <label class="block mb-2">
            <span class="text-sm">Username</span>
            <input
                v-model="username"
                type="text"
                class="w-full border rounded-lg p-2"
                placeholder="Username"
            />
        </label>
        <label class="block mb-2">
            <span class="text-sm">Email</span>
            <input
                v-model="email"
                type="email"
                class="w-full border rounded-lg p-2"
                placeholder="Email"
            />
        </label>
        <label class="block mb-2">
            <span class="text-sm">Password</span>
            <input
                v-model="password"
                type="password"
                class="w-full border rounded-lg p-2"
                placeholder="Password"
            />
        </label>
        <button
            bg="green-500"
            border="rounded green-600"
            class="w-full text-white p-2 rounded-lg"
            type="submit"
        >
            {{ props.isLogin ? 'Login' : 'Sign Up' }}
        </button>
    </form>
</template>