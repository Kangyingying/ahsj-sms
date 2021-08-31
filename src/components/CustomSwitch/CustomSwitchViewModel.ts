import {Vue} from 'vue-class-component';

export class CustomSwitchViewModel extends Vue {
    datalist: Array<any> = [];
    selectedIndex = 0;

    mounted() {
        console.debug(this.datalist);
    }

    changeSwitch(item: any, index: any) {
        this.selectedIndex = index;
    }
}
