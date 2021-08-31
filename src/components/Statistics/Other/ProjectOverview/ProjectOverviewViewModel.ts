/**
 * 项目概览页面vm
 */
import {Vue} from 'vue-class-component';
import {BuildingInfo} from '@/entity/BuildingInfo';

export class ProjectOverviewViewModel extends Vue {
    public buildingInfo1!: BuildingInfo;
    public buildingInfo2!: BuildingInfo;

    created() {
        this.initBuilding1();
        this.initBuilding2();
    }

    initBuilding1() {
        this.buildingInfo1 = new BuildingInfo();
        this.buildingInfo1.name = '庐阳区2021年第一批老旧小区改造项目';
        this.buildingInfo1.state = '在建';
        this.buildingInfo1.location = '合肥市庐阳区';
    }

    initBuilding2() {
        this.buildingInfo2 = new BuildingInfo();
        this.buildingInfo2.name = '庐阳区2021年第一批老旧小区改造项目';
        this.buildingInfo2.state = '在建';
        this.buildingInfo2.location = '合肥市庐阳区';
    }
}
