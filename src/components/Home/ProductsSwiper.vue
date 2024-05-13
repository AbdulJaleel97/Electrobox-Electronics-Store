<template>
  <div class="products-swiper">
    <div class="slide-heading">
      <h4>{{ text }}</h4>
      <div class="nav-buttons">
        <button class="products-prev">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="products-next">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <Swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="window.width > 991 ? 4 : 2"
      :space-between="15"
      :navigation="{ nextEl: '.products-next', prevEl: '.products-prev' }"
    >
      <SwiperSlide v-for="product in products" :key="product.id">
        <div class="card">
          <div class="img-holder flex-center">
            <div class="imgs" style="cursor: pointer">
              <img
                :src="product.firstImg"
                class="card-img-top first"
                alt="Product Image"
              />
              <img
                :src="product.secondImg"
                class="card-img-top second"
                alt="Product Image"
              />
            </div>
          </div>
          <div class="card-body">
            <span v-if="product.stars === 5" style="color: var(--yellow)">
              <i v-for="e in 5" :key="e" class="fa-solid fa-star"></i>
            </span>
            <span v-else style="color: var(--yellow)">
              <i v-for="e in 4" :key="e" class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star" style="color: grey"></i>
            </span>
            <p class="card-text">
              {{ product.title }}
            </p>
            <div class="price">
              <span style="font-weight: bold">
                {{
                  `$${Math.floor(
                    product.price - (product.price * product.discount) / 100
                  )}.00 `
                }}</span
              >
              <span class="price-num"> {{ `$${product.price}.00` }}</span>
            </div>
            <div class="buy">
              <button
                @click="addItemToCart(product)"
                type="button"
                class="add-product"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <span class="discount">{{ `-${product.discount}%` }}</span>
          <div class="product-options">
            <div class="fav" @click="toggleFavourite(product)">
              <i v-if="!product.wishlist" class="fa-regular fa-heart"></i>
              <i v-if="product.wishlist" class="fa-solid fa-heart second"></i>
            </div>
            <div class="compare" @click="toggleCompare(product)">
              <i v-if="!product.compare" class="fa-solid fa-arrows-rotate"></i>
              <i v-if="product.compare" class="fa-solid fa-check"></i>
            </div>
            <div class="view">
              <i
                @click="
                  this.$router.push({
                    name: 'product',
                    params: {
                      id: product.id,
                      description: product.description,
                    },
                  })
                "
                class="fa-regular fa-eye"
              >
              </i>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="modal-info">
              <h2>
                Product Added Successfully to the Cart
                <i class="fa-regular fa-circle-check"></i>
              </h2>
            </div>
            <div class="modal-buttons">
              <router-link class="view-cart" to="/my-cart">
                <button data-bs-dismiss="modal" aria-label="Close">
                  VIEW MY CART ({{ this.$store.state.cartTotal }})
                </button>
              </router-link>
              <router-link class="checkout" to="/profile-page">
                <button data-bs-dismiss="modal" aria-label="Close">
                  CHECKOUT
                </button>
              </router-link>
            </div>
            <div class="continue">
              <button data-bs-dismiss="modal" aria-label="Close">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      modules: [Navigation],
      window: {
        width: 0,
      },
    };
  },
  props: {
    products: {
      type: Array,
    },
    text: {
      type: String,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState([
      "fav",
      "compare",
      "cart",
      "allProducts",
      "wishlistAndCompare",
    ]),
  },
  methods: {
    ...mapMutations(["getProductStatus"]),
    handleResize() {
      this.window.width = window.innerWidth;
    },
    // Add Product To Cart
    setCartToLS() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    addItemToCart(product) {
      let exists = false;
      let index = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          exists = true;
          index = i;
        }
      }
      if (exists) {
        this.cart[index].count++;
      } else {
        this.cart.push(product);
        this.setCartToLS();
        this.$store.commit("totalCart");
      }
    },
    checkCartLS() {
      localStorage.getItem("cart")
        ? (this.cart = JSON.parse(localStorage.getItem("cart")))
        : (this.cart = []);
    },
    // Add to Favourit
    addToFav(product) {
      if (!this.fav.includes(product)) {
        this.fav.push(product);
        this.setFavToLS();
        this.$store.commit("totalFav");
      }
    },
    deleteFav(product) {
      this.fav.splice(this.fav.indexOf(product), 1);
      this.setFavToLS();
      this.$store.commit("totalFav");
    },
    toggleFavourite(product) {
      if (product.wishlist) {
        this.deleteFav(product);
      } else {
        this.addToFav(product);
      }
      product.wishlist = !product.wishlist;
      localStorage.setItem(
        `${product.name}Wishlist_${product.id}`,
        product.wishlist
      );
    },
    setFavToLS() {
      localStorage.setItem("fav", JSON.stringify(this.fav));
    },
    checkFavToLS() {
      localStorage.getItem("fav")
        ? (this.fav = JSON.parse(localStorage.getItem("fav")))
        : (this.fav = []);
    },
    // Add To Compare
    toggleCompare(product) {
      if (product.compare) {
        this.compare.splice(this.compare.indexOf(product), 1);
      } else {
        this.compare.push(product);
      }
      this.setCompareToLS();
      this.$store.commit("totalCompare");
      product.compare = !product.compare;
      localStorage.setItem(
        `${product.name}Compare_${product.id}`,
        product.compare
      );
    },
    setCompareToLS() {
      localStorage.setItem("compare", JSON.stringify(this.compare));
    },
    checkCompareToLS() {
      localStorage.getItem("compare")
        ? (this.compare = JSON.parse(localStorage.getItem("compare")))
        : (this.compare = []);
    },
    productIcons() {
      this.allProducts.forEach((product) => {
        const wishlist = localStorage.getItem(
          `${product.name}Wishlist_${product.id}`
        );
        const compare = localStorage.getItem(
          `${product.name}Compare_${product.id}`
        );

        if (wishlist !== null) {
          product.wishlist = wishlist === "true";
        }

        if (compare !== null) {
          product.compare = compare === "true";
        }
      });
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    // Check and Set Cart
    this.checkCartLS();
    this.setCartToLS();
    // Check and Set Favourite
    this.checkFavToLS();
    this.setFavToLS();
    // Check and Set Compare
    this.checkCompareToLS();
    this.setCompareToLS();
    // Check if the Product Icons Checked and set
    this.productIcons();
    this.$store.commit("getProductStatus");
  },
};
</script>

