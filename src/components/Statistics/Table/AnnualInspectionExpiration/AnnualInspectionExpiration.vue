<template>
  <div class="annual-inspection-expiration statistics">
    <TitleBar :title="'年检到期预警'"></TitleBar>
    <div class="chart-container">
      <table border="0" class="table" style="margin-top: 20px">
        <tr style="background: rgba(27, 93, 186, 0.16); border: none">
          <th>项目名称</th>
          <th>设备名称</th>
          <th>详情</th>
          <th>到期时间</th>
        </tr>
        <tr>
          <td>项目一</td>
          <td>挖掘机</td>
          <td>500</td>
          <td>2021-08-26</td>
        </tr>
        <tr>
          <td>项目一</td>
          <td>挖掘机</td>
          <td>500</td>
          <td>2021-08-26</td>
        </tr>
        <tr>
          <td>项目一</td>
          <td>挖掘机</td>
          <td>500</td>
          <td>2021-08-26</td>
        </tr>
        <tr>
          <td>项目一</td>
          <td>挖掘机</td>
          <td>500</td>
          <td>2021-08-26</td>
        </tr>
        <tr>
          <td>项目一</td>
          <td>挖掘机</td>
          <td>500</td>
          <td>2021-08-26</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {AnnualInspectionExpirationViewModel} from "@/components/Statistics/Table/AnnualInspectionExpiration/AnnualInspectionExpirationViewModel";
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
@Options({
  components: {
    TitleBar
  }
})
export default class AnnualInspectionExpiration extends mixins(AnnualInspectionExpirationViewModel){
}
</script>

<style scoped>
  .annual-inspection-expiration{
    width: 412px;
    height: 208px;
  }
</style>
