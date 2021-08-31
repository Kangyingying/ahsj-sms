/**
 * 整改通知汇总
 */
import {Vue} from 'vue-class-component';
import * as echarts from 'echarts/core';
import {BarChart, BarSeriesOption} from 'echarts/charts';
import {GridComponent, GridComponentOption, LegendComponent, TitleComponentOption} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<BarSeriesOption | TitleComponentOption | GridComponentOption>;
// 注册必须的组件
echarts.use([GridComponent, LegendComponent, BarChart, CanvasRenderer]);

export class RectificationNoticesSummaryViewModel extends Vue {
  mounted() {
    this.initChart();
  }

  initChart() {
    const chartDom = document.querySelector('.rectification-notices-summary .chart-container') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: ECOption;

    option = {
      legend: {
        data: ['总量', '已回复'],
        textStyle: {
          color: '#ffffff',
          fontSize: 10
        },
        x: 'right',
      },
      grid: {
        width: 240,
        height: 110,
        bottom: 30,
        left: 30,
      },
      xAxis: [
        {
          type: 'category',
          data: ['项目一', '项目一', '项目一', '项目一', '项目一'],
          axisLine: {
            lineStyle: {
              color: 'rgba(154, 182, 195, 1)',
            },
          },
          axisLabel: {
            color: 'rgba(207, 225, 251, 1)',
            fontSize: 10,
            interval: 0,
            rotate: 40
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          max: 30,
          interval: 10,
          axisLine: {
            show: false
          },
          axisLabel: {
            color: 'rgba(207, 225, 251, 1)',
            fontSize: 13
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '总量',
          type: 'bar',
          barWidth: 20,
          stack: '搜索引擎',
          emphasis: {
            focus: 'series'
          },

          color: '#E18B54',
          data: [20, 5, 10, 6, 15]
        },
        {
          name: '已回复',
          type: 'bar',
          stack: '搜索引擎',
          emphasis: {
            focus: 'series'
          },
          color: '#08D4BA',
          data: [5, 5, 5, 5, 5]
        },
      ]
    };

    if (option) {
      myChart.setOption(option);
    }

  }
}
