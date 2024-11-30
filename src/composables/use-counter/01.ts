import { ref } from 'vue';

export function useCounter() {
  const count = ref(0);

  const inc = () => count.value = count.value + 1;
  const dec = () => count.value = count.value - 1;
  const reset = () => count.value = 0;

  return { count, inc, dec, reset };
}