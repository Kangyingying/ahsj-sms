<template>
  <div class="project-state-summary statistics">
    <div class="title">
      <i class="icon"></i>
      <span class="text">项目状态统计</span>
    </div>
    <p class="summary">总计 <span>100</span> </p>
    <!--  图表容器  -->
    <div class="chart-container"></div>

  </div>
</template>

<script>
import {mixins} from "vue-class-component";
import {ProjectStateSummaryViewModel} from "@/components/Statistics/Pie/ProjectStateSummary/ProjectStateSummaryViewModel";

export default class ProjectStateSummary extends mixins(ProjectStateSummaryViewModel){
}
</script>

<style scoped>
.project-state-summary{
  width: 412px;
  height: 237px;
}
</style>
