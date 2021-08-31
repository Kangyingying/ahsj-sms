<template>
  <div class="employee-summary statistics">
    <div class="title">
      <i class="icon"></i>
      <span class="text">职工汇总</span>
    </div>
    <p class="summary" style="top: 30px">总计 <span>100</span> </p>

    <div class="chart-container"></div>
  </div>
</template>

<script>
import {mixins} from "vue-class-component";
import {EmployeeSummaryViewModel} from "@/components/Statistics/Line/EmployeeSummary/EmployeeSummaryViewModel";

export default class EmployeeSummary extends mixins(EmployeeSummaryViewModel){
}
</script>

<style scoped>
  .employee-summary{
    width: 412px;
    height: 156px;
  }
</style>
