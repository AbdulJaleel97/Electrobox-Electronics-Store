<template>
  <div class="category-shop">
    <div class="offer-banner">
      <img src="@/assets/offer-banner-1.png" alt="Offer Banner" />
      <div class="banner-text">
        <p>Exclusively High Quality Products</p>
        <h2>Nikon Normal 55mm F/1.2 manual Focus Lens</h2>
      </div>
    </div>
    <div class="slide-heading">
      <h4>Shop By Category</h4>
      <div class="nav-buttons">
        <button class="category-prev">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="category-next">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <Swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="window.width > 767 ? 3 : 1"
      :space-between="15"
      :navigation="{ nextEl: '.category-next', prevEl: '.category-prev' }"
    >
      <SwiperSlide v-for="(category, i) in myCategory" :key="i">
        <div class="card-container">
          <div class="card">
            <h5>
              {{ category.title }}
            </h5>
            <div class="card-body">
              <ul>
                <li v-for="(feature, i) in category.features" :key="i">
                  <a> {{ feature }}</a>
                </li>
              </ul>
            </div>
            <div class="img-holder">
              <div>
                <img
                  :src="category.img"
                  class="card-img-top"
                  alt="category Image"
                />
              </div>
            </div>
          </div>
        </div>
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
      window: {
        width: 0,
        height: 0,
      },
      myCategory: [
        {
          title: "Wireless Headphones",
          img: require("@/assets/Category/category-1.png"),
          features: [
            "Desktops",
            "Laptops / Notebooks",
            "Gaming Laptops",
            "Shopping Tools",
            "Accessories",
          ],
        },
        {
          title: "Computers & Laptops",
          img: require("@/assets/Category/category-2.png"),
          features: [
            "Video Game",
            "Wireless Printer",
            "Jonor Magicbook",
            "Headset",
            "SmartWatches",
          ],
        },
        {
          title: "Camera & Videos",
          img: require("@/assets/Category/category-3.png"),
          features: [
            "Full HD",
            "Polaroid Camera",
            "Gadgets",
            "Accessories",
            "High Quality",
          ],
        },
        {
          title: "Smartwatches & Eyewear",
          img: require("@/assets/Category/category-4.png"),
          features: [
            "Smart Watches",
            "Wireless Screen",
            "Night Led",
            "Eyewear",
            "Speaker",
          ],
        },
      ],
    };
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
};
</script>

<style lang="scss" scoped>
.category-shop {
  margin-top: 80px;
  margin-bottom: 60px;
  color: var(--bg-color);
  > h2 {
    font-size: 22px;
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
    padding: 23px 0 0 23px;
    background: white;
    overflow: hidden;
    &:hover {
      img {
        transform: scale(1.03);
      }
    }
    img {
      transition: 0.3s;
      z-index: -1;
    }
    h5 {
      z-index: 1;
    }
    .card-body {
      padding: 0;
      ul {
        position: absolute;
        top: 20%;
        z-index: 1;
        li {
          a {
            color: var(--bg-color);
            &:hover {
              color: var(--yellow);
            }
          }
          padding-top: 5px;
          padding-bottom: 5px;
          cursor: pointer;
        }
      }
    }
  }
  .offer-banner {
    position: relative;
    overflow: hidden;
    font-family: "Jost", sans-serif;
    border-radius: 6px;
    max-height: 210px;
    margin-bottom: 80px;
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
    img {
      max-width: 100%;
      transition: 0.5s;
      max-height: 210px;
    }
    .banner-text {
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
      width: 40%;
      p {
        margin-bottom: 5px;
        background-color: var(--yellow);
        padding: 5px;
        width: fit-content;
      }
      h2 {
        color: white;
        margin-bottom: 0;
      }
      @media (max-width: 991px) {
        & {
          p {
            font-size: 14px;
          }
          h2 {
            font-size: 19px;
          }
        }
      }
      @media (max-width: 767px) {
        & {
          width: 100%;
          p {
            font-size: 13px;
          }
          h2 {
            font-size: 18px;
          }
        }
      }
      @media (max-width: 546px) {
        & {
          width: 100%;
          left: 0;
          padding-left: 12px;
          p {
            color: var(--yellow);
            font-size: 12px;
            background-color: transparent;
            text-decoration: underline;
            margin: 0;
            padding-left: 0;
          }
          h2 {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
