/**
 * 项目状态汇总图表 vm
 */
import {Vue} from 'vue-class-component';
import * as echarts from 'echarts/core';
import {GridComponent, GridComponentOption, LegendComponent, TitleComponentOption} from 'echarts/components';
import {PieChart, PieSeriesOption} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
type ECOption = echarts.ComposeOption<TitleComponentOption | GridComponentOption | PieSeriesOption>;
echarts.use([GridComponent, LegendComponent, CanvasRenderer, PieChart]);
export class ProjectStateSummaryViewModel extends Vue {
    mounted() {
        this.initChart();
    }

    initChart() {
        const chartDom = document.querySelector('.project-state-summary .chart-container') as HTMLElement;
        const myChart = echarts.init(chartDom);
        let option: ECOption;
        option = {
            grid: {
                bottom: 30,
                left: 30,
            },
            color: ['#E18B54', '#08D4BA', '#3158FF', '#F05C92'],
            legend: {
                orient: 'vertical',
                right: 'right',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                },
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 274, name: '联盟广告'},
                        {value: 235, name: '视频广告'},
                        // {value: 400, name: '搜索引擎'}
                    ].sort(function (a, b) {
                        return a.value - b.value;
                    }),
                    roseType: 'radius',
                    label: {
                        color: '#CFE1FB'
                    },
                    labelLine: {
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                }
            ]
        };
        if (option) {
            myChart.setOption(option);
        }

    }
}
