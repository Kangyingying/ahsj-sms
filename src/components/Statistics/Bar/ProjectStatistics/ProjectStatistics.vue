<template>
  <div class="project-statistics statistics">
   <TitleBar :title="'项目分析'" :showSwitch="true" :switchData="['本周', '本月', '本年']"></TitleBar>
    <p class="summary">年度项目目标值 <span>389</span> </p>
<!--  图表容器  -->
    <div class="chart-container"></div>

  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {ProjectStatisticsViewModel} from "@/components/Statistics/Bar/ProjectStatistics/ProjectStatisticsViewModel";
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
@Options({
  components: {
    TitleBar
  }
})
export default class ProjectStatistics extends mixins(ProjectStatisticsViewModel){
}
</script>

<style scoped>
  .project-statistics{
    width: 412px;
    height: 237px;
  }
</style>
