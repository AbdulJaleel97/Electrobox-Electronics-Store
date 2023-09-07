<template>
  <div class="navbar-middle">
    <div class="container d-flex">
      <NavbarLogo />
      <NavbarSearch />
      <NavbarLinks />
    </div>
  </div>
</template>
<script>
import $ from "jquery";

import NavbarLinks from "./NavbarLinks.vue";
import NavbarSearch from "./NavbarSearch.vue";
import NavbarLogo from "./NavbarLogo.vue";
export default {
  components: {
    NavbarLogo,
    NavbarSearch,
    NavbarLinks,
  },
};
$(() => {
  var navHeight = $(".navbar-middle").outerHeight();

  $(window).scroll(function () {
    var scrolled = $(document).scrollTop();
    if (scrolled > navHeight) {
      $(".navbar-middle").addClass("fixed");
    } else {
      $(".navbar-middle").removeClass("fixed");
    }
  });
});
</script>
<style lang="scss" scoped>
.navbar-middle {
  background-color: var(--bg-color);
  border-bottom: 1px solid #344456;
  position: relative;
  > .container {
    padding: 22px 12px;
    align-items: center;
    @media (max-width: 1199px) {
      justify-content: space-between;
    }
    @media (max-width: 767px) {
      max-width: 100%;
      padding: 20px 20px 20px 10px;
    }
  }
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background: var(--bg-color);
    animation: 0.9s ease 0s normal both 1 running fixedAnim;
    border-bottom: 1px solid var(--yellow);
  }
  @keyframes fixedAnim {
    0% {
      top: -100%;
    }
    100% {
      top: 0;
    }
  }
}
</style>
