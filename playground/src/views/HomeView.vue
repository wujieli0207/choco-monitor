<template>
  <button @click="handleJSError">js 错误</button>
  <button @click="handleAsyncError">异步错误</button>
</template>

<script lang="ts" setup>
function handleJSError() {
  const a: any = null

  console.log(a.length)
}

function handleAsyncError() {
  setTimeout(() => {
    JSON.parse('')
  })
}
</script>
