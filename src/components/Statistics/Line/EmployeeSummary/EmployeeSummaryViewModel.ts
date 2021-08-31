/**
 * 职工汇总图表vm
 */
import {BaseChartViewModel} from '@/components/Statistics/BaseChartViewModel';

export class EmployeeSummaryViewModel extends BaseChartViewModel {


  initChart() {
    this.chartContainer = document.querySelector('.employee-summary .chart-container') as HTMLElement;
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
          color: '#F05C92'
        },
        lineStyle: {
          color: '#F05C92'
        },
        label: {
          show: true,
          position: 'top',
          color: '#F05C92'
        },

      }]
    };

    if (option) {
      this.myChart.setOption(option);
    }
  }
}
