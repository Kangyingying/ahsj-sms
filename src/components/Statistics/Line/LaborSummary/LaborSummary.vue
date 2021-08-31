<template>
  <div class="labor-summary statistics">
    <div class="title">
      <i class="icon"></i>
      <span class="text">劳务用工汇总</span>
    </div>
    <p class="summary" style="top: 30px">总计 <span>100</span> </p>

    <div class="chart-container"></div>
  </div>
</template>

<script>
import {mixins} from "vue-class-component";
import {LaborSummaryViewModel} from "@/components/Statistics/Line/LaborSummary/LaborSummaryViewModel";

export default class LaborSummary extends mixins(LaborSummaryViewModel){
}
</script>

<style scoped>
  .labor-summary{
    width: 412px;
    height: 156px;
  }
</style>
