<template>
  <div class="footer">
    <FooterTop />
    <FooterMiddle />
    <FooterBottom />
  </div>
</template>

<script>
import FooterTop from "@/components/Footer/FooterTop.vue";
import FooterMiddle from "@/components/Footer/FooterMiddle.vue";
import FooterBottom from "@/components/Footer/FooterBottom.vue";
export default {
  components: {
    FooterTop,
    FooterMiddle,
    FooterBottom,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--bg-color);
  width: 100%;
  padding-top: 30px;
  color: white;
  margin-top: 30px;
  a {
    color: white;
  }
}
</style>
