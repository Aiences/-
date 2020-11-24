<template>
  <div class="home">
    <h1>{{ count }}</h1>
    <h2>{{ double }}</h2>
    <h3>鼠标点击的位置：X:{{ x }},Y:{{ y }}</h3>
    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
    <h1>{{ person.name }}</h1>
    <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">
import { ref, computed, reactive, toRefs } from "vue";
import useMousePosition from "@/hooks/useMousePosition";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: {
    name?: string;
  };
}
export default {
  name: "Home",
  setup() {
    //在模板中引用时，vue会自动对应ref对象的value值
    // const count = ref(1); //ref() 返回的是一个对象,传入的参数为原始值类型
    // const double = computed(() => {
    //   return count.value * 2;
    // });
    // const increase = () => {
    //   count.value++;
    // };

    //ref 与 reactive 使用原则
    //1.ref的参数为原始值类型；reactive 的参数可以为任意类型
    //2.reactive 必须与toRefs 一起使用，才能输出响应式对象

    const { x, y } = useMousePosition();

    const data2: DataProps = reactive({
      count: 0,
      double: computed(() => {
        return data2.count * 2;
      }),
      increase: () => {
        data2.count++;
      },
      numbers: [0, 1, 2],
      person: {},
    });
    data2.numbers[0] = 5;
    data2.person.name = "wwj";

    const refDatas = toRefs(data2);

    return {
      ...refDatas,
      x,
      y,
    };
  },
};
</script>
