<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">email</label>
        <validate-input
          :rules="rules"
          v-model="initValue"
          type="text"
          class="input-box"
        ></validate-input>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  components: { ValidateInput },
  name: "Login",
  setup() {
    const initValue = ref("test");
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

    return {
      rules,
      initValue,
    };
  },
});
</script>

<style scoped>
.input-box {
  border-radius: 4px;
}
</style>
