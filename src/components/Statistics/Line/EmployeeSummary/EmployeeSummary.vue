<template>
  <div class="employee-summary statistics">
    <TitleBar :title="'职工汇总'"></TitleBar>
    <p class="summary" style="top: 30px">总计 <span>2800</span> </p>

    <div class="chart-container"></div>
  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {EmployeeSummaryViewModel} from "@/components/Statistics/Line/EmployeeSummary/EmployeeSummaryViewModel";
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
@Options({
  components: {
    TitleBar
  }
})
export default class EmployeeSummary extends mixins(EmployeeSummaryViewModel){
}
</script>

<style scoped>
  .employee-summary{
    width: 412px;
    height: 156px;
  }
</style>
