/**
 * 设备来源汇总图表vm
 */
import {Vue} from 'vue-class-component';
import * as echarts from 'echarts/core';
import {GridComponent, GridComponentOption, LegendComponent, TitleComponentOption} from 'echarts/components';
import {PieChart, PieSeriesOption} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
type ECOption = echarts.ComposeOption<TitleComponentOption | GridComponentOption | PieSeriesOption>;
echarts.use([GridComponent, LegendComponent, CanvasRenderer, PieChart]);

export class DeviceSourceSummaryViewModel extends Vue {
  mounted() {
    this.initChart();
  }

  initChart() {
    const chartDom = document.querySelector('.device-source-summary .chart-container') as HTMLElement;
    const myChart = echarts.init(chartDom);
    let option: ECOption;

    option = {
      grid: {
        bottom: 30,
        left: 30,
      },
      legend: {
        orient: 'vertical',
        right: 'right',
        textStyle: {
          color: '#ffffff',
          fontSize: 10
        },
      },
      color: ['#3158FF', '#E18B54'],
      series: [
        {
          name: '设备来源统计',
          type: 'pie',
          radius: '50%',
          data: [
            {value: 40, name: '租赁'},
            {value: 60, name: '采购'},
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            color: '#CFE1FB'
          },
        }
      ]
    };

    if (option) {
      myChart.setOption(option);
    }
  }
}
