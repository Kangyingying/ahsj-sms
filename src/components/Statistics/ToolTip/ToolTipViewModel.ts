import {Vue} from 'vue-class-component';
import {BuildingInfo} from '@/entity/BuildingInfo';

export class ToolTipViewModel extends Vue {
    buildingInfo: BuildingInfo = new BuildingInfo();
    mounted() {
        console.debug(this.buildingInfo);
    }
}
