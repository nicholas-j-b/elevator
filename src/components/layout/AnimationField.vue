<template>
  <div class="animation-field-wrapper">
    <b-card no-body class="animation-card">
      <canvas ref="animation-canvas"></canvas>
      <slot></slot>
    </b-card>
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
    };
  },
  provide() {
    return {
      provider: this.provider
    };
  },
  mounted() {
    this.provider.context = this.$refs["animation-canvas"].getContext("2d");
    this.$refs["animation-canvas"].width = this.$refs[
      "animation-canvas"
    ].parentElement.clientWidth;
    this.$refs["animation-canvas"].height = this.$refs[
      "animation-canvas"
    ].parentElement.clientHeight;
  }
};
</script>

<style scoped>
.animation-field-wrapper {
  height: 800px;
}

.animation-card {
  height: 100%;
}
</style>