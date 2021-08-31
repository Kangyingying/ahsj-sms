<template>
  <div class="navigation">
    <div class="content">
      <!-- 标题-->
      <h3 class="title">安徽四建智慧工地监管管理平台</h3>
      <!-- 顶部导航  -->
      <ul class="tabs">
        <li class="tab-item">
          <div class="background"></div>
          <span>集团概况</span>
        </li>
        <li class="tab-item">
          <span>项目汇总</span>
        </li>
        <li class="tab-item">
          <span>视频监控</span>
        </li>
        <li class="tab-item">
          <span>集采平台</span>
        </li>
        <li class="tab-item">
          <span>安全整改</span>
        </li>
        <li class="tab-item">
          <span>设备管理</span>
        </li>
        <li class="tab-item">
          <span>劳务用工</span>
        </li>
      </ul>
      <!-- 天气 -->
      <div class="right-div">
        <!--  时间    -->
        <div class="time">
          <p class="realtime">11:42:23</p>
          <p class="date">2021-08-26  星期四</p>
        </div>

        <div class="separate-line"></div>
        <!--  天气    -->
        <div class="weather">
          <div class="weather-icon"></div>
          <div class="weather-info">
            <p class="temperature">27℃/30℃</p>
            <p class="desc">晴天转小雨</p>
          </div>
        </div>

        <div class="separate-line"></div>

        <div class="other-info">
          <p>
            <span>体感温度:<span class="value">23℃</span></span>
            <span style="margin: 0 30px">风速:<span class="value">东南风3-4级</span></span>
            <span>能见度:<span class="value">24.9公里</span></span>
          </p>

          <p style="text-align: center">
            <span>湿度:<span class="value">71%</span></span>
            <span style="margin: 0 30px">气压:<span class="value">994百帕</span></span>
            <span>重点:<span class="value">24°</span></span>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {NavigationViewModel} from "@/components/Navigation/NavigationViewModel";
import {mixins} from "vue-class-component";

export default class Navigation extends mixins(NavigationViewModel){
}
</script>

<style scoped>
  .navigation{
    padding: 0 20px;
    background: #1c3669;
    color: #ffffff;
    min-width: 1875px;
  }
  .navigation .content{
    width: 100%;
    height: 65px;
    display: flex;
    position: relative;
  }
  .navigation .title{
    font-size: 28px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 65px;
    margin: 0;
    padding: 0;
  }
  /*tabs*/
  .navigation .tabs{
    list-style: none;
    display: flex;
    line-height: 18px;
    margin: 15px 0 0 109px;
    position: relative;
  }
  .tabs .tab-item{
    padding: 0 10px;
  }
  .tab-item span{
    font-size: 18px;
    font-family: SourceHanSansCN;
    font-weight: 500;
    color: #FFFFFF;
    position: relative;
    z-index: 2;

  }
  .tab-item .background{
    width: 65px;
    height: 24px;
    position: absolute;
    bottom: 15px;
    margin-left: 7px;
    border: 1px solid #00F6FF;
    z-index: 1;
  }
  /*天气*/
  .navigation .right-div{
    display: flex;
    position: absolute;
    right: 0;
    top: 13px;
  }
  .right-div .separate-line{
    margin: 4px 12px 0 12px;
    background: #04E4FF;
    width: 1px;
    height: 24px;
  }
  .time .realtime{
    font-size: 20px;
    font-weight: normal;
    line-height: 14px;
    color: #04E4FF;
  }
  .time .date{
    font-size: 10px;
    font-family: SourceHanSansCN;
    font-weight: 500;
    color: #FFFFFF;
    margin-top: 8px;
  }

  .right-div .weather{
    display: flex;
  }
  .weather .weather-icon{
    width: 23px;
    height: 21px;
    border: 1px solid #04E4FF;
    margin-top: 3px;
  }
  .weather .weather-info{
    margin-left: 7px;
  }
  .weather-info .temperature{
    font-size: 18px;
    font-weight: normal;
    color: #04E4FF;
  }
  .weather-info .desc{
    font-size: 10px;
    font-weight: 500;
    color: #FFFFFF;
  }
  .right-div .other-info{
    font-size: 10px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 24px;
  }
  .other-info .value{
    color: #04E4FF;
  }

</style>
