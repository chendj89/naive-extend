import { inject } from "vue";

export function useDialog2():any {
  const dialog = inject("dialogApiInjectionKey", null);
  if (dialog === null) {
    console.log("use-dialog", "No outer <n-dialog-provider /> founded.");
  }
  console.log('00000')
  return dialog;
}
