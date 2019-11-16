<template>
  <div class="animation-field-wrapper">
    <canvas ref="animation-canvas"></canvas>
    <slot></slot>
  </div>
</template>

<script>
export default {
  title: "AnimationField",
  data() {
      return {
          provider: {
              context: null
          }
      }
  },
  provide() {
      return {
          provider: this.provider
      }
  },
  mounted() {
      this.provider.context = this.$refs['animation-canvas'].getContext('2d');
      this.$refs['animation-canvas'].width = this.$refs['animation-canvas'].parentElement.clientWidth;
      this.$refs['animation-canvas'].height = this.$refs['animation-canvas'].parentElement.clientHeight;
  }
};


</script>