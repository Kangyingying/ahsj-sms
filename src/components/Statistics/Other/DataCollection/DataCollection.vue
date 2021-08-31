<template>
  <div class="data-collection statistics">
    <div class="title">
      <i class="icon"></i>
      <span class="text">集采数据</span>
    </div>
<!--  数据容器  -->
    <div class="chart-container">
      <p class="summary">招标项目数 <span>1234</span> </p>
      <p class="summary">定标项目数 <span>1234</span> </p>
      <p class="summary">定标交易额 <span>1234</span> </p>
    </div>

  </div>
</template>

<script>
import {mixins} from "vue-class-component";
import {DataCollectionViewModel} from "./DataCollectionViewModel";

export default class DataCollection extends mixins(DataCollectionViewModel){
}
</script>

<style scoped>
  .data-collection{
    width: 268px;
    height: 100%;
  }

  .data-collection .chart-container{
  }

  .data-collection .chart-container .summary{
    position: unset !important;
    left: unset !important;
    top: unset !important;
    /*margin: unset !important;*/
    text-align: center;
    margin-top: 26px;
  }

  .data-container span{
    margin-left: 31px;
  }

</style>
