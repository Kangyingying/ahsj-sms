<template>
  <div class="project-type-statistics statistics">
    <TitleBar :title="'项目类型'"></TitleBar>
    <p class="summary">总计 <span>300</span> </p>
    <!--  图表容器  -->
    <div class="chart-container"></div>
  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {ProjectTypeStatisticsViewModel} from "@/components/Statistics/Bar/ProjectTypeStatistics/ProjectTypeStatisticsViewModel";
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
@Options({
  components: {
    TitleBar
  }
})
export default class ProjectTypeStatistics extends mixins(ProjectTypeStatisticsViewModel){
}
</script>

<style scoped>
.project-type-statistics{
  width: 412px;
  height: 237px;
}
</style>
