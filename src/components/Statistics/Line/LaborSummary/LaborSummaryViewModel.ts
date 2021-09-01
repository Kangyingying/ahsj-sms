/**
 * 劳务用工汇总图表vm
 */
import {BaseChartViewModel} from '@/components/Statistics/BaseChartViewModel';

export class LaborSummaryViewModel extends BaseChartViewModel {

  initChart() {
    this.chartContainer = document.querySelector('.labor-summary .chart-container') as HTMLElement;
    this.myChart = this.echarts.init(this.chartContainer);
  }

  setOption() {
    super.setOption();
    const option = {
      grid: {
        width: 375,
        height: 50,
        bottom: 25,
        left: 30,
      },
      xAxis: {
        type: 'category',
        data: ['土方工', '架子工', '钢筋工', '木工', '混凝土工', '打桩工', '水电工'],
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
        max: 500,
        interval: 100,
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
        data: [500, 200, 250, 300, 50, 100, 500],
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
      this.myChart.setOption(option);
    }
  }

}
