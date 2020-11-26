<template>
  <teleport to="#model">
    <div class="center" v-if="isOpenModel">
      <h1><slot>this is a model</slot></h1>
      <button @click="closeModel">关闭</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Model",
  props: {
    isOpenModel: Boolean
  },
  emits: {
    'close-model': null    //此处规定的命名方式'xxx-xxx'
  },
  setup(props, context) {
    const closeModel = () => {
      context.emit('close-model')
    }
    return {
      closeModel
    }
  }
})
</script>

<style scoped>
.center {
  width: 200px;
  height: 200px;
  background: #e1e1e1;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>
