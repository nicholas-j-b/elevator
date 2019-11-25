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
import Button from "../control/buttons/Button"
import { EventBus } from '../../../../../../main'
import { DEFAULT_BUILDING_PLAN, DEFAULT_RENDER_VALS } from '../../config/cfg'
import AlgorithmService from '../../../../../../algorithms/src/main/js/algorithm_service'
import ObeyFirst from '../../../../../../algorithms/src/main/js/obey_first'

export default {
  name: "Menu",
  components: {
    Button
  },
  data() {
    return {
      timingObject: Object,
      buildingPlan: DEFAULT_BUILDING_PLAN,
      renderVals: Object,
      setupDto: Object,

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
    loadDefaults() {
      this.buildingPlan = DEFAULT_BUILDING_PLAN;
      console.log(this);
      for (let i = 0; i < this.buildingPlan.numElevators; i++) {
        this.buildingPlan.elevators.push(DEFAULT_BUILDING_PLAN.DEFAULT_ELEVATOR)
      }
      this.renderVals = DEFAULT_RENDER_VALS;
    },
    createSetupDto() {
      this.setupDto.elevators = [];
      for (let elevator of this.buildingPlan.elevators) {
        this.setupDto['elevators'].push({
          currentFloor: elevator.currentFloor,
          maxFloor: elevator.maxFloor,
          minFloor: elevator.minFloor,
          capacity: elevator.capacity,
        })
      }
    },

    createButton() {
      this.loadDefaults()
      this.createSetupDto()
      let ret = MenuController.create(this.buildingPlan, this.renderVals);
      this.building = ret.building;
      this.buildingView = ret.buildingView;
      EventBus.$emit('building-created', this.buildingView);
      this.algorithmService = new AlgorithmService(this.building)
      this.algorithm = new ObeyFirst(this.setupDto, this.algorithmService)
    },
    startButton() {
      this.timingObject = MenuController.start(this.buildingView);
    },
    pauseButton() {
      if (!this.timingObject) { return null; }
      let pause = this.buttons.find((it) => { return it.key == "pauseButton" });
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