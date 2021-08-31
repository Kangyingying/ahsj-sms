<template>
  <div class="top-material statistics">
    <div class="title">
      <i class="icon"></i>
      <span class="text">采集定标交易TOP5物料</span>
    </div>
    <!--  图表容器  -->
    <div class="chart-container">
        <table border="0" class="table">
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
import {mixins} from "vue-class-component";
import {TopMaterialViewModel} from "@/components/Statistics/Table/TopMaterial/TopMaterialViewModel";

export default class TopMaterial extends mixins(TopMaterialViewModel){
}
</script>

<style scoped>
.top-material{
  width: 412px;
  height: 185px;
}
</style>
