<template>
  <h1>{{ msg }}</h1>
  <div>12测试jekins-test222123213122</div>

</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
