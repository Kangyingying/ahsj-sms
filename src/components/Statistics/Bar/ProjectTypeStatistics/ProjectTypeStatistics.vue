<template>
  <div class="project-type-statistics statistics">
    <div class="title">
      <i class="icon"></i>
      <span class="text">项目类型</span>
    </div>
    <p class="summary">总计 <span>100</span> </p>
    <!--  图表容器  -->
    <div class="chart-container"></div>
  </div>
</template>

<script>
import {mixins} from "vue-class-component";
import {ProjectTypeStatisticsViewModel} from "@/components/Statistics/Bar/ProjectTypeStatistics/ProjectTypeStatisticsViewModel";

export default class ProjectTypeStatistics extends mixins(ProjectTypeStatisticsViewModel){
}
</script>

<style scoped>
.project-type-statistics{
  width: 412px;
  height: 237px;
}
</style>
