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
//import Building from "../../../model/animation/building.js";
import Button from "../control/buttons/Button.vue";
import MenuController from "../../../controller/menu_controller.js";
import { EventBus } from '../../../main'

export default {
  name: "Menu",
  components: {
    Button
  },
  data() {
    return {
      menuController: new MenuController(),

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
      let ret = this.menuController.create(buildingPlan, renderVals);
      this.building = ret.building;
      this.buildingView = ret.buildingView;
      EventBus.$emit('building-created', this.buildingView);
    },
    startButton() {
      this.menuController.start(this.building);
    },
    pauseButton() {
      this.otherProperty = 99;
      let pause = this.buttons.find( (it) => { return it.key == "pauseButton" });
      let success = this.menuController.pause(this.building, pause.val.paused);
      pause.val.paused = success ? !pause.val.paused : pause.val.paused;
    },
    stopButton() {
      this.menuController.stop(this.building);
      this.buttons.find( (it) => { return it.key == "pauseButton" }).val.paused = false;
    }
  }
};
</script>