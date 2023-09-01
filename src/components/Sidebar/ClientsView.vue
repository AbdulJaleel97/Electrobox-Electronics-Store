<template>
  <div class="our-clients">
    <h4>Our Clinets Say</h4>
    <Swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="15"
      :navigation="{ nextEl: '.clients-next', prevEl: '.client-prev' }"
    >
      <SwiperSlide v-for="(client, i) in ourClients" :key="i">
        <div class="card">
          <div class="img-holder">
            <img
              :src="client.img"
              class="card-img-top second"
              alt="Product Image"
            />
          </div>
          <div class="card-body">
            <p>"{{ client.description }}"</p>
            <h4>{{ client.name }}</h4>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="slide-heading">
      <div class="nav-buttons">
        <button class="client-prev">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="clients-next">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
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
      ourClients: [
        {
          img: require("@/assets/OurClients/clients-1.jpg"),
          description:
            "Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.",
          name: "MADARA",
        },
        {
          img: require("@/assets/OurClients/clients-2.png"),
          description:
            "These humans are complete idiots. Now, I want you to think as hard as those puny brains of yours can manage. Have you ever spared a cow or a pig… because it begged you for its life?",
          name: "MERUEM",
        },
        {
          img: require("@/assets/OurClients/clients-3.png"),
          description:
            "I won't back down! I'll walk all over them one by one, and make my way up.",
          name: "GAROU",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.our-clients {
  margin-top: 20px;
  background-color: white;
  text-align: center;
  padding: 15px 10px;
  border-radius: 6px;
  > h4 {
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;
  }
  .slide-heading {
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
    .img-holder {
      margin-top: 10px;
      img {
        width: 74px;
        border-radius: 50%;
      }
    }
    .card-body {
      color: var(--bg-color);
      padding: 16px 16px 0;

      p {
        margin: 5px 0 15px;
        font-size: 15px;
      }
      h4 {
        margin: 15px 0;
      }
    }
  }
}
</style>
