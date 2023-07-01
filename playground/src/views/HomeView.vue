<template>
  <button @click="handleJSError">js 错误</button>
</template>

<script lang="ts" setup>
function handleJSError() {
  const a: any = null

  console.log(a.length)
}
</script>
