<template>
  <div class="project-state-summary statistics">
    <TitleBar :title="'项目状态统计'"></TitleBar>
    <p class="summary">总计 <span>300</span> </p>
    <!--  图表容器  -->
    <div class="chart-container"></div>

  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {ProjectStateSummaryViewModel} from "@/components/Statistics/Pie/ProjectStateSummary/ProjectStateSummaryViewModel";
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
@Options({
  components: {
    TitleBar
  }
})
export default class ProjectStateSummary extends mixins(ProjectStateSummaryViewModel){
}
</script>

<style scoped>
.project-state-summary{
  width: 412px;
  height: 237px;
}
</style>
