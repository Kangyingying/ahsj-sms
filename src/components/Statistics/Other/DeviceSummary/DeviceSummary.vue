<template>
  <div class="device-summary statistics">
    <div class="title">
      <i class="icon"></i>
      <span class="text">设备数量统计</span>
    </div>

    <div class="chart-container"></div>

  </div>
</template>

<script>
import {mixins} from "vue-class-component";
import {DeviceSummaryViewModel} from "@/components/Statistics/Other/DeviceSummary/DeviceSummaryViewModel";

export default class DeviceSummary extends mixins(DeviceSummaryViewModel){
}
</script>

<style scoped>
  .device-summary{
    width: 412px;
    height: 170px;
  }
</style>
