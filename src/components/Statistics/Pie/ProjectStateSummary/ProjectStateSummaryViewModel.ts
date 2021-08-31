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
            color: ['#08D4BA', '#3158FF', '#E18B54',  '#F05C92'],
            legend: {
                orient: 'vertical',
                right: 'right',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                },
                icon: 'circle',
                itemWidth: 5
            },
            series: [
                {
                    name: '项目状态统计',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 120, name: '在建项目数'},
                        {value: 100, name: '等待竣工验收项目数'},
                        {value: 80, name: '竣工项目数'},
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
