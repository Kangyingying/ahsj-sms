/**
 * 统计模块标题栏 vm
 */
import {Vue} from 'vue-class-component';

export class TitleBarViewModel extends Vue {
    title!: string;
    showMore = false;
    showSwitch = false;
    switchData: Array<any> = [];

    mounted() {
    }
}
