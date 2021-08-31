/**
 * 项目类型统计图表 vm
 */
import {BaseChartViewModel} from '@/components/Statistics/BaseChartViewModel';

export class ProjectTypeStatisticsViewModel extends BaseChartViewModel {

    initChart() {
        this.chartContainer = document.querySelector('.project-type-statistics .chart-container') as HTMLElement;
        this.myChart = this.echarts.init(this.chartContainer);
    }

    setOption() {
        super.setOption();
        const option = {
            grid: {
                width: 375,
                height: 110,
                bottom: 30,
                left: 30,
            },
            xAxis: {
                type: 'category',
                data: ['EPC总承包', 'D-B总承包', 'P-C总承包', 'E-P总承包'],
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
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 300,
                interval: 50,
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
                data: [218, 25, 45, 12],
                type: 'bar',
                color: 'rgba(8, 212, 186, 1)',
                barWidth: 22,
                label: {
                    show: true,
                    position: 'top',
                    color: 'rgba(8, 212, 186, 1)'
                },
            }]
        };
        if (option) {
            this.myChart.setOption(option);
        }
    }
}
