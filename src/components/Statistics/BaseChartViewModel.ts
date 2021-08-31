import {Vue} from 'vue-class-component';
import * as echarts from 'echarts/core';
import {GridComponent, LegendComponent} from 'echarts/components';
import {BarChart, LineChart, PieChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';

export class BaseChartViewModel extends Vue {
    public echarts = echarts;
    public chartContainer!: HTMLElement;
    public myChart: any;

    created() {
        // 动态设置echarts引用组件
        echarts.use([GridComponent, LegendComponent, CanvasRenderer, PieChart, LineChart, BarChart]);
    }

    mounted() {
        this.initChart();
        this.setOption();
    }

    /**
     * 初始化图表
     */
    initChart() {

    }

    /**
     * 设置图表option
     */
    setOption() {
    }
}
