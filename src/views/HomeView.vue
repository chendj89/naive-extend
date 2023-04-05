<template>
  <div style="padding: 20px">
    <NButton @click="ck">按钮</NButton>
  </div>
</template>

<script setup lang="ts">
import { useDialog2 } from "@/components/dialog/composables";
import type { NButton } from "naive-ui";
import { onMounted } from "vue";
const dialog = useDialog2();

const ck = async () => {
  const res = await dialog.create({
    temp: "/temp/add.vue",
  });
  console.log(res);
};

ck();
</script>

<style scoped></style>
