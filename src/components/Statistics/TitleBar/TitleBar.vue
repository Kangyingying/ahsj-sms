<template>
  <div class="title">
    <i class="icon"></i>
    <span class="text">{{title}}</span>
  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {TitleBarViewModel} from "@/components/Statistics/TitleBar/TitleBarViewModel";

@Options({
  props: {
    title: String
  }
})
export default class TitleBar extends mixins(TitleBarViewModel){
}
</script>

<style scoped>

</style>
