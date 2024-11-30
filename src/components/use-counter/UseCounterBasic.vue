<script setup lang="ts">
import { useCounter } from '@/composables/use-counter/basic';

const { count, inc, dec, reset } = useCounter();
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="inc()">
      Increment
    </button>
    <button @click="dec()">
      Decrement
    </button>
    <button @click="reset()">
      Reset
    </button>
  </div>
</template>
