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
import { DEFAULT_BUILDING_PLAN, DEFAULT_RENDER_VALS, DEFAULT_SETUP_DTO } from '../../config/cfg'
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
      renderVals: DEFAULT_RENDER_VALS,
      setupDto: DEFAULT_SETUP_DTO,

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
      for (let elevator of this.buildingPlan.elevators) {
        this.setupDto.elevators.push({
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
      this.algorithmService = new AlgorithmService(this.building)
      console.log(this.setupDto);
      this.algorithm = new ObeyFirst(this.setupDto, this.algorithmService)
      let ret = MenuController.create(this.buildingPlan, this.renderVals, this.algorithmService, this.algorithm);
      this.building = ret.building;
      this.buildingView = ret.buildingView;
      this.timingObject = ret.timingObject;
      EventBus.$emit('building-created', this.buildingView);
    },
    startButton() {
      this.timingObject = MenuController.start(this.timingObject);
    },
    pauseButton() {
      if (!this.timingObject) { return null; }
      let pause = this.buttons.find((it) => { return it.key == "pauseButton" });
      let success = MenuController.pause(this.timingObject, pause.val.paused);
      pause.val.paused = success ? !pause.val.paused : pause.val.paused;
    },
    stopButton() {
      if (!this.timingObject) { return null; }
      MenuController.stop(this.timingObject);
      this.buttons.find( (it) => { return it.key == "pauseButton" }).val.paused = false;
    }
  }
};
</script>