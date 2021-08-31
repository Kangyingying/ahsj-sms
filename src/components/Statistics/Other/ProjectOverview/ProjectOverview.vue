<template>
  <div class="project-overview statistics">
    <div class="map-container"></div>
    <div class="content">
      <!--  汇款金额  -->
      <div class="refund">
        <div style="margin: auto; display: flex">
          <div>截止目前回款金额(万元)</div>
          <div class="symbol">￥</div>
          <span class="value">5732</span>
        </div>
      </div>
      <!--  实时环境  -->
      <RealtimeEnvironment class="environment"></RealtimeEnvironment>
      <!--   产值统计-->
      <OutputSummary class="chart-container-bg"></OutputSummary>

      <ToolTip class="building1" :buildingInfo="buildingInfo1"></ToolTip>
      <ToolTip class="building2" :buildingInfo="buildingInfo2"></ToolTip>
    </div>
  </div>
</template>

<script>
import {mixins, Options} from 'vue-class-component';
import {ProjectOverviewViewModel} from './ProjectOverviewViewModel';
import OutputSummary from '@/components/Statistics/Other/OutputSummary/OutputSummary.vue';
import RealtimeEnvironment from '@/components/Statistics/Other/RealtimeEnvironment/RealtimeEnvironment.vue';
import ToolTip from '@/components/Statistics/ToolTip/ToolTip.vue';
@Options({
  components: {
    OutputSummary,
    RealtimeEnvironment,
    ToolTip
  }
})
export default class ProjectOverview extends mixins(ProjectOverviewViewModel){
}
</script>

<style scoped>
  .project-overview{
    width: 1003px;
    height: 698px;
    position: relative;
  }
  .project-overview .map-container{
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, .3);
  }
  .project-overview .content{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
  }

  .project-overview .environment{
    position: absolute;
    top: 62px;
    right: 27px;
  }
  .project-overview .refund{
    width: 1003px;
    height: 45px;
    text-align: center;
    padding-top: 30px;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 45px;
    display: flex;
  }
  .refund span{
    line-height: 45px;
    height: 45px;
  }
  .refund .symbol, .value{
    color: #08D4BA;
  }
  .refund .value{
    font-size: 45px;
    font-weight: bold;
    color: #08D4BA;
  }
  .project-overview .chart-container-bg{
    margin: 18px 0 0 28px !important;
    background: rgba(18, 87, 187, 0.4);
  }

  .project-overview .building1{
    background: rgba(194, 62, 110, 0.57);
    position: absolute;
    top: 233px;
    left: 482px;
  }
  .project-overview .building2{
    background: rgba(11, 133, 117, 0.73);
    position: absolute;
    left: 78px;
    top: 315px;
  }

</style>
