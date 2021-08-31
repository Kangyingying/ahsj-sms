<template>
  <div class="title">
    <i class="icon"></i>
    <span class="text">{{title}}</span>
    <span v-if="showMore" class="more right">更多</span>
    <CustomSwitch v-if="showSwitch" class="right" style="top: 4px" :datalist="switchData"></CustomSwitch>
  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {TitleBarViewModel} from "@/components/Statistics/TitleBar/TitleBarViewModel";
import CustomSwitch from "@/components/CustomSwitch/CustomSwitch.vue";
@Options({
  props: {
    title: String,
    showMore: Boolean,
    showSwitch: Boolean,
    switchData: Array
  },
  components: {
    CustomSwitch
  }
})
export default class TitleBar extends mixins(TitleBarViewModel){
}
</script>

<style scoped>

</style>
