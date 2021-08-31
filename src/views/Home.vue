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
<!--  采集定标交易TOP5物料    -->
      <TopMaterial class="chart-container-bg"></TopMaterial>
    </div>
<!-- 第二列-->
    <div class="column second">
  <!--  项目概览    -->
      <ProjectOverview class="chart-container-bg margin-h margin-bottom"></ProjectOverview>

      <div class="margin-h" style="height: 234px; display: flex;">
<!--   数据采集     -->
        <DataCollection class="chart-container-bg margin-right"></DataCollection>
<!--   整改到期预警     -->
        <RectificationExpiration class="chart-container-bg margin-right"></RectificationExpiration>
<!--   整改通知汇总     -->
        <RectificationNoticesSummary class="chart-container-bg"></RectificationNoticesSummary>
      </div>

    </div>
<!--  第三列  -->
    <div class="column third">
<!--   设备数量汇总   -->
      <DeviceSummary class="chart-container-bg margin-bottom"></DeviceSummary>
<!--   设备来源汇总   -->
      <DeviceSourceSummary class="chart-container-bg margin-bottom"></DeviceSourceSummary>
<!--  年检到期预警    -->
      <AnnualInspectionExpiration class="chart-container-bg margin-bottom"></AnnualInspectionExpiration>
<!--  职工汇总    -->
      <EmployeeSummary class="chart-container-bg margin-bottom"></EmployeeSummary>
<!--  劳务用工汇总    -->
      <LaborSummary class="chart-container-bg"></LaborSummary>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProjectStatistics from '@/components/Statistics/Bar/ProjectStatistics/ProjectStatistics.vue';
import ProjectTypeStatistics from '@/components/Statistics/Bar/ProjectTypeStatistics/ProjectTypeStatistics.vue';
import ProjectStateSummary from '@/components/Statistics/Pie/ProjectStateSummary/ProjectStateSummary.vue';
import TopMaterial from '@/components/Statistics/Table/TopMaterial/TopMaterial.vue';
import ProjectOverview from '@/components/Statistics/Other/ProjectOverview/ProjectOverview.vue';
import DataCollection from '@/components/Statistics/Other/DataCollection/DataCollection.vue';
import RectificationExpiration from '@/components/Statistics/Table/RectificationExpiration/RectificationExpiration.vue';
import RectificationNoticesSummary from '@/components/Statistics/Bar/RectificationNoticesSummary/RectificationNoticesSummary.vue';
import DeviceSummary from '@/components/Statistics/Other/DeviceSummary/DeviceSummary.vue';
import DeviceSourceSummary from '@/components/Statistics/Pie/DeviceSourceSummary/DeviceSourceSummary.vue';
import AnnualInspectionExpiration from '@/components/Statistics/Table/AnnualInspectionExpiration/AnnualInspectionExpiration.vue';
import EmployeeSummary from '@/components/Statistics/Line/EmployeeSummary/EmployeeSummary.vue';
import LaborSummary from '@/components/Statistics/Line/LaborSummary/LaborSummary.vue';

@Options({
  components: {
    /*第一列组件*/
    ProjectStatistics,
    ProjectTypeStatistics,
    ProjectStateSummary,
    TopMaterial,
    /*第二列组件*/
    ProjectOverview,
    DataCollection,
    RectificationExpiration,
    RectificationNoticesSummary,
    /*第三列组件*/
    DeviceSummary,
    DeviceSourceSummary,
    AnnualInspectionExpiration,
    EmployeeSummary,
    LaborSummary

  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.home{
  height: calc(100% - 65px);
  padding: 19px 29px 54px 29px;
  display: flex;
}

</style>
