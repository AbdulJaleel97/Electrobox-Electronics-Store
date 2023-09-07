<template>
  <div class="ad">
    <img src="@/assets/left-ad.png" alt="AD" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ad {
  border-radius: 6px;
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1199px) {
    display: flex;
    justify-content: center;
  }
  img {
    max-width: 100%;
    transition: 0.3s;
  }
}
</style>
