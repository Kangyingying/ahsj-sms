/**
 * 项目类型统计图表 vm
 */
import {Vue} from 'vue-class-component';
import * as echarts from 'echarts/core';
import {
    BarChart,
    // 系列类型的定义后缀都为 SeriesOption
    BarSeriesOption
} from 'echarts/charts';
import {
    // 组件类型的定义后缀都为 ComponentOption
    TitleComponentOption,
    GridComponent,
    GridComponentOption, LegendComponent
} from 'echarts/components';
import {
    CanvasRenderer
} from 'echarts/renderers';
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
    BarSeriesOption | TitleComponentOption | GridComponentOption
    >;
// 注册必须的组件
echarts.use(
    [GridComponent, LegendComponent, BarChart, CanvasRenderer]
);

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
            series: [{
                data: [30, 10, 5, 30, 5, 30, 5],
                type: 'bar',
                color: 'rgba(8, 212, 186, 1)',
                barWidth: 20,
            }]
        };
        if (option) {
            myChart.setOption(option);
        }
    }
}
