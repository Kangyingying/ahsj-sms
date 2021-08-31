<template>
  <div class="project-overview statistics">

  </div>
</template>

<script>
import {mixins} from 'vue-class-component';
import {ProjectOverviewViewModel} from './ProjectOverviewViewModel';

export default class ProjectOverview extends mixins(ProjectOverviewViewModel){
}
</script>

<style scoped>
  .project-overview{
    width: 1003px;
    height: 698px;
  }
</style>