<style lang="scss" scoped>
.products-swiper {
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
        transition: 0.3s;
        &:hover {
          color: var(--yellow);
        }
      }
    }
  }
  .card {
    border: none;
    position: relative;
    .img-holder {
      .first {
        position: absolute;
        transition: 0.5s;
      }
    }
    .card-body {
      .card-text {
        margin: 5px 0;
        font-size: 15px;
      }
      .price {
        margin-bottom: 5px;
        font-size: 18px;
        .price-num {
          text-decoration: line-through;
          color: grey;
          font-size: 15px;
        }
      }
      .buy {
        .add-product {
          color: var(--bg-color);
          border: none;
          font-weight: 500;
          background-color: #e3e3e3;
          padding: 10px;
          border-radius: 6px;
          transition: 0.3s;
          width: 100%;
        }
      }
    }
    .product-options {
      position: absolute;
      right: 0;
      top: 5%;
      opacity: 0;
      transition: 0.3s;
      > div {
        margin-bottom: 12px;
        font-size: 17px;
        color: #2230409e;
        i {
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            color: var(--bg-color);
          }
        }
      }
      .fav {
        cursor: pointer;
        i {
          pointer-events: none;
        }
      }
      .compare {
        cursor: pointer;
        i {
          pointer-events: none;
        }
      }
    }
    .discount {
      position: absolute;
      top: 10px;
      left: 15px;
      color: red;
    }
    &:hover {
      .buy {
        .add-product {
          background-color: var(--yellow);
        }
      }
      .product-options {
        opacity: 1;
        right: 5%;
      }
      .img-holder {
        .first {
          opacity: 0;
        }
      }
    }
  }
  .modal-content {
    .modal-header {
      border-bottom: none;
      padding: 16px;
    }
    .modal-body {
      padding: 0 16px 16px;
      .modal-info {
        h2 {
          margin-bottom: 20px;
          font-size: 18px;
          text-align: center;
          color: green;
        }
      }
      .modal-buttons {
        display: flex;
        justify-content: center;
        a {
          button {
            width: 100%;
            border: none;
            border-radius: 6px;
            padding: 12px 0;
            font-weight: 500;
            letter-spacing: 0.5px;
          }
          &.view-cart {
            flex: 1;
            margin-right: 20px;
            button {
              background-color: #e3e3e3;
            }
          }
          &.checkout {
            flex: 1;
            button {
              background-color: var(--yellow);
            }
          }
        }
      }
      .continue {
        margin-top: 15px;
        button {
          display: block;
          margin: auto;
          border: none;
          background-color: transparent;
          text-decoration: underline;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
