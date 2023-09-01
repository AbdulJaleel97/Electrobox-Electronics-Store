<template>
  <div class="nav-bar">
    <NavbarTop />
    <NavbarMiddle />
    <NavbarBottom />
  </div>
</template>

<script>
import NavbarTop from "@/components/Navbar/NavbarTop/NavbarTop.vue";
import NavbarMiddle from "@/components/Navbar/NavbarMiddle/NavbarMiddle.vue";
import NavbarBottom from "@/components/Navbar/NavbarBottom/NavbarBottom.vue";
export default {
  components: {
    NavbarTop,
    NavbarMiddle,
    NavbarBottom,
  },
};
</script>

<style lang="scss" scoped></style>
