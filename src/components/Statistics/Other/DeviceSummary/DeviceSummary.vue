<template>
  <div class="device-summary statistics">
    <TitleBar :title="'设备数量统计'"></TitleBar>

    <div class="chart-container">
      <ul class="device-count-list">
        <li class="item">
          <div class="icon"></div>
          <div class="meta">
            <p class="count">46</p>
            <p class="name">挖掘机</p>
          </div>
        </li>
        <li class="item">
          <div class="icon"></div>
          <div class="meta">
            <p class="count">38</p>
            <p class="name">推土机</p>
          </div>
        </li>
        <li class="item">
          <div class="icon"></div>
          <div class="meta">
            <p class="count">15</p>
            <p class="name">简单式启动机</p>
          </div>
        </li>
        <li class="item">
          <div class="icon"></div>
          <div class="meta">
            <p class="count">138</p>
            <p class="name">塔吊</p>
          </div>
        </li>
        <li class="item">
          <div class="icon"></div>
          <div class="meta">
            <p class="count">98</p>
            <p class="name">双笼人货梯</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {DeviceSummaryViewModel} from "@/components/Statistics/Other/DeviceSummary/DeviceSummaryViewModel";
import TitleBar from '@/components/Statistics/TitleBar/TitleBar.vue';
@Options({
  components: {
    TitleBar
  }
})
export default class DeviceSummary extends mixins(DeviceSummaryViewModel){
}
</script>

<style scoped>
  .device-summary{
    width: 412px;
    height: 170px;
  }
  .device-summary .device-count-list{
    padding: 17px 4px 17px 4px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-gap: 18px;
  }
  .device-count-list .item{
    height: 40px;
    display: flex;
  }
  .item .icon{
    width: 40px;
    height: 40px;
    border: 1px solid #08D4BA;
  }
  .item .meta{
    margin-left: 14px;
  }
  .meta .count{
    font-size: 25px;
    font-weight: bold;
    color: #FFD304;
    line-height: 24px;
  }
  .meta .name{
    max-width: 65px;
    font-size: 13px;
    font-weight: 500;
    color: #CFE1FB;
    line-height: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;/*要显示的行数*/
    -webkit-box-orient: vertical;
  }
</style>
