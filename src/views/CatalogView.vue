<template>
  <div class="catalog">
    <h2>All Products</h2>
    <div class="row">
      <div
        class="product col-sm-6 col-lg-4 col-xl-3"
        v-for="product in catalogProducts"
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
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </span>
            <span v-else style="color: var(--yellow)">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
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
                        <router-link class="checkout" to="/Profile-Page">
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
          </div>
          <span class="discount">{{ `-${product.discount}%` }}</span>
          <div class="product-options">
            <div class="fav" @click="toggleFavourite(product)">
              <i v-if="!product.wishlist" class="fa-regular fa-heart"></i>
              <i v-if="product.wishlist" class="fa-solid fa-heart"></i>
            </div>
            <div class="compare" @click="toggleCompare(product)">
              <i v-if="!product.compare" class="fa-solid fa-arrows-rotate"></i>
              <i v-if="product.compare" class="fa-solid fa-check"></i>
            </div>
            <div
              class="view"
              @click="
                this.$router.push({
                  name: 'product',
                  params: {
                    id: product.id,
                    description: product.description,
                  },
                })
              "
            >
              <i class="fa-regular fa-eye"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      catalogProducts: [],
    };
  },
  computed: {
    ...mapState(["allProducts", "fav", "cart", "compare"]),
  },
  methods: {
    // Add Product To Cart
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
    setCartToLS() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
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
    addToCompare(product) {
      if (!this.compare.includes(product)) {
        this.compare.push(product);
        this.setCompareToLS();
        this.$store.commit("totalCompare");
      }
    },
    deleteCompare(product) {
      this.compare.splice(this.compare.indexOf(product), 1);
      this.setCompareToLS();
      this.$store.commit("totalCompare");
    },
    toggleCompare(product) {
      if (product.compare) {
        this.deleteCompare(product);
      } else {
        this.addToCompare(product);
      }
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
    this.catalogProducts = this.allProducts;
    // Check and Set Cart
    this.checkCartLS();
    this.setCartToLS();
    // Check and Set Favourite
    this.checkFavToLS();
    this.setFavToLS();
    // Check and Set Compare
    this.checkCompareToLS();
    this.setCompareToLS();
    // Get the Active Product Icons
    this.catalogProducts.forEach((product) => {
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
</script>

<style lang="scss" scoped>
.catalog {
  flex: 1;
  padding: 30px 15px;
  width: 80%;
  @media (max-width: 1199px) {
    width: 100%;
    padding: 30px 0;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 40px;
  }
  .product {
    @media (max-width: 576px) {
      & {
        width: 50%;
      }
    }
    .card {
      border: none;
      position: relative;
      margin-bottom: 24px;

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
          cursor: pointer;
          i {
            pointer-events: none;
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
                gap: 20px;
                @media (max-width: 420px) {
                  flex-direction: column;
                }
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
  }

  @media (max-width: 767px) {
    & {
      max-width: 100%;
    }
  }
}
</style>
