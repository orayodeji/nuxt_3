<script setup>
definePageMeta({
  layout: "custom",
});
import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();
console.log(store);

const { data } = await useFetch("/api/hello");
// console.log(res);
console.log(data);
</script>
<template>
  <div class="custom-page">
    Welcome To Event Page

    <pre>{{ data }}</pre>
  </div>
</template>
