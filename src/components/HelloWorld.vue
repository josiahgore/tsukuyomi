<script setup lang="ts">
defineProps<{
    msg: string;
}>();
</script>

<template>
    <h3 class="text-center text-2xl font-semithin">{{ msg }}</h3>
</template>
