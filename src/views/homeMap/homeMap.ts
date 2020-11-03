import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { HomeMapData } from '@/types/views/homeMap.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter homeMap.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: HomeMapData = {
    pageName: 'homeMap'
  }

  created() {
    //
  }
    
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}
