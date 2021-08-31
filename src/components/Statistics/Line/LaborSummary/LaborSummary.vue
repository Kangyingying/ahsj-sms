<template>
  <div class="labor-summary statistics">
    <TitleBar :title="'劳务用工汇总'"></TitleBar>
    <p class="summary" style="top: 30px">总计 <span>100</span> </p>

    <div class="chart-container"></div>
  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {LaborSummaryViewModel} from "@/components/Statistics/Line/LaborSummary/LaborSummaryViewModel";
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
@Options({
  components: {
    TitleBar
  }
})
export default class LaborSummary extends mixins(LaborSummaryViewModel){
}
</script>

<style scoped>
  .labor-summary{
    width: 412px;
    height: 156px;
  }
</style>
