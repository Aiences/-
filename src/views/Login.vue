<template>
  <div class="container">
    <validate-form @do-submit="doSubmit">
      <template #header>
        <div class="form-group">
          <label for="exampleInputEmail1">email</label>
          <validate-input
            :rules="rules"
            v-model="initValue"
            type="text"
          ></validate-input>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <validate-input
            :rules="passwordRules"
            v-model="pdValue"
            type="password"
          ></validate-input>
        </div>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue";
import { defineComponent, reactive, ref } from "vue";
import ValidateForm from "@/components/ValidateForm.vue";

export default defineComponent({
  components: { ValidateInput, ValidateForm },
  name: "Login",
  setup() {
    const initValue = ref("test");
    const pdValue = ref("");
    const rules: RulesProp = [
      {
        type: "required",
        message: "请输入邮箱",
      },
      {
        type: "email",
        message: "请输入正确的邮箱地址",
      },
    ];

    const passwordRules: RulesProp = [
      {
        type: "required",
        message: "请输入密码",
      },
      {
        type: "space",
        message: "密码长度不少于5个字符",
      },
    ];

    const doSubmit = (val: boolean) => {
      console.log(val, "========");
    };

    return {
      rules,
      passwordRules,
      initValue,
      pdValue,
      doSubmit,
    };
  },
});
</script>

<style scoped>
</style>
