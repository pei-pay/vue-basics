import { ref } from 'vue';

export function useCounter(initialValue: number = 0) {
  const count = ref(initialValue);

  const inc = (delta = 1) => count.value = count.value + delta;
  const dec = (delta = 1) => count.value = count.value - delta;
  const set = (val: number) => count.value = val;
  const reset = (val = initialValue) => {
    initialValue = val;
    return set(val);
  };

  return { count, inc, dec, set, reset };
}