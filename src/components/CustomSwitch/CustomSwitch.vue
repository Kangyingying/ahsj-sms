<template>
  <ul class="custom-switch">
    <li class="button" :class="{active: index == selectedIndex}"
        v-for="(title, index) in datalist" v-on:click="changeSwitch(title, index)">{{title}}</li>
  </ul>
</template>

<script>
import {mixins, Options} from "vue-class-component";
import {CustomSwitchViewModel} from "@/components/CustomSwitch/CustomSwitchViewModel";

@Options({
  props: {
    datalist: Array
  }
})
export default class CustomSwitch extends mixins(CustomSwitchViewModel){
}
</script>

<style scoped>
  .custom-switch{
    display: flex;
    list-style: none;
    margin: auto 0;
  }
  .custom-switch .button{
    width: 40px;
    height: 20px;
    font-size: 13px;
    border-radius: 2px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 20px;
    text-align: center;
    border: 1px solid #00000000;
  }

  .custom-switch .active{
    background: #173E75;
    border: 1px solid #04E4FF;
  }


</style>
