<template>
  <div class="menu-wrapper">
    <Button
      v-for="button in buttons"
      :key="button.key"
      :buttonText="button.val.text"
      :click="button.val.fun"
    ></Button>
  </div>
</template>

<script>
import MenuController from '../../../../../../controller/src/main/js/menu_controller'
//import Building from '../../../../../../model/src/main/js/animation/building'
import Button from "../control/buttons/Button"
import { EventBus } from '../../../../../../main'

export default {
  name: "Menu",
  components: {
    Button
  },
  data() {
    return {
      timingObject: Object,

      buttons: [
        {
          key: "createButton",
          val: {
            text: "create",
            fun: this.createButton
          }
        },
        {
          key: "startButton",
          val: {
            text: "Start!",
            fun: this.startButton
          }
        },
        {
          key: "stopButton",
          val: {
            text: "Stop!",
            fun: this.stopButton
          }
        },
        {
          key: "pauseButton",
          val: {
            paused: false,
            fun: this.pauseButton,
            get text() {
              return this.paused ? "Continue" : "Pause";
            }
          }
        }
      ]
    };
  },
  methods: {
    createButton() {
      let buildingPlan = {
        numFloors: 4,
        numElevators: 2,
        elevators: [
          {
            maxSpace: 10,
            speed: 1
          },
          {
            maxSpace: 10,
            speed: 2
          }
        ]
      };

      let renderVals = {
        scale: 1,
        elevator: {
          height: 30,
          width: 10,
          spacing: 20,
          startHeight: 100,
          colour: ['#F00', '#0F0', '#00F']
        }
      };
      let ret = MenuController.create(buildingPlan, renderVals);
      this.building = ret.building;
      this.buildingView = ret.buildingView;
      EventBus.$emit('building-created', this.buildingView);
    },
    startButton() {
      this.timingObject = MenuController.start(this.buildingView);
    },
    pauseButton() {
      if (!this.timingObject) { return null; }
      let pause = this.buttons.find( (it) => { return it.key == "pauseButton" });
      let success = MenuController.pause(this.timingObject, this.buildingView, pause.val.paused);
      pause.val.paused = success ? !pause.val.paused : pause.val.paused;
    },
    stopButton() {
      if (!this.timingObject) { return null; }
      MenuController.stop(this.timingObject, this.buildingView);
      this.buttons.find( (it) => { return it.key == "pauseButton" }).val.paused = false;
    }
  }
};
</script>