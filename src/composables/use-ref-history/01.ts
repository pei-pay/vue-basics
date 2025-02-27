import { type Ref, ref, unref } from 'vue';

export function useRefHistory<T>(source: Ref<T>) {
  // TODO: Comment why it needs assertion
  const history = ref<T[]>([source.value]) as Ref<T[]>;
  const commit = () => {
    history.value.push(source.value);
  };
  const reset = () => {
    history.value = [source.value];
  };
  return { history, commit, reset };
}