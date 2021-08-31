<template>
  <div class="output-summary statistics">
    <TitleBar :title="'产值统计'"></TitleBar>
    <div class="chart-container">
      <div class="header">
        <span>完成额度</span>
        <span style="margin-left: 27px">占比</span>
      </div>

      <div class="output">
        <div class="icon"></div>
        <span>总产值(10亿)</span>
        <span class="color" style="margin-left: 29px"><span class="amount">8</span>亿</span>
        <span class="color" style="margin-left: 32px"><span class="amount">80</span>%</span>
      </div>

      <div class="output" style="">
        <div class="icon"></div>
        <span>合同金额(10亿)</span>
        <span class="color" style="margin-left: 16px"><span class="amount">8</span>亿</span>
        <span class="color" style="margin-left: 32px"><span class="amount">80</span>%</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {OutputSummaryViewModel} from "@/components/Statistics/Other/OutputSummary/OutputSummaryViewModel";

import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
@Options({
  components: {
    TitleBar
  }
})
export default class OutputSummary extends mixins(OutputSummaryViewModel){
}
</script>

<style scoped>
.output-summary{
  width: 240px;
  height: 140px;
}
  .output-summary .chart-container{
    position: relative;
  }
  .chart-container .header{
    margin-top: 12px;
    margin-right: 27px;
    font-size: 13px;
    font-weight: 500;
    color: #08D4BA;
    line-height: 24px;
    text-align: right;

  }
  .chart-container .output{
    display: flex;
    margin-left: 5px;
    font-size: 13px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    margin-top: 5px;
  }

  .output .icon{
    width: 19px;
    height: 19px;
    border: 1px solid #08D4BA;
  }
  .output .amount{
    font-size: 25px;
    font-weight: bold;
    line-height: 24px;
  }
  .output .color{
    color: #FFD304;
  }

</style>
