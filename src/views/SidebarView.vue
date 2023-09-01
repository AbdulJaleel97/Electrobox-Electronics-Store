<template>
  <div class="sidebar">
    <CategoryView />
    <div
      class="blog-menu"
      v-if="
        this.$route.name == 'blog' || this.$route.name == 'blog-page'
          ? true
          : false
      "
    >
      <h5>BlogMenu</h5>
      <ul>
        <li v-for="blog in ourBlog" :key="blog.name">
          <router-link
            :to="{
              name: 'blog-page',
              params: { id: blog.id, description: blog.description },
            }"
          >
            {{ blog.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <ExpView v-if="this.$route.name == 'home' ? true : false" />
    <FeaturesView v-if="this.$route.name == 'home' ? true : false" />
    <LeftAd />
    <ClientsView v-if="this.$route.name == 'home' ? true : false" />
  </div>
</template>

<script>
import CategoryView from "@/components/Sidebar/CategoryView.vue";
import ExpView from "@/components/Sidebar/ExpView.vue";
import FeaturesView from "@/components/Sidebar/FeaturesView.vue";
import LeftAd from "@/components/Sidebar/LeftAd.vue";
import ClientsView from "@/components/Sidebar/ClientsView.vue";

import { mapState } from "vuex";
export default {
  components: {
    CategoryView,
    ExpView,
    FeaturesView,
    LeftAd,
    ClientsView,
  },
  computed: {
    ...mapState(["ourBlog", "BlogMenu"]),
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  float: left;
  width: 20%;
  @media (max-width: 1199px) {
    & {
      width: 100%;
    }
  }
  .blog-menu {
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 10px 20px;
    background-color: white;
    h5 {
      border-bottom: 1px solid rgb(230, 230, 230);
      font-weight: 500;
      padding-bottom: 5px;
    }
    ul {
      li {
        padding: 7px;
        a {
          color: var(--bg-color);
        }
      }
    }
  }
}
</style>
