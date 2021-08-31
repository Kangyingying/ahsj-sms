<template>
  <div class="device-source-summary statistics">
    <TitleBar :title="'设备来源汇总'"></TitleBar>
    <p class="summary" style="top: 40px;">总计 <span>100</span> </p>

    <div class="chart-container"></div>
  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {DeviceSourceSummaryViewModel} from "./DeviceSourceSummaryViewModel";
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
@Options({
  components: {
    TitleBar
  }
})
export default class DeviceSourceSummary extends mixins(DeviceSourceSummaryViewModel) {
}
</script>

<style scoped>
  .device-source-summary{
    width: 412px;
    height: 183px;
  }
</style>
