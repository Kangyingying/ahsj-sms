<template>
  <div class="rectification-notices-summary statistics">
    <div class="title">
      <i class="icon"></i>
      <span class="text">整改通知汇总</span>
    </div>

    <p class="summary" >总计 <span>100</span> </p>

    <div class="chart-container"></div>

  </div>
</template>

<script>
import {mixins} from "vue-class-component";
import {RectificationNoticesSummaryViewModel} from './RectificationNoticesSummaryViewModel';

export default class RectificationNoticesSummary extends mixins(RectificationNoticesSummaryViewModel){
}
</script>

<style scoped>
  .rectification-notices-summary{
    width: 287px;
    height: 100%;
  }
</style>
