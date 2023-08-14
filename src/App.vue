<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { Navbar } from 'flowbite-vue';
</script>

<template>
    <div id="app-container">
        <nav>
            <Navbar>
                <template #logo>
                    <RouterLink to="/">
                        <img alt="logo" src="@/assets/logo.svg" width="50" height="50" />
                    </RouterLink>
                </template>
            </Navbar>
        </nav>

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
