<template>
  <div class="home">
<!--  第一列  -->
    <div class="column first">
<!--  项目统计    -->
      <ProjectStatistics class="chart-container-bg margin-bottom"></ProjectStatistics>
<!--  项目类型   -->
      <ProjectTypeStatistics class="chart-container-bg margin-bottom"></ProjectTypeStatistics>
<!--  项目状态    -->
      <ProjectStateSummary class="chart-container-bg margin-bottom"></ProjectStateSummary>
      <!--  项目状态    -->
      <TopMaterial class="chart-container-bg margin-bottom"></TopMaterial>
    </div>
<!-- 第二列  -->
<!--    <div class="column second">-->
<!--      <div class="center column-item" style="height: 66%"></div>-->
<!--      <div style="display:flex; height: 20%" >-->
<!--        <div class="column-item" style="width: 33%; height: 100%; margin-right: 19px"></div>-->
<!--        <div class="column-item" style="width: 33%; height: 100%; margin-right: 19px"></div>-->
<!--        <div class="column-item" style="width: 33%; height: 100%"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--&lt;!&ndash;  第三列  &ndash;&gt;-->
<!--    <div class="column third">-->
<!--      <div class="column-item"></div>-->
<!--      <div class="column-item"></div>-->
<!--      <div class="column-item"></div>-->
<!--    </div>-->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProjectStatistics from '@/components/Statistics/Bar/ProjectStatistics/ProjectStatistics.vue';
import ProjectTypeStatistics from '@/components/Statistics/Bar/ProjectTypeStatistics/ProjectTypeStatistics.vue';
import ProjectStateSummary from '@/components/Statistics/Pie/ProjectStateSummary/ProjectStateSummary.vue';
import TopMaterial from '@/components/Statistics/Table/TopMaterial/TopMaterial.vue';

@Options({
  components: {
    ProjectStatistics,
    ProjectTypeStatistics,
    ProjectStateSummary,
    TopMaterial
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.home{
  height: calc(100% - 65px);
  margin: 19px 29px 54px 29px;
  display: flex;
}

</style>
