import { type Ref, ref } from 'vue';

export function useRefHistory<T>(
  source: Ref<T>
) {
  // const history: Ref<UnwrapRefSimple<T>[], T[] | UnwrapRefSimple<T>[]>
  // const history = ref<T[]>([]);
  const history: Ref<T[]> = ref([]);
  const commit = () => {
    history.value.push(source.value);
  };
  return { history, commit };
}