import {
  Fragment,
  Teleport,
  createVNode,
  defineAsyncComponent,
  defineComponent,
  h,
  provide,
  reactive,
  ref,
  resolveComponent,
} from "vue";
export function loadComponents() {
  return import.meta.glob("/src/components/temp/*.*");
}
export const asynComponents = loadComponents();
export function getFilePath(it: any) {
  return "/src/components" + it;
}
export function getComponent(it: any) {
  return asynComponents[getFilePath(it)];
}
console.log(asynComponents);
export const NDialogProvider2 = defineComponent({
  name: "DialogProvider2",
  setup() {
    let index = 0;
    const dialogListRef = ref<any[]>([]);
    const create = (options: any) => {
      let com = null;
      if (options.temp) {
        com = getComponent(options.temp);
      }
      const key = index++;
      const dialogReactive = reactive({
        ...options,
        key,
        com,
        destory: () => {},
      });
      dialogListRef.value.push(dialogReactive);
      return new Promise((resolve) => {
        resolve(dialogReactive);
      });
    };
    const api = {
      create,
      success: (options: any) => {
        console.log(options, "success");
        return create({ ...options, type: "suceess" });
      },
    };

    provide("dialogApiInjectionKey", api);
    return {
      ...api,
      dialogList: dialogListRef,
    };
  },
  render() {
    console.log("--xxx", this.dialogList);
    if (this.dialogList.length) {
      return h(Fragment, null, [
        h(Teleport, { to: "body" }, [
          this.dialogList.map((item) => h(defineAsyncComponent(item.com))),
        ]),
        this.$slots.default?.(),
      ]);
    } else {
      return h(Fragment, null, [this.$slots.default?.()]);
    }
  },
});
