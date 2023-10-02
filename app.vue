<template>
  <div class="app-body">
    <NuxtLayout>
      <NuxtPage class="background min-h-screen" />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "Chess Game",
  meta: [{ name: "ChessGame", content: "Will you mate?" }],
});
</script>
<style></style>
