/**
 * 项目统计图表 vm
 */
import {BaseChartViewModel} from '@/components/Statistics/BaseChartViewModel';

export class ProjectStatisticsViewModel extends BaseChartViewModel {

    /**
     * 初始化图表
     */
    initChart() {
        this.chartContainer = document.querySelector('.project-statistics .chart-container') as HTMLElement;
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
            legend: {
                data: ['中标项目', '施工项目'],
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                },
                x: 'right',
                itemWidth: 17,
                itemHeight: 6
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['2021'],
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
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min: 0,
                    max: 400,
                    interval: 200,
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
                }
            ],
            series: [
                {
                    name: '中标项目',
                    type: 'bar',
                    data: [300],
                    color: 'rgba(49, 88, 255, 1)',
                    barWidth: 10,
                    label: {
                        show: true,
                        position: 'top',
                        color: 'rgba(49, 88, 255, 1)'
                    },
                },
                {
                    name: '施工项目',
                    type: 'bar',
                    data: [260],
                    color: 'rgba(8, 212, 186, 1)',
                    barWidth: 10,
                    label: {
                        show: true,
                        position: 'top',
                        color: 'rgba(8, 212, 186, 1)'
                    },

                }
            ]
        };

        if (option) {
            this.myChart.setOption(option);
        }
    }

}
