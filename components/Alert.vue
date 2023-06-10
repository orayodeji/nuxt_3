<script setup>
const props = defineProps({
  propA: {
    type: String,
    required: true,
  },
  propB: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="bg-green-500 rounded-none px-2">
    This is {{ propA }} {{ propB }}
  </div>
</template>
