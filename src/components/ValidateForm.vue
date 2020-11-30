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
import { defineComponent } from "vue";

export default defineComponent({
  name: "ValidateForm",
  setup(props, context) {
    const submit = () => {
      context.emit("do-submit", true);
    };

    return {
      submit,
    };
  },
});
</script>

<style  scoped>
</style>

