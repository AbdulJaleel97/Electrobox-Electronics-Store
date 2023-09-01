<template>
  <div class="home">
    <MainBanner />
    <ProductsSwiper :products="popularProducts" text="Popular Products" />
    <CategoryShop />
    <ProductsSwiper :products="latestProducts" text="Latest Products" />
    <SecondExtraBanner />
    <ProductsSwiper :products="featuredProducts" text="Featured Products" />
    <BlogHome />
  </div>
</template>

<script>
// Home Content
import MainBanner from "@/components/Home/MainBanner.vue";
import ProductsSwiper from "@/components/Home/ProductsSwiper.vue";
import CategoryShop from "@/components/Home/CategoryShop.vue";
import SecondExtraBanner from "@/components/Home/SecondExtraBanner.vue";
import BlogHome from "@/components/Home/BlogHome.vue";

import { mapState, mapMutations } from "vuex";
export default {
  components: {
    MainBanner,
    ProductsSwiper,
    CategoryShop,
    SecondExtraBanner,
    BlogHome,
  },
  computed: {
    ...mapState(["popularProducts", "latestProducts", "featuredProducts"]),
  },
  methods: {
    ...mapMutations(["getPopularProducts"]),
  },
  mounted() {
    this.$store.commit("getPopularProducts");
  },
};
</script>

<style lang="scss" scoped>
.home {
  flex: 1;
  width: 80%;
  padding: 30px 15px;
  @media (max-width: 1199px) {
    width: 100%;
    padding: 30px 0;
  }
}
</style>
