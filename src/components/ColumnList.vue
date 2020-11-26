<template>
  <ul class="row">
    <li v-for="column of list" :key="column.id" class="col-4">
      <img :src="column.avatar" />
      <h5>{{ column.title }}</h5>
      <p>{{ column.describe }}</p>
      <a href="#">进入专栏</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  describe: string;
}
export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    console.log(props, "========rpops");
  },
});
</script>

