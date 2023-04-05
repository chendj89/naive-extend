<script setup lang="ts">
import { RouterView } from "vue-router";
import { NDialogProvider2 } from "@/components/dialog/DialogProvider.jsx";
</script>

<template>
  <NDialogProvider2>
    <RouterView />
  </NDialogProvider2>
</template>

<style scoped></style>
