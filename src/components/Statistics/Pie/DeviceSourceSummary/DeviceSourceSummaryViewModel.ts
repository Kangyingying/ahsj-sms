/**
 * 设备来源汇总图表vm
 */
import {BaseChartViewModel} from '@/components/Statistics/BaseChartViewModel';

export class DeviceSourceSummaryViewModel extends BaseChartViewModel {

  initChart() {
    this.chartContainer = document.querySelector('.device-source-summary .chart-container') as HTMLElement;
    this.myChart = this.echarts.init(this.chartContainer);
  }

  setOption() {
    const option = {
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
        icon: 'circle',
        itemWidth: 5
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
      this.myChart.setOption(option);
    }
  }
}
