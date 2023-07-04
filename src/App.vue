<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
    <div id="app-container">
        <header class="w-screen py-8 flex flex-col items-center">
            <div class="mb-6 flex justify-center">
                <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />
            </div>

            <HelloWorld msg="A Wild Project Appears!" />

            <nav class="mt-8 w-1/4 flex">
                <RouterLink class="flex-1 text-center" to="/">Home</RouterLink>
                <RouterLink class="flex-1 text-center" to="/about">About</RouterLink>
            </nav>
        </header>

        <RouterView class="p-16" />
    </div>
</template>

<style>
:root {
    --background-color: #282828;
}
#app-container {
    height: 100vh;
    background-color: var(--background-color);
    color: #00bd7e;
}
</style>
