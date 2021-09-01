<template>
  <div class="rectification-expiration statistics">
    <TitleBar :title="'安全整改到期预警'" :showMore="true"></TitleBar>
    <p class="summary" style="top: 30px">总计 <span>7</span> </p>
    <CustomSwitch class="switch-position" :datalist="['全部', '3天', '1天']"></CustomSwitch>
    <div class="chart-container">
      <table border="0" class="table" style="margin-top: 40px">
        <tr style="background: rgba(27, 93, 186, 0.16); border: none">
          <th>项目名称</th>
          <th>类别</th>
          <th>所属部门</th>
          <th>原因</th>
          <th>到期时间</th>
        </tr>
        <tr>
          <td>科大地空中心项目</td>
          <td>住建类</td>
          <td>蜀山区住建局</td>
          <td>现场渣土未覆盖</td>
          <td>2021-9-1</td>
        </tr>
        <tr>
          <td>安中医和平苑二期项目</td>
          <td>环保类</td>
          <td>蜀山区环保局</td>
          <td>现场噪音超标</td>
          <td>2021-9-3</td>
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
