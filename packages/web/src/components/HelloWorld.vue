<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'HelloWorld' })
</script>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{ msg: string }>()

let count = ref(0)
</script>

<template>
  <h1>{{ props.msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
</template>
