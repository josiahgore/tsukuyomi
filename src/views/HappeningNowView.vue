<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SpringBoard from '../components/SpringBoard.vue';
</script>

<template>
    <div class="text-center font-semithin text-lg">It's Happening!</div>
    <SpringBoard />
    <RouterLink to="/">
        <Button>&laquo;</Button>
    </RouterLink>
</template>
