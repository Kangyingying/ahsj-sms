<template>
  <div class="annual-inspection-expiration statistics">
    <TitleBar :title="'年检到期预警'" :showMore="true"></TitleBar>
    <CustomSwitch style="margin-top: 3px; margin-left: 22px" :datalist="['15天', '7天', '3天', '1天']"></CustomSwitch>
    <div class="chart-container">
      <table border="0" class="table" style="margin-top: 5px">
        <tr style="background: rgba(27, 93, 186, 0.16); border: none">
          <th>项目名称</th>
          <th>设备名称</th>
          <th>到期时间</th>
        </tr>
        <tr>
          <td>科大地空中心项目</td>
          <td>施工机械、塔吊</td>
          <td>2021-09-20</td>
        </tr>
        <tr>
          <td>安中医和平苑二期项目</td>
          <td>施工机械、双笼人货梯</td>
          <td>2021-09-30</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {AnnualInspectionExpirationViewModel} from "@/components/Statistics/Table/AnnualInspectionExpiration/AnnualInspectionExpirationViewModel";
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
import CustomSwitch from '@/components/CustomSwitch/CustomSwitch.vue';
@Options({
  components: {
    TitleBar,
    CustomSwitch
  }
})
export default class AnnualInspectionExpiration extends mixins(AnnualInspectionExpirationViewModel){
}
</script>

<style scoped>
  .annual-inspection-expiration{
    width: 412px;
    height: 215px;
  }
</style>
