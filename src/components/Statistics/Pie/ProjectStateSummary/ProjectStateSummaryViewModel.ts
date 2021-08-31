/**
 * 项目状态汇总图表 vm
 */
import {BaseChartViewModel} from '@/components/Statistics/BaseChartViewModel';

export class ProjectStateSummaryViewModel extends BaseChartViewModel {

    initChart() {
        this.chartContainer = document.querySelector('.project-state-summary .chart-container') as HTMLElement;
        this.myChart = this.echarts.init(this.chartContainer);
    }

    setOption() {
        const option = {
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
            this.myChart.setOption(option);
        }
    }
}
