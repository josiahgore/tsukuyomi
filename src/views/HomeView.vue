<script setup lang="ts">
import { Navbar, NavbarLogo } from 'flowbite-vue';
import { ROUTES } from '@/router/constants';
</script>

<template>
    <nav class="grid grid-cols-2 gap-4">
        <RouterLink :to="{ path: ROUTES.Pomodoro }">
            <Button>Set a Timer</Button>
        </RouterLink>
        <RouterLink :to="{ path: ROUTES.HappeningNow }">
            <Button>What's Happening Now &raquo;</Button>
        </RouterLink>
        <RouterLink :to="{ path: ROUTES.InFlight }">
            <Button>On My Plate</Button>
        </RouterLink>
        <RouterLink :to="{ path: ROUTES.OnDeck }">
            <Button>On Deck</Button>
        </RouterLink>
        <!-- TODO global create new -->
    </nav>
</template>
