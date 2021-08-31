/**
 * 项目类型统计图表 vm
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

export class ProjectTypeStatisticsViewModel extends Vue {

    mounted() {
        this.initChart();
    }

    initChart() {
        const chartDom = document.querySelector('.project-type-statistics .chart-container') as HTMLElement;
        const myChart = echarts.init(chartDom);
        let option: ECOption;

        option = {
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
            myChart.setOption(option);
        }
    }
}
