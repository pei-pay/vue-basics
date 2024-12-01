<script setup lang="ts">
import UseCounter01 from '@/components/use-counter/UseCounter01.vue';
import UseCounter02 from '@/components/use-counter/UseCounter02.vue';
import UseCounter03 from '@/components/use-counter/UseCounter03.vue';
</script>

<template>
  <div>
    <p style="color: greenyellow">useCounter 01</p>
    <UseCounter01 />
  </div>
  <div>
    <p style="color: greenyellow">useCounter 02</p>
    <UseCounter02 />
  </div>
  <div>
    <p style="color: greenyellow">useCounter 03</p>
    <UseCounter03 />
  </div>
</template>
