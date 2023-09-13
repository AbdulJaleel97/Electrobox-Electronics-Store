<template>
  <div class="logo">
    <router-link to="/"
      ><img src="@/assets/logo.webp" alt="Merchandise!"
    /></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  text-align: left;
  @media (max-width: 767px) {
    & {
      max-width: 170px;
      min-width: 100px;
      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 420px) {
    & {
      max-width: 150px;
      min-width: 100px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
