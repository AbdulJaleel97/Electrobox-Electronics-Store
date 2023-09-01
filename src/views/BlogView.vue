<template>
  <div class="blog">
    <div class="row">
      <div class="col-md-6" v-for="(blog, i) in ourBlog" :key="i">
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["ourBlog"]),
  },
};
</script>

<style lang="scss" scoped>
.blog {
  a {
    color: var(--bg-color);
  }
  padding: 30px 15px;
  width: 80%;
  @media (max-width: 1199px) {
    & {
      width: 100%;
      padding: 30px 0;
    }
  }
  .card {
    border: none;
    margin-bottom: 24px;
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

  @media (max-width: 767px) {
    & .container {
      max-width: 100%;
    }
  }
  @media (max-width: 1199px) {
    & {
      .container {
        flex-direction: column-reverse;
        padding: 0 12px;
      }
    }
  }
}
</style>
