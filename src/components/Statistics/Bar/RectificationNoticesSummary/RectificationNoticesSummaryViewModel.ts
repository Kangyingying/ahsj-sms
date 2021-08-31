/**
 * 整改通知汇总
 */
import {BaseChartViewModel} from '@/components/Statistics/BaseChartViewModel';

export class RectificationNoticesSummaryViewModel extends BaseChartViewModel {

  initChart() {
    this.chartContainer = document.querySelector('.rectification-notices-summary .chart-container') as HTMLElement;
    this.myChart = this.echarts.init(this.chartContainer);
  }

  setOption() {
    super.setOption();

    const option = {
      legend: {
        data: ['总量', '已回复'],
        textStyle: {
          color: '#ffffff',
          fontSize: 10
        },
        x: 'right',
        itemWidth: 17,
        itemHeight: 6
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
          label: {
            show: true,
            position: 'inside',
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
          data: [5, 5, 5, 5, 5],
          label: {
            show: true,
            position: 'inside',
          },
        },
      ]
    };

    if (option) {
      this.myChart.setOption(option);
    }

  }
}
