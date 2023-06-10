<script setup>
const { sayHello } = useUtils();
sayHello();
const { $sayHello } = useNuxtApp();
$sayHello("Tunji");
definePageMeta({
  middleware: "auth",
});
const color = useColor();
</script>

<template>
  <!-- <ProfileHeader />
    <ProfileHeaderAvatar /> -->
  <div class="Main">
    <div>Home Page Vue</div>
    <Alert propA="Hello World" :propB="7" />

    <img src="@/assets/pic-4.png" alt="" />
    <IconsBell style="font-size: 40px" />
    <ContentDoc />
    <p>Current Color: {{ color }}</p>
    <Counter />
  </div>
</template>
