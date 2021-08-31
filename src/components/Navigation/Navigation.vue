<template>
  <div class="navigation">
<!-- 标题-->
    <h3 class="title">这里是标题这里是标题</h3>
<!-- 顶部导航  -->
    <ul class="tabs">
      <li class="tab-item">tab1</li>
      <li class="tab-item">tab2</li>
      <li class="tab-item">tab3</li>
      <li class="tab-item">tab4</li>
    </ul>
<!-- 天气 -->
    <div class="weather"></div>
  </div>
</template>

<script>
import {NavigationViewModel} from "@/components/Navigation/NavigationViewModel";
import {mixins} from "vue-class-component";

export default class Navigation extends mixins(NavigationViewModel){
}
</script>

<style scoped>
  .navigation{
    width: 100%;
    height: 65px;
    display: flex;
    background: #1c3669;
    padding: 0 20px;
    color: #ffffff;
  }

  .navigation .tabs{
    list-style: none;
    display: flex;
    line-height: 65px;
  }

  .tabs .tab-item{
    padding: 0 10px;
  }

</style>
