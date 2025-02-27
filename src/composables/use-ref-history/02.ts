import { type Ref, ref, computed } from 'vue';

export function useRefHistory<T>(source: Ref<T>) {

  const last = ref(source.value);
  const undoStack: Ref<T[]> = ref([]);
  const redoStack: Ref<T[]> = ref([]);

  const undo = () => {
    const state = undoStack.value.shift();
    if (state !== undefined) {
      redoStack.value.unshift(last.value);
      source.value = state;
      last.value = state;
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state !== undefined) {
      undoStack.value.unshift(last.value);
      source.value = state;
      last.value = state;
    }
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = source.value;
    if (redoStack.value.length) {
      redoStack.value.splice(0, redoStack.value.length);
    }
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };

  const history = computed(() => [last.value, ...undoStack.value]);
  const canUndo = computed(() => undoStack.value.length > 0);
  const canRedo = computed(() => redoStack.value.length > 0);

  return { history, canUndo, canRedo, commit, clear, undo, redo };
}