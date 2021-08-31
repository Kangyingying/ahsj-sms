<template>
  <div class="realtime-environment">
    <p>扬尘实时值  <span class="value">30</span></p>
    <p>扬尘实时值  <span class="value">30</span></p>
  </div>
</template>

<script>
import {mixins} from "vue-class-component";
import {RealtimeEnvironmentViewModel} from "@/components/Statistics/Other/RealtimeEnvironment/RealtimeEnvironmentViewModel";

export default class RealtimeEnvironment extends mixins(RealtimeEnvironmentViewModel){
}
</script>

<style scoped>
.realtime-environment{
  display: inline-block;
}
.realtime-environment p{
  font-size: 16px;
  font-weight: 500;
  color: #CFE1FB;
  line-height: 24px;
}

.realtime-environment .value{
  margin-left: 19px;
  font-size: 25px;
  font-weight: bold;
}

</style>
