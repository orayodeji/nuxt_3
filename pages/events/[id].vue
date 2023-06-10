<script setup>
const route = useRoute();
console.log(route.params);
</script>

<template>
  <div>Event Id: {{ $route.params.id }}</div>
</template>
