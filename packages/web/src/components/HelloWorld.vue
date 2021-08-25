<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'HelloWorld' })
</script>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

defineProps<{ msg: string }>()

let count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
</template>
