<template>
  <div class="device-source-summary statistics">
    <div class="title">
      <i class="icon"></i>
      <span class="text">设备来源汇总</span>
    </div>
    <p class="summary" style="top: 40px;">总计 <span>100</span> </p>

    <div class="chart-container"></div>
  </div>
</template>

<script>
import {mixins} from "vue-class-component";
import {DeviceSourceSummaryViewModel} from "./DeviceSourceSummaryViewModel";

export default class DeviceSourceSummary extends mixins(DeviceSourceSummaryViewModel) {
}
</script>

<style scoped>
  .device-source-summary{
    width: 412px;
    height: 183px;
  }
</style>
