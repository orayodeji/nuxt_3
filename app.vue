<template>
  <div class="text-blue-600">
    <NuxtLayout>
      <header class="header">
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink :to="{ name: 'events' }">Events</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
