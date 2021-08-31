<template>
  <div class="rectification-expiration statistics">
    <TitleBar :title="'安全整改到期预警'" :showMore="true"></TitleBar>
    <p class="summary" style="top: 30px">总计 <span>100</span> </p>
    <CustomSwitch class="switch-position" :datalist="['全部', '3天', '1天']"></CustomSwitch>
    <div class="chart-container">
      <table border="0" class="table" style="margin-top: 40px">
        <tr style="background: rgba(27, 93, 186, 0.16); border: none">
          <th>排名</th>
          <th>物料名称</th>
          <th>定标金额</th>
          <th>占比</th>
        </tr>
        <tr>
          <td>1</td>
          <td>钢筋</td>
          <td>500</td>
          <td>10%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>钢筋</td>
          <td>500</td>
          <td>10%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>钢筋</td>
          <td>500</td>
          <td>10%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>钢筋</td>
          <td>500</td>
          <td>10%</td>
        </tr>
        <tr>
          <td>5</td>
          <td>钢筋</td>
          <td>500</td>
          <td>10%</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {RectificationExpirationViewModel} from "@/components/Statistics/Table/RectificationExpiration/RectificationExpirationViewModel";
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
import CustomSwitch from '@/components/CustomSwitch/CustomSwitch.vue';
@Options({
  components: {
    TitleBar,
    CustomSwitch
  }
})
export default class RectificationExpiration extends mixins(RectificationExpirationViewModel){
}
</script>

<style scoped>
  .rectification-expiration{
    width: 412px;
    height: 100%;
  }
  .statistics .switch-position{
    position: absolute;
    top: 40px;
    right: 10px;
  }
</style>
