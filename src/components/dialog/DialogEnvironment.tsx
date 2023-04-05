import { Fragment, Teleport, defineComponent } from "vue";
import { NDialog2 } from "./Dialog";

export const NDialogEnvironment2 = defineComponent({
  name: "DialogEnvironment2",
  render() {
    console.log(this)
    return (
      <Teleport to="body">
        <div></div>
      </Teleport>
    );
  },
});
