<template>
  <div class="project-statistics statistics">
    <div class="title">
      <i class="icon"></i>
      <span class="text">项目分析</span>
    </div>

    <p class="summary">年度项目目标值 <span>389</span> </p>
<!--  图表容器  -->
    <div class="chart-container"></div>

  </div>
</template>

<script>
import {mixins} from "vue-class-component";
import {ProjectStatisticsViewModel} from "@/components/Statistics/Bar/ProjectStatistics/ProjectStatisticsViewModel";

export default class ProjectStatistics extends mixins(ProjectStatisticsViewModel){
}
</script>

<style scoped>
  .project-statistics{
    width: 412px;
    height: 237px;
  }
</style>
