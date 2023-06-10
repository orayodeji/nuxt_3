<script setup>
const counter = useCounter();
</script>

<template>
  <div class="Main">
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
