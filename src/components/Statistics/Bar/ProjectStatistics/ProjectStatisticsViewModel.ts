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
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                }
            ],
            series: [
                {
                    name: '中标项目',
                    type: 'bar',
                    data: [25, 25, 25, 25, 25, 25, 25],
                    color: 'rgba(49, 88, 255, 1)',
                    barWidth: 10,
                },
                {
                    name: '施工项目',
                    type: 'bar',
                    data: [30, 30, 30, 30, 30, 30, 30],
                    color: 'rgba(8, 212, 186, 1)',
                    barWidth: 10,

                }
            ]
        };

        if (option) {
            myChart.setOption(option);
        }

    }
}
