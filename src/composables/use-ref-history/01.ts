import { type Ref, ref } from 'vue';

export function useRefHistory<T>(source: Ref<T>) {
  // TODO: Comment why it needs assertion
  const history = ref<T[]>([source.value]) as Ref<T[]>;
  const commit = () => {
    history.value.unshift(source.value);
  };
  const clear = () => {
    history.value = [source.value];
  };
  return { history, commit, clear };
}