<script setup lang="ts">
import { ref } from 'vue';
import ClickeyButton from './ClickeyButton';

const counter = ref(0);

const increment = () => {
    counter.value++;
    if (counter.value % 5 === 0) {
        alert(`You have clicked ${counter.value} times! Too many times!`);
    }
};

const instructions = 'Click a few times so I can yell at you.';
</script>

<template>
    <ClickeyButton :instructions="instructions" :onClick="increment" />
</template>
