<template>
  <NavbarView />
  <div class="main container d-flex">
    <SidebarView />
    <router-view @beforeRouteUpdate="startLoading" />
  </div>
  <FooterView />

  <!-- Loading On Route Change -->
  <LoadingOverlay v-if="isLoading" />
  <!-- Scroll To Top Button -->
  <ScrollToTop />
</template>

<script>
import SidebarView from "@/views/SidebarView.vue";
import NavbarView from "@/views/NavbarView.vue";
import FooterView from "@/views/FooterView.vue";
import ScrollToTop from "@/views/ScrollToTop.vue";
import LoadingOverlay from "@/views/LoadingOverlay.vue";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    NavbarView,
    FooterView,
    ScrollToTop,
    LoadingOverlay,
    SidebarView,
  },
  methods: {
    startLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.startLoading();
      next();
    });
  },
};
</script>

<style lang="scss">
#app {
  position: relative;
  background-color: #f5f5f5;
  .router-link-exact-active {
    color: var(--yellow);
  }
}
.main {
  @media (max-width: 767px) {
    &.container {
      max-width: 100%;
    }
  }
  @media (max-width: 1199px) {
    & {
      flex-direction: column-reverse;
      padding: 0 12px;
    }
  }
}
// Global Styles
/*Start Global Rules*/
* {
  box-sizing: border-box;
}

:root {
  --bg-color: #223040;
  --yellow: #fdda06;
}

body {
  font-family: "Jost", sans-serif;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  position: relative;
}

html {
  scroll-behavior: smooth;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: white;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-end {
  display: flex;
  justify-content: end;
  align-items: center;
}
/* Remove Input Number Arrows*/
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
textarea {
  resize: none;
  height: 140px !important;
}
// Remove Icon 'X' From Search input
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
</style>
