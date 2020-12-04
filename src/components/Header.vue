<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">知乎者也</a>
    <ul v-if="!currentUser.isLogin" class="list-inline">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">登录</a>
      </li>
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">注册</a>
      </li>
    </ul>

    <drop-down v-else :title="currentUser.name"> </drop-down>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import DropDown from "@/components/DropDown.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Header",
  components: {
    DropDown,
  },
  setup() {
    const store = useStore();
    const currentUser = computed(() => store.state.users);
    return {
      currentUser,
    };
  },
});
</script>