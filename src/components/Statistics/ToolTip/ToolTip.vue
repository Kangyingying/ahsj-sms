<template>
  <div class="tooltip" v-if="buildingInfo">
    <div class="content">
      <p>项目名称：{{buildingInfo.name}}</p>
      <p>项目状态：{{buildingInfo.state}}</p>
      <p>经纬度：{{buildingInfo.coordinate}}</p>
      <p>位置：{{buildingInfo.location}}</p>
    </div>
  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {ToolTipViewModel} from "@/components/Statistics/ToolTip/ToolTipViewModel";
import {BuildingInfo} from "@/entity/BuildingInfo";
@Options({
  props: {
    buildingInfo: BuildingInfo
  }
})
export default class ToolTip extends mixins(ToolTipViewModel){
}
</script>

<style scoped>
  .tooltip{
    padding: 18px 14px 26px 16px;
    border-radius: 2px;
  }

  .tooltip .content{
    font-size: 13px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
  }
</style>
