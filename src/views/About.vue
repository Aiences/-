
<template>
  <div class="container">
    <Header></Header>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";
import Header from "@/components/Header.vue";
const columnList: ColumnProps[] = [
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

export default defineComponent({
  name: "About",
  components: {
    ColumnList,
    Header,
  },
  setup() {
    return {
      list: columnList,
    };
  },
});
</script>


