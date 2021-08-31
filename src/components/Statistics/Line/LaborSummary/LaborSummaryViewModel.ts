/**
 * 劳务用工汇总图表vm
 */
import {Vue} from 'vue-class-component';
import * as echarts from 'echarts/core';
import {LineChart, LineSeriesOption} from 'echarts/charts';
import {GridComponent, GridComponentOption, LegendComponent, TitleComponentOption} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<LineSeriesOption | TitleComponentOption | GridComponentOption>;
// 注册必须的组件
echarts.use([GridComponent, LegendComponent, LineChart, CanvasRenderer]);

export class LaborSummaryViewModel extends Vue {
  mounted() {
    this.initChart();
  }

  initChart() {
    const chartDom = document.querySelector('.labor-summary .chart-container') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: ECOption;

    option = {
      grid: {
        width: 375,
        height: 50,
        bottom: 25,
        left: 30,
      },
      xAxis: {
        type: 'category',
        data: ['项目一', '项目一', '项目一', '项目一', '项目一', '项目一', '项目一'],
        axisLine: {
          lineStyle: {
            color: 'rgba(154, 182, 195, 1)',
          },
        },
        axisLabel: {
          color: 'rgba(207, 225, 251, 1)',
          fontSize: 13
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 30,
        interval: 10,
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(154, 182, 195, 1)',
          },
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

      },
      series: [{
        data: [10, 3, 30, 10, 15, 20, 15],
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#E18B54'
        },
        lineStyle: {
          color: '#E18B54'
        },
        label: {
          show: true,
          position: 'top',
          color: '#E18B54'
        },

      }]
    };

    if (option) {
      myChart.setOption(option);
    }
  }
}
