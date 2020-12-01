<template>
  <form>
    <slot name="header"></slot>

    <slot name="submit">
      <div style="margin-top: 10px" @click="submit">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </slot>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import mitt from "mitt";
export const emitter = mitt();
type validateResultType = () => void;

export default defineComponent({
  name: "ValidateForm",
  emits: ["do-submit"],
  setup(props, context) {
    let validateResults: validateResultType[] = [];
    const callback = (val?: validateResultType) => {
      if (val) {
        validateResults.push(val);
      }
    };

    //提交
    const submit = () => {
      const flag = validateResults.map((func) => func()).every((res) => res);
      context.emit("do-submit", flag);
    };

    //接受input创建广播事件
    emitter.on("validate-create", callback);

    onUnmounted(() => {
      emitter.all.clear();
      validateResults = [];
    });

    return {
      submit,
      callback,
    };
  },
});
</script>

<style scoped>
</style>

