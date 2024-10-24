<template>
    <section class="bg-inherit w-full h-full justify-center overflow-auto items-center flex flex-col">
        <div class="max-w-6xl mx-auto flex flex-col items-center">
            <div class="flex flex-col items-center gap-4 mb-8">
                <Icon name="mdi:nuxt" class="text-green-500 w-16 h-16" />
                <h1 class="text-gray-100 text-4xl font-bold">Nuxt Starter</h1>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                <div
                    class="bg-neutral-800/50 p-6 rounded-xl backdrop-blur-sm border border-neutral-700/50 hover:border-green-500/50 transition-all group">
                    <div class="flex flex-col items-center gap-3">
                        <Icon name="logos:pinia"
                            class="w-12 h-12 text-green-500 group-hover:scale-110 transition-transform" />
                        <span class="text-gray-300 font-medium">Pinia</span>
                    </div>
                </div>
                <div
                    class="bg-neutral-800/50 p-6 rounded-xl backdrop-blur-sm border border-neutral-700/50 hover:border-blue-500/50 transition-all group">
                    <div class="flex flex-col items-center gap-3">
                        <Icon name="simple-icons:drizzle"
                            class="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform" />
                        <span class="text-gray-300 font-medium">Drizzle ORM</span>
                    </div>
                </div>
                <div
                    class="bg-neutral-800/50 p-6 rounded-xl backdrop-blur-sm border border-neutral-700/50 hover:border-purple-500/50 transition-all group">
                    <div class="flex flex-col items-center gap-3">
                        <Icon name="simple-icons:biome"
                            class="w-12 h-12 text-purple-500 group-hover:scale-110 transition-transform" />
                        <span class="text-gray-300 font-medium">Biome</span>
                    </div>
                </div>
                <div
                    class="bg-neutral-800/50 p-6 rounded-xl backdrop-blur-sm border border-neutral-700/50 hover:border-sky-500/50 transition-all group">
                    <div class="flex flex-col items-center gap-3">
                        <Icon name="mdi:docker"
                            class="w-12 h-12 text-sky-500 group-hover:scale-110 transition-transform" />
                        <span class="text-gray-300 font-medium">Docker</span>
                    </div>
                </div>
                <div
                    class="bg-neutral-800/50 p-6 rounded-xl backdrop-blur-sm border border-neutral-700/50 hover:border-amber-500/50 transition-all group">
                    <div class="flex flex-col items-center gap-3">
                        <Icon name="simple-icons:bun"
                            class="w-12 h-12 text-amber-500 group-hover:scale-110 transition-transform" />
                        <span class="text-gray-300 font-medium">Bun</span>
                    </div>
                </div>
                <div
                    class="bg-neutral-800/50 p-6 rounded-xl backdrop-blur-sm border border-neutral-700/50 hover:border-teal-500/50 transition-all group">
                    <div class="flex flex-col items-center gap-3">
                        <Icon name="simple-icons:unocss"
                            class="w-12 h-12 text-teal-500 group-hover:scale-110 transition-transform" />
                        <span class="text-gray-300 font-medium">UnoCSS</span>
                    </div>
                </div>
                <div
                    class="md:col-span-3 bg-neutral-800/50 p-6 rounded-xl backdrop-blur-sm border border-neutral-700/50 hover:border-yellow-500/50 transition-all group">
                    <div class="flex flex-col items-center gap-3">
                        <Icon name="mdi:nuxt"
                            class="w-12 h-12 text-green-500 group-hover:scale-110 transition-transform" />
                        <span class="text-gray-300 font-medium">Nuxt 3</span>
                    </div>
                </div>
            </div>
            <HomeCounter />
        </div>
    </section>
</template>