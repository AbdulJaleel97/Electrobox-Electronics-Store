<template>
  <button
    class="scroll-top"
    :class="{ show: showGoTopButton, hide: !showGoTopButton }"
    @click="scrollToTop"
  >
    <i class="fa-solid fa-chevron-up"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showGoTopButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 700) {
        this.showGoTopButton = true;
      } else {
        this.showGoTopButton = false;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.scroll-top {
  position: fixed;
  bottom: 50px;
  right: 70px;
  z-index: 98;
  border: 2px solid white;
  background-color: var(--bg-color);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: 0.7s;
  @media (max-width: 767px) {
    & {
      right: 30px;
    }
  }
  &.show {
    opacity: 1;
  }
  &.hide {
    opacity: 0;
  }
}
</style>
