<template>
  <div>add天才</div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const ins=getCurrentInstance()
console.log(ins?.appContext.config.globalProperties.msg)
</script>

<style scoped></style>
