<script setup lang="ts">
import { useCounter } from '@/composables/use-counter';
import { useRefHistory } from '@/composables/use-ref-history/02';

const { count, inc, dec } = useCounter();
const { history, canUndo, canRedo, commit, clear, undo, redo } = useRefHistory(count);
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
      Commit
    </button>
    <button @click="clear()">
      Clear
    </button>
    <button :disabled="!canUndo" @click="undo()">
      Undo
    </button>
    <button :disabled="!canRedo" @click="redo()">
      Redo
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
