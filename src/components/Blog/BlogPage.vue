<template>
  <div class="security" v-for="blog in myBlog" :key="blog.name">
    <h5>
      {{ blog.header }}
    </h5>
    <span class="date"
      ><i class="fa-regular fa-clock"></i> {{ blog.date }}</span
    >
    <div class="blog-img">
      <img :src="blog.img" alt="BLOG" />
    </div>
    <p>
      Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit
      ipsum. Enim ipsum hendrerit turpis laoreet fames tempus ligula pede ac. Et
      Lorem penatibus orci eu ultrices egestas Nam quam Vivamus nibh. Odio ut
      pretium ligula quam Vestibulum consequat convallis fringilla Vestibulum
      nulla. Accumsan morbi tristique auctor. At risus pretium urna tortor metus
      fringilla interdum mauris tempor congue. Commodo laoreet semper tincidunt
      lorem Vestibulum nunc at In Curabitur magna. Euismod euismod Suspendisse
      tortor ante adipiscing risus Aenean Lorem vitae id. Odio ut pretium ligula
      quam Vestibulum consequat convallis fringilla Vestibulum nulla. Accumsan
      morbi tristique auctor Aenean nulla lacinia Nullam elit vel vel. At risus
      pretium urna tortor metus fringilla interdum mauris tempor congue. Donec
      tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue eget
      dapibus congue tincidunt senectus nibh risus Phasellus tristique justo.
      Justo Pellentesque Donec lobortis faucibus Vestibulum Praesent mauris
      volutpat vitae metus. Ipsum cursus vestibulum at interdum Vivamus nunc
      fringilla Curabitur ac quis. Nam lacinia wisi tortor orci quis vitae. Sed
      mauris Pellentesque elit Aliquam at lacus interdum nascetur elit ipsum.
      Enim ipsum hendrerit Suspendisse turpis laoreet fames tempus ligula pede
      ac. Et Lorem penatibus orci eu ultrices egestas Nam quam Vivamus nibh.
      Morbi condimentum molestie Nam enim odio sodales pretium eros sem
      pellentesque. Sit tellus Integer elit egestas lacus turpis id auctor
      nascetur ut. Ac elit vitae. Mi vitae magnis Fusce laoreet nibh felis
      porttitor laoreet Vestibulum faucibus. At Nulla id tincidunt ut sed semper
      vel Lorem condimentum ornare. Laoreet Vestibulum lacinia massa a commodo
      habitasse velit Vestibulum tincidunt In. Turpis at eleifend ps mi elit
      Aenean porta ac sed faucibus. Nunc urna Morbi fringilla vitae orci
      convallis condimentum auctor sit dui. Urna pretium elit mauris cursus
      Curabitur at elit Vestibulum.
    </p>
    <router-link to="/blog">
      <i class="fa-solid fa-arrow-left-long"></i> Back to Blog
    </router-link>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
export default {
  data() {
    return {
      myBlog: [],
    };
  },
  computed: {
    ...mapState(["ourBlog", "BlogMenu"]),
  },
  mounted() {
    this.myBlog = this.ourBlog.filter((e) => {
      return e.id == this.$route.params.id;
    });
  },
  watch: {
    $route: {
      handler() {
        this.myBlog = this.ourBlog.filter((e) => {
          return e.id == this.$route.params.id;
        });
      },
    },
  },
};
$(() => {
  $(".security .dropdown button").on("click", () => {
    $(".security button i").toggleClass("arrow-up");
  });
});
</script>

<style lang="scss" scoped>
.security {
  padding: 30px 15px;
  color: var(--bg-color);
  font-family: "Roboto", sans-serif;
  flex: 1;
  @media (max-width: 1199px) {
    padding: 30px 0;
  }

  h5 {
    font-weight: normal;
  }
  .date {
    color: var(--yellow);
  }
  .blog-img {
    margin-top: 40px;
    margin-bottom: 40px;
    img {
      border-radius: 6px;
      max-width: 100%;
    }
  }
  p {
    font-size: 15px;
  }
  a {
    color: var(--bg-color);
    font-weight: 600;
  }
}
</style>
