<template>
  <div class="wishlist">
    <h2>Wishlist Section</h2>
    <div class="row" v-if="fav.length > 0">
      <div
        class="col-md-6 col-lg-4 col-xl-3"
        v-for="product in fav"
        :key="product.id"
      >
        <div class="card">
          <div class="img-holder flex-center">
            <div class="imgs">
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
              {{ product.description }}
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
            <!-- Button trigger modal -->
            <button
              @click="addItemToCart(product)"
              type="button"
              class="add-product"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              ADD TO CART
            </button>
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
                          View My Cart ({{ this.$store.state.cartTotal }})
                        </button>
                      </router-link>
                      <router-link to="/profile-page" class="checkout">
                        <button data-bs-dismiss="modal" aria-label="Close">
                          Checkout
                        </button>
                      </router-link>
                    </div>
                    <div class="continue">
                      <router-link to="/catalog">
                        <button data-bs-dismiss="modal" aria-label="Close">
                          Continue Shopping
                        </button>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="delete-btn" @click="deleteFav(product)">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <span class="discount">{{ `-${product.discount}%` }}</span>
          <div class="product-options">
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
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="empty-wishlist" v-else>
      <h2>Wishlist Is Empty</h2>
      <div class="continue-link">
        <router-link to="/catalog"> Continue Shopping </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import $ from "jquery";
export default {
  computed: {
    ...mapState(["fav", "compare", "cart"]),
  },
  methods: {
    // Add to Favourit
    setFavToLS() {
      localStorage.setItem("fav", JSON.stringify(this.fav));
    },
    deleteFav(product) {
      this.fav.splice(this.fav.indexOf(product), 1);
      this.setFavToLS();
      this.$store.commit("totalFav");
      product.wishlist = false;
      localStorage.setItem(
        `${product.name}Wishlist_${product.id}`,
        product.wishlist
      );
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
  },
  mounted() {
    // Set Wishlist to LS
    this.setFavToLS();
    this.setCartToLS();
    // Set Compare to LS
    this.checkCompareToLS();
    this.setCompareToLS();

    // Set Product Icons
    this.fav.forEach((product) => {
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
};
$(() => {
  $(".dropdown button").on("click", () => {
    $("button i").toggleClass("arrow-up");
  });
});
</script>

<style lang="scss" scoped>
.wishlist {
  color: var(--bg-color);
  flex: 1;
  padding: 30px 15px;
  width: 80%;
  @media (max-width: 1199px) {
    width: 100%;
    padding: 30px 0;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 30px;
  }

  .card {
    margin-bottom: 24px;
    border: none;
    box-shadow: 0 0px 5px #e9e9e9;
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
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
      top: 13%;
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
    &:hover {
      .add-product {
        background-color: var(--yellow);
      }
      .product-options {
        opacity: 1;
        right: 6%;
      }
      .img-holder {
        .first {
          opacity: 0;
        }
      }
    }
    .modal-content {
      .modal-header {
        border-bottom: none;
        padding: 16px 16px 0 0;
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
              padding: 10px 0;
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
    .delete-btn {
      position: absolute;
      top: 3%;
      right: 5%;
      background-color: transparent;
      border: none;
      font-size: 18px;
      color: rgba(34, 48, 64, 0.6196078431);
      i {
        pointer-events: none;
      }
    }
  }
  .empty-wishlist {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 57vh;
    h2 {
      font-size: 23px;
      font-weight: 400;
    }
    .continue-link {
      a {
        color: var(--bg-color);
        font-size: 16px;
      }
      &:hover {
        a {
          color: var(--yellow);
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
