/**
 * 项目统计图表 vm
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

export class ProjectStatisticsViewModel extends Vue {

    mounted() {

        this.initChart();
    }

    /**
     * 初始化图表
     */
    initChart() {
        const chartDom = document.querySelector('.project-statistics .chart-container') as HTMLElement;
        const myChart = echarts.init(chartDom);
        let option: ECOption;

        option = {
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
            myChart.setOption(option);
        }

    }
}
