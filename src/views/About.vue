
<template>
  <div class="container">
    <Header :userInfo="userInfo"></Header>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";
import Header, { UserProps } from "@/components/Header.vue";
const columnList: ColumnProps = [
  {
    id: 10,
    title: "我的文章",
    describe: "文章描述",
  },
  {
    id: 11,
    title: "我的文章",
    describe: "文章描述",
  },
];
const userInfo: UserProps = {
  isLogin: true,
  name: "wwj",
};
export default defineComponent({
  name: "About",
  components: {
    ColumnList,
    Header,
  },
  setup() {
    return {
      list: columnList,
      userInfo,
    };
  },
});
</script>


