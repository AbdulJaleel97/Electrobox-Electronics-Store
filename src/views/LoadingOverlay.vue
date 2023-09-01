<template>
  <div class="loading-overlay">
    <span class="gif"></span>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.loading-overlay {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999999;
  background-color: white;
  transition: 1s;
  .gif {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 8%;
    bottom: 0;
    height: auto;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
    background-image: url("@/assets/loading-overlay.png");
    @media (max-width: 767px) {
      & {
        background-size: 30%;
      }
    }
  }
}
</style>
