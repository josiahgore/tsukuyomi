<script setup lang="ts">
import SpringBoard from '../components/SpringBoard.vue'
</script>

<template>
  <div class="spring-board">
    <SpringBoard />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .spring-board {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
