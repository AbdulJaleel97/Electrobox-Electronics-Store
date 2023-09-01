<template>
  <div class="product-options">
    <div class="fav">
      <i
        @click="isActive = !isActive"
        class="fa-regular fa-heart"
        v-if="isActive"
      ></i>
      <i @click="isActive = !isActive" class="fa-solid fa-heart" v-else></i>
    </div>
    <div class="compare">
      <i class="fa-solid fa-arrows-rotate"></i>
    </div>
    <div class="view">
      <i class="fa-regular fa-eye"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.product-options {
  position: absolute;
  right: 0;
  top: 5%;
  opacity: 0;
  transition: 0.3s;
  > div {
    margin-bottom: 12px;
    font-size: 17px;
    color: #2230409e;
    i {
      cursor: pointer;
    }
  }
}
</style>
