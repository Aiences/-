<template>
  <div>
    <input
      class="form-control"
      :value="inputRef.value"
      @input="updateValue"
      @blur="validateInput"
      v-bind="$attrs"
    />
    <small class="my-remaind" v-if="inputRef.error">{{
      inputRef.message
    }}</small>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, Ref, ref, toRefs } from "vue";

interface RuleProp {
  type: "required" | "email" | "space"; //可配置
  message: string;
}
const pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/; //校验邮箱规则

export type RulesProp = RuleProp[];

export default defineComponent({
  name: "ValidateInput",
  inheritAttrs: false, //不希望组件的根元素继承attribute
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },
  setup(props, context) {
    console.log(context.attrs);
    const inputRef = reactive({
      value: props.modelValue || "",
      error: false,
      message: "",
    });

    //实现input数据双向绑定
    const updateValue = (e: KeyboardEvent) => {
      const textValue = (e.target as HTMLInputElement).value;
      inputRef.value = textValue;
      context.emit("update:modelValue", textValue);
    };

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let pass = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              pass = inputRef.value.trim() !== "";
              break;
            case "email":
              pass = pattern.test(inputRef.value);
              break;
            case "space":
              pass = inputRef.value.length >= 5;
              break;

            default:
              break;
          }
          return pass;
        });
        inputRef.error = !allPassed;
      }
    };

    return {
      inputRef,
      validateInput,
      updateValue,
    };
  },
});
</script>

<style scoped>
.my-remaind {
  color: red;
}
</style>