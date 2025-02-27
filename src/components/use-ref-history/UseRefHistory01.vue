<script setup lang="ts">
import { useCounter } from '@/composables/use-counter';
import { useRefHistory } from '@/composables/use-ref-history/01';

const { count, inc, dec, reset: resetCounter } = useCounter();
const { history, commit, reset: resetHistory } = useRefHistory(count);
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
    <span style="margin: 0 8px;">/</span>
    <button @click="commit()">
      Commit history
    </button>
    <button @click="resetHistory()">
      Reset history
    </button>
    <br>
    <br>
    <p>History</p>
    <div>
      <span>index: value</span>
      <div v-for="(item, index) in history" :key="index">
        <span>{{ index }}: {{ item }}</span>
      </div>
    </div>
  </div>
</template>
