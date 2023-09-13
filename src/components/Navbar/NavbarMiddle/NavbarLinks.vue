<template>
  <div class="links">
    <div class="search" @click="toggleSearch()" ref="search">
      <i class="fa-solid fa-magnifying-glass open-search"></i>
      <span class="open-search">Search</span>
    </div>
    <div class="user">
      <router-link to="/profile-page">
        <i class="fa-regular fa-user"></i
      ></router-link>
      <span>Account</span>
    </div>
    <div class="fav">
      <router-link to="/wishlist">
        <i class="fa-regular fa-heart"
          ><span>{{ this.$store.state.favTotal }}</span></i
        >
      </router-link>
      <span>Wishlist</span>
    </div>
    <div class="compare">
      <router-link to="/compare">
        <i class="fa-solid fa-arrow-rotate-left">
          <span class="compare-num">{{ this.$store.state.compareTotal }}</span>
        </i>
      </router-link>
      <span>Compare</span>
    </div>
    <div
      class="cart"
      @click="this.$route.path === '/my-cart' ? false : toggleCart()"
      ref="myCart"
    >
      <i class="fa-solid fa-cart-shopping">
        <span class="cart-num purchase-num">{{
          this.$store.state.cartTotal
        }}</span>
      </i>
      <span>My Cart</span>
    </div>
    <div class="home-cart">
      <div class="overlay" ref="cartOverlay" @click="toggleCart()"></div>
      <div class="purchase d-flex flex-column" ref="cartPurchase">
        <div class="heading">
          <div class="home-cart-img">
            <router-link @click="toggleCart()" to="/"
              ><img src="@/assets/logo.webp" alt="Electrbox Logo"
            /></router-link>
          </div>
          <div class="close-cart" @click="toggleCart()" ref="closeCart">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="products" v-if="homeCart.length > 0">
          <div class="item" v-for="(product, i) in homeCart" :key="product.id">
            <div class="product-img">
              <a
                @click="
                  {
                    this.$router.push({
                      name: 'product',
                      params: {
                        id: product.id,
                        description: product.description,
                      },
                    });
                    toggleCart();
                  }
                "
              >
                <img :src="product.firstImg" :alt="product.title" />
              </a>
            </div>
            <div class="product-text">
              <a
                class="link"
                @click="
                  {
                    this.$router.push({
                      name: 'product',
                      params: {
                        id: product.id,
                        description: product.description,
                      },
                    });
                    toggleCart();
                  }
                "
              >
                {{ product.description }}
              </a>
              <p class="total">
                {{ product.count }} X
                {{
                  `$${Math.floor(
                    product.price - (product.price * product.discount) / 100
                  )}.00 `
                }}
              </p>
            </div>
            <div class="delete">
              <button @click="deleteItem(i)">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="empty-cart" v-else>
          <h2>Your Cart is Empty</h2>
          <div class="continue-link">
            <router-link to="/catalog" @click="toggleCart()">
              Continue Shopping
            </router-link>
          </div>
        </div>
        <div class="cart-footer">
          <div class="total text-center">
            <span class="sub m-2"> Subtotal </span>
            <span class="total-num">{{ totalPrice }}</span>
          </div>
          <div class="taxes text-center">
            Note: Taxes and shipping calculated at checkout
          </div>
          <div>
            <router-link @click="toggleCart()" class="view-cart" to="/my-cart">
              VIEW MY CART ({{ this.$store.state.cartTotal }})
            </router-link>
          </div>
          <div>
            <router-link @click="toggleCart()" class="pay" to="/profile-page">
              CHECKOUT
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden-search" ref="hiddenSearch">
      <div class="container">
        <div class="search-content">
          <form>
            <div class="form-floating">
              <input
                class="form-control"
                type="search"
                placeholder=" "
                required
              />
              <label>Search</label>
            </div>
          </form>
          <button @click="toggleSearch()" class="close-search">
            <i class="fa-solid fa-xmark"></i>
          </button>
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
      isCartOpen: false,
      isSearchOpen: false,
      homeCart: this.$store.state.cart,
    };
  },
  computed: {
    ...mapState(["cart"]),
    totalPrice() {
      return `$${this.homeCart
        .reduce(
          (total, product) =>
            total +
            Math.floor(
              product.price - (product.price * product.discount) / 100
            ) *
              product.count,
          0
        )
        .toFixed(2)}`;
    },
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    },
    // Toggle Open Cart
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
      this.homeCart = this.$store.state.cart;
      if (this.isCartOpen) {
        this.$nextTick(() => {
          this.$refs.cartOverlay.classList.add("show");
          setTimeout(() => {
            this.$refs.cartPurchase.classList.add("show");
          });
        });
      } else {
        this.$refs.cartPurchase.classList.remove("show");
        setTimeout(() => {
          this.$refs.cartOverlay.classList.remove("show");
        });
      }
    },
    // Toggle Open Search
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
      this.homeCart = this.$store.state.cart;
      if (this.isSearchOpen) {
        this.$nextTick(() => {
          this.$refs.hiddenSearch.classList.add("show-search");
        });
      } else {
        this.$refs.hiddenSearch.classList.remove("show-search");
      }
    },
    // Get Cart Products and set To LS and Delete
    setCartCountToLS() {
      localStorage.setItem("cart", JSON.stringify(this.homeCart));
    },
    deleteItem(i) {
      if (window.confirm("Are you sure you want to delete this product?")) {
        this.homeCart.splice(i, 1);
        this.setCartCountToLS();
        this.$store.commit("totalCart");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  justify-content: end;
  color: white;
  a:hover {
    color: white;
  }
  .router-link-exact-active {
    color: var(--yellow);
    + span {
      color: var(--yellow);
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    i {
      font-size: 25px;
      position: relative;
      span {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        font-size: 10px;
        width: 18px;
        height: 18px;
        z-index: 3;
        color: black;
        background-color: var(--yellow);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-weight: bold;
      }
    }
    &.cart {
      cursor: pointer;
      @media (max-width: 1199px) {
        padding-right: 0;
      }
      i {
        margin-bottom: 3px;
        pointer-events: none;
      }
    }
    @media (max-width: 767px) {
      & {
        padding: 0 7px;
        > span {
          display: none;
        }
        i {
          font-size: 22px;
        }
      }
    }
  }

  @media (max-width: 420px) {
    & {
      .fav {
        display: none;
      }
      .compare {
        display: none;
      }
      > div {
        padding: 0 7px;
        i {
          font-size: 22px;
        }
      }
    }
  }
  .home-cart {
    padding: 0;
    .overlay {
      position: relative;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.603);
      z-index: -1;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 0.3s;
      &.show {
        position: fixed;
        opacity: 1;
        z-index: 999999999999;
      }
    }
    .purchase {
      position: fixed;
      background-color: white;
      height: 100%;
      z-index: 99999999999;
      right: 0;
      top: 0;
      color: var(--bg-color);
      width: 400px;
      transition: 0.3s ease-in-out;
      transform: translateX(103%);
      @media (max-width: 767px) {
        & {
          width: 60%;
        }
      }
      &.show {
        transform: translateX(0);
      }
      .heading {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--bg-color);
        padding: 15px;
        border-bottom: 1px solid var(--yellow);
        .home-cart-img {
          width: 160px;
          img {
            width: 100%;
          }
        }
        .close-cart {
          cursor: pointer;
          color: white;
          display: flex;
          i {
            font-size: 22px;
          }
        }
        @media (max-width: 767px) {
          & {
            padding: 15px;
            .home-cart-img {
              width: 165px;
            }
            .close-cart {
              i {
                font-size: 23px;
              }
            }
          }
        }
      }
      .products {
        position: relative;
        padding-top: 10px;
        flex: 1;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          width: 7px;
        }
        &::-webkit-scrollbar-track {
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          background-color: rgba(128, 128, 128, 0.404);
          transition: 0.3s;
          border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb:hover {
          background-color: rgba(128, 128, 128);
        }
        &::-webkit-scrollbar-corner {
          background-color: white;
          box-shadow: 0 0 10px #ddd inset;
        }
        .item {
          display: flex;
          padding: 10px 0;
          .product-img {
            width: 150px;
            a {
              cursor: pointer;
            }
            img {
              width: 150px;
            }
          }
          .product-text {
            flex: 1;
            display: flex;
            justify-content: center;
            flex-direction: column;
            a {
              cursor: pointer;
              font-weight: 500;
              color: var(--bg-color);
              font-size: 16px;
            }
            p {
              font-weight: 500;
              font-size: 15px;
              margin: 0;
              margin-top: 10px;
            }
          }
          @media (max-width: 767px) {
            & {
              .product-img {
                width: 90px !important;
                img {
                  width: 90px !important;
                }
              }
              .product-text {
                .link {
                  font-size: 14px !important;
                }
                p {
                  font-size: 14px !important;
                }
              }
            }
          }
          .delete {
            display: flex;
            align-items: center;
            justify-content: center;
            button {
              border: none;
              background-color: transparent;
              margin-right: 10px;
              i {
                pointer-events: none;
                font-size: 17px;
              }
            }
          }
        }
      }
      @media (max-width: 576px) {
        & {
          .heading {
            .home-cart-img {
              width: 135px !important;
            }
            .close-cart {
              i {
                font-size: 20px;
              }
            }
          }
        }
      }
      @media (max-width: 420px) {
        & {
          width: 75%;
          .heading {
            .home-cart-img {
              width: 135px !important;
            }
            .close-cart {
              i {
                font-size: 20px;
              }
            }
          }
        }
      }
      .empty-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1;
        h2 {
          font-size: 23px;
          font-weight: 400;
        }
        .continue-link {
          a {
            color: var(--bg-color);
            font-size: 16px;
            text-decoration: underline;
          }
          &:hover {
            a {
              color: var(--yellow);
              text-decoration: underline;
            }
          }
        }
      }
      .cart-footer {
        width: 100%;
        padding: 15px;
        gap: 15px;
        background-color: var(--bg-color);
        color: white;
        z-index: 9;
        border-top: 1px solid var(--yellow);
        > div {
          margin-bottom: 20px;
        }
        .total {
          font-size: 17px;
          .total-num {
            font-weight: 500;
          }
        }
        .view-cart,
        .pay {
          display: block;
          padding: 15px 30px;
          text-align: center;
          border-radius: 6px;
          font-weight: 500;
          letter-spacing: 0.6px;
          width: 100%;
          color: var(--bg-color);
          background-color: var(--yellow);
          font-weight: 500;
          &.router-link-active.router-link-exact-active {
            color: var(--bg-color) !important;
          }
          &.router-link-active.router-link-exact-active {
            color: var(--bg-color) !important;
          }
        }
      }
    }
  }

  .search {
    cursor: pointer;
    span {
      margin-top: 3px;
    }
    @media (min-width: 1200px) {
      & {
        display: none;
      }
    }
  }
  .hidden-search {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #2e3f54;
    color: var(--bg-color);
    opacity: 0;
    z-index: -3;
    transition: 0.3s;
    &.show-search {
      opacity: 1;
      z-index: 899879;
    }
    .container {
      width: 100%;
      height: 100%;
      .search-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        form {
          width: 70%;
          margin-right: 15px;
          .form-floating {
            .form-control {
              height: 44px;
              &:focus {
                border-color: #ced4da;
                box-shadow: none;
              }
            }
            label {
              color: grey;
              padding: 10px;
            }
          }
        }
        .close-search {
          font-size: 24px;
          color: white;
          border: none;
          background-color: transparent;
          padding: 0;
        }
      }
    }
  }
}
</style>
