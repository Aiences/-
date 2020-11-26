<template>
  <div class="dropdown" ref="dropDownRef">
    <a class="btn btn-secondary dropdown-toggle" @click="openDrop">
      {{ title }}
    </a>
    <ul class="dropdown-menu" v-if="isOpenDrop" :style="{ display: 'block' }">
      <li><a class="dropdown-item">新建文章</a></li>
      <li><a class="dropdown-item">编辑资料</a></li>
      <li><a class="dropdown-item">退出登录</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import useClickOutside from "@/hooks/useClickOutside"
export default defineComponent({
  name: "DropDown",
  props: {
    title: {
      type: String,
      required: true
    },
  },
  setup() {
    const isOpenDrop = ref(false)
    const dropDownRef = ref<null | HTMLElement>(null)
    const openDrop = () => {
      isOpenDrop.value = !isOpenDrop.value
    }

    const isClickOutside = useClickOutside(dropDownRef)

    watch(isClickOutside, () => {
      if (isOpenDrop.value && isClickOutside.value) {
        isOpenDrop.value = false
      }
    })

    return {
      isOpenDrop,
      openDrop,
      dropDownRef
    }
  }
})
</script>

<style>
</style>