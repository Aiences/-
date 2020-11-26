<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">知乎者也</a>
    <ul v-if="!userInfo.isLogin" class="list-inline">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登录</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>

    <drop-down v-else :title="title"> </drop-down>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import DropDown from "@/components/DropDown.vue"

export interface UserProps {
  isLogin: boolean;
  name?: string;
  userId?: number;
}

export default defineComponent({
  name: "Header",
  props: {
    userInfo: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  components: {
    DropDown
  },
  setup(props) {
    const title = ref("你好！" + props.userInfo.name)

    return {
      title
    }

  },
});
</script>