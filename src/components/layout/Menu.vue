<template>
  <div class="menu-wrapper">
    <Button class="start-button" 
        :buttonText="startButtonText" 
        :click="startButton"></Button>
    <Button class="stop-button" 
        :buttonText="stopButtonText" 
        :click="stopButton"></Button>
  </div>
</template>

<script>
import Building from "../../model/animation/building.js";
import Button from "../control/buttons/Button.vue";
import MenuController from "../../controller/menu_controller.js";

export default {
  name: "Menu",
  components: {
    Button
  },
  props: {
    building: Building
  },
  data() {
    return {
      startButtonText: "Start!",
      stopButtonText: "Stop!",

      menuController: new MenuController()
    };
  },
  methods: {
    startButton() {
      this.menuController.start(this.building);
    },
    stopButton() {
        this.menuController.stop(this.building);
    }
  }
};
</script>