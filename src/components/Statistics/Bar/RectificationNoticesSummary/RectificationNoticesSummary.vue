<template>
  <div class="rectification-notices-summary statistics">
    <TitleBar :title="'安全整改'"></TitleBar>
    <p class="summary" >总计 <span>46</span> </p>
    <div class="chart-container"></div>

  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {RectificationNoticesSummaryViewModel} from './RectificationNoticesSummaryViewModel';
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
@Options({
  components: {
    TitleBar
  }
})
export default class RectificationNoticesSummary extends mixins(RectificationNoticesSummaryViewModel){
}
</script>

<style scoped>
  .rectification-notices-summary{
    width: 287px;
    height: 100%;
  }
</style>
