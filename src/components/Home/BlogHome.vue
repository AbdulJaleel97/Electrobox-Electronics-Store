<template>
  <div class="our-blog">
    <div class="slide-heading">
      <h4 ref="mine">Our Blog</h4>
      <div class="nav-buttons">
        <button class="blog-prev">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="blog-next">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <Swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="window.width > 992 ? 3 : 1"
      :space-between="15"
      :navigation="{ nextEl: '.blog-next', prevEl: '.blog-prev' }"
    >
      <SwiperSlide v-for="(blog, i) in ourBlog" :key="i">
        <router-link
          :to="{
            name: 'blog-page',
            params: { id: blog.id, description: blog.description },
          }"
        >
          <div class="card">
            <div class="img-holder">
              <img :src="blog.img" class="card-img-top" alt="blog Image" />
            </div>
            <div class="card-body">
              <span class="blog-date">{{ blog.date }}</span>
              <h5>{{ blog.title }}</h5>
              <p class="card-text">
                {{ blog.description }}
              </p>
            </div>
          </div>
        </router-link>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default {
  data() {
    return {
      modules: [Navigation],
      ourBlog: this.$store.state.ourBlog,
      window: {
        width: 0,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
};
</script>

<style lang="scss" scoped>
.our-blog {
  margin-top: 80px;
  margin-bottom: 60px;
  color: var(--bg-color);
  > h2 {
    font-size: 22px;
  }
  .swiper {
    a {
      color: var(--bg-color);
    }
  }
  .slide-heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .nav-buttons {
      button {
        font-size: 20px;
        border: none;
        color: #4e4e4e;
        background-color: transparent;
        &:hover {
          color: var(--yellow);
        }
      }
    }
  }
  .card {
    border: none;
    &:hover {
      .img-holder {
        img {
          transform: scale(1.05);
        }
      }
    }
    .img-holder {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 6px;
      img {
        transition: 0.5s;
      }
    }
    .card-body {
      position: relative;
      .blog-date {
        position: absolute;
        top: -13px;
        background-color: yellow;
        padding: 4px 11px;
        border-radius: 6px;
        font-weight: 500;
      }
      h5 {
        margin-top: 0.5rem;
      }
      .card-text {
        margin: 5px 0;
        font-size: 15px;
      }
    }
  }
}
</style>
