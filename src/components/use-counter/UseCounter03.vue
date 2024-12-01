<script setup lang="ts">
import { useCounter } from '@/composables/use-counter/03';

const { count, inc, dec, set, reset } = useCounter(10, { min: 0, max: 100 });
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
    <button @click="inc(5)">
      Increment (+5)
    </button>
    <button @click="dec(5)">
      Decrement (-5)
    </button>
    <button @click="set(100)">
      Set (100)
    </button>
    <button @click="reset()">
      Reset
    </button>
    <button @click="reset(20)">
      Reset (20)
    </button>
  </div>
</template>