<template>
  <div class="product-details">
    <h2 class="item-header">
      <router-link to="/catalog">Products</router-link> |
      {{ myProduct[0].description }}
    </h2>
    <div class="item" v-for="product in myProduct" :key="product.id">
      <div id="img-item" class="item-img">
        <img id="img-1" :src="product.firstImg" alt="" />
      </div>
      <div class="item-details">
        <h4 class="item-name">{{ product.description }}</h4>
        <span v-if="product.stars === 5" style="color: var(--yellow)">
          <i v-for="e in 5" :key="e" class="fa-solid fa-star"></i>
        </span>
        <span v-else style="color: var(--yellow)">
          <i v-for="e in 4" :key="e" class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star" style="color: grey"></i>
        </span>
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
        <p class="description">
          Elegant and comfy, this embroidered A-line dress which has a round
          neck, and three-quarter sleeves is all you need to ensure your
          wardrobe is up...
        </p>
        <ul class="model">
          <li><span>Type</span> : Car</li>
          <li><span>Vendor</span> : Dell</li>
          <li><span>Sku</span> : NHFL5-14</li>
          <li style="color: #3ed660">
            <span style="color: #223040 !important">Availability</span> : In
            Stock
          </li>
          <li>
            <span>Tags</span> :
            <div>Accessories, Cotton , Fashion , Summer , Vintage</div>
          </li>
          <li><span>Colors </span> : Black</li>
        </ul>
        <div class="colors">
          <span class="blue"> </span>
          <span class="red"></span>
          <span class="white"></span>
        </div>
        <div class="quantity">
          <label>Quantity</label>
          <div class="quantity-btns">
            <button
              @click="
                {
                  product.count > 1 ? product.count-- : true;
                }
              "
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <input type="number" v-model="product.count" />
            <button @click="product.count++">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="total-price mb-4" style="font-weight: bold">
          <span
            style="
              display: inline-block;
              min-width: 72px;
              color: #223040;
              font-weight: 500;
            "
          >
            Total
          </span>
          : ${{
            Math.floor(
              product.price - (product.price * product.discount) / 100
            ) * product.count
          }}
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
                    <div class="modal-img">
                      <img :src="product.firstImg" :alt="product.title" />
                    </div>
                  </div>
                  <div class="modal-buttons">
                    <router-link class="view-cart" to="/my-cart">
                      <button data-bs-dismiss="modal" aria-label="Close">
                        View My Cart ({{ this.$store.state.cartTotal }})
                      </button>
                    </router-link>
                    <router-link class="checkout" to="/Profile-Page">
                      <button data-bs-dismiss="modal" aria-label="Close">
                        BUY IT NOW
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
          <router-link class="checkout" to="/Profile-Page">
            CHECKOUT
          </router-link>
        </div>
        <div class="product-options">
          <div class="fav" @click="toggleFavourite(product)">
            <i v-if="!product.wishlist" class="fa-regular fa-heart"
              ><span>Add to Wishlist</span></i
            >
            <i v-if="product.wishlist" class="fa-solid fa-heart"
              ><span>Add to Wishlist</span></i
            >
          </div>
          <div class="compare" @click="toggleCompare(product)">
            <i
              v-if="product.compare"
              class="fa-solid fa-check"
              style="pointer-events: none"
            >
              <span style="pointer-events: none">Add to Compare</span></i
            >
            <i
              v-if="!product.compare"
              class="fa-solid fa-arrows-rotate"
              style="pointer-events: none"
            >
              <span style="pointer-events: none">Add to Compare</span>
            </i>
          </div>
        </div>
        <div class="small-screens">
          <div class="row accordion-middle">
            <div class="accordion-col">
              <div class="tabs">
                <div class="tab">
                  <input type="checkbox" id="chck8" />
                  <label class="tab-label" for="chck8">
                    <p>
                      <i class="fa-solid fa-van-shuttle"></i>
                      Shipping And Returns
                    </p>
                  </label>
                  <div class="tab-content">
                    <p>
                      Free shipping and returns available on all orders! We ship
                      all US domestic orders within
                      <span style="font-weight: 500">5-10 business days</span>!
                    </p>
                  </div>
                </div>
                <div class="tab">
                  <input type="checkbox" id="chck9" />
                  <label class="tab-label" for="chck9"
                    ><p>
                      <i class="fa-solid fa-ruler-combined"></i> SIZE CHART
                    </p></label
                  >
                  <div class="tab-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>Chest</th>
                          <th>Neck</th>
                          <th>Sleev</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Small</td>
                          <td>36-38"</td>
                          <td>14-14.5"</td>
                          <td>32.5"</td>
                        </tr>
                        <tr>
                          <td>Medium</td>
                          <td>39-41"</td>
                          <td>15-15.5"</td>
                          <td>33.5"</td>
                        </tr>
                        <tr>
                          <td>Large</td>
                          <td>42-44"</td>
                          <td>16-16.5"</td>
                          <td>34.5"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab">
                  <input type="checkbox" id="chck10" />
                  <label class="tab-label" for="chck10"
                    ><p>
                      <i class="fa-regular fa-heart"></i> Care instructions
                    </p></label
                  >
                  <div class="tab-content">
                    <p>
                      Use a soft damp cloth and a drop of mild soap to remove
                      any haze. Air dry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="details">
      <button
        class="rev active"
        @click="
          {
            detailsActive = true;
            activeReview(1);
          }
        "
        :style="{
          backgroundColor: selectedDiv === 1 ? 'var(--yellow)' : '',
        }"
      >
        DESCRIPTION
      </button>
      <button
        class="rev"
        @click="
          {
            detailsActive = false;
            activeReview(2);
          }
        "
        :style="{
          backgroundColor: selectedDiv === 2 ? 'var(--yellow)' : '',
        }"
      >
        REVIEWS
      </button>
      <div class="description" v-if="detailsActive">
        <p>
          Elegant and comfy, this embroidered A-line dress which has a round
          neck, and three-quarter sleeves is all you need to ensure your
          wardrobe is up to date. Browse through the latest collection of
          various ethnic dresses with cap sleeve sleeve designs to give a
          flawless desi look. Stay up to date with the great selection of
          attractive traditional ethnic dresses made with the perfect blend and
          modern style.
        </p>
        <h4>Sample Unordered List</h4>
        <ul>
          <li>Comodous in tempor ullamcorper miaculis</li>
          <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
          <li>Divamus sit amet purus justo.</li>
          <li>
            Proin molestie egestas orci ac suscipit risus posuere loremou.
          </li>
        </ul>
        <h4>Sample Ordered List</h4>
        <ol>
          <li>Comodous in tempor ullamcorper miaculis</li>
          <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
          <li>Divamus sit amet purus justo.</li>
          <li>
            Proin molestie egestas orci ac suscipit risus posuere loremou.
          </li>
        </ol>
        <h4>Sample Paragraph Text</h4>
        <p class="text">
          Faded short sleeves t-shirt with high neckline. Soft and stretchy
          material for a comfortable fit. Accessorize with a straw hat and
          you're ready for summer!Faded short sleeves t-shirt with high
          neckline. Soft and stretchy material for a comfortable fit.
          Accessorize with a straw hat and you're ready for summe!
        </p>
      </div>
      <div class="reviews" v-else>
        <div class="stars">
          <span style="color: var(--yellow)">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </span>
          <h4>Amazing Product!</h4>
        </div>
        <div class="name">
          <span class="customer">Magnus Carlsen</span> on
          <span class="date">30 APRILL, 2023</span>
        </div>
        <p>Brilliant Self Pin For Immortality, How Amazing!</p>
      </div>
    </div>
    <ProductSwiper :products="popularProducts" text="Popular Products" />
  </div>
</template>

<script>
import ProductSwiper from "@/components/Home/ProductsSwiper.vue";

import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      detailsActive: true,
      myProduct: [],
      selectedDiv: 1,
    };
  },
  computed: {
    ...mapState([
      "fav",
      "compare",
      "cart",
      "allProducts",
      "popularProducts",
      "wishlistAndCompare",
    ]),
  },
  components: {
    ProductSwiper,
  },
  watch: {
    $route: {
      handler: "getMyProduct",
      immediate: true,
    },
  },
  methods: {
    ...mapMutations(["getPopularProducts"]),

    getMyProduct() {
      this.myProduct = this.allProducts.filter(
        (e) => e.id == this.$route.params.id
      );
    },
    // Zooming On Product Image
    zooming() {
      const imgParent = document.getElementById("img-item");
      const myImg = document.querySelector("#img-1");
      imgParent.addEventListener("mousemove", onZoom);
      imgParent.addEventListener("mouseover", onZoom);
      imgParent.addEventListener("mouseleave", offZoom);
      function onZoom(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        myImg.style.transformOrigin = `${x}px ${y}px`;
        myImg.style.transform = "scale(2)";
      }
      function offZoom() {
        myImg.style.transformOrigin = `center center`;
        myImg.style.transform = "scale(1)";
      }
    },
    // Add Product To Cart
    addItemToCart(product) {
      let exists = false;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          this.cart[i].count += product.count;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.cart.push(product);
      }
      this.setCartToLS();
      this.$store.commit("totalCart");
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
    setFavToLS() {
      localStorage.setItem("fav", JSON.stringify(this.fav));
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
    checkFavToLS() {
      localStorage.getItem("fav")
        ? (this.fav = JSON.parse(localStorage.getItem("fav")))
        : (this.fav = []);
    },
    deleteFav(product) {
      this.fav.splice(this.fav.indexOf(product), 1);
      this.setFavToLS();
      this.$store.commit("totalFav");
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
    checkCompareLS() {
      localStorage.getItem("compare")
        ? (this.compare = JSON.parse(localStorage.getItem("compare")))
        : (this.compare = []);
    },
    // Review Section Active Button BG
    activeReview(div) {
      this.selectedDiv = div;
    },
    // Get and set Fav and Compare Active ICONS
    productIcons() {
      this.myProduct.forEach((product) => {
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
    this.$store.commit("getPopularProducts");
    this.zooming();
    // Check and set Cart
    this.checkCartLS();
    this.setCartToLS();
    // Check and Set Favourite
    this.checkFavToLS();
    this.setFavToLS();
    // Check and Set Compare
    this.checkCompareLS();
    this.setCompareToLS();
    // Product Wishtlist and Compare Active Icons
    this.productIcons();
  },
};
</script>

<style lang="scss" scoped>
.product-details {
  font-family: "Roboto", sans-serif;
  color: var(--bg-color);
  flex: 1;
  padding: 30px 15px;
  width: 80%;
  @media (max-width: 1199px) {
    & {
      width: 100%;
      padding: 30px 0;
    }
  }
  > h2 {
    font-size: 20px;
    margin-bottom: 40px;
    font-weight: 400;
    a {
      color: var(--bg-color);
      font-weight: 500;
      &:hover {
        color: var(--yellow);
      }
    }
  }
  .item {
    display: flex;
    gap: 30px;
    .item-img {
      overflow: hidden;
      cursor: zoom-in;
      flex: 1;
      max-height: 427px;
      background-color: white;
      img {
        max-width: 100%;
        max-height: 100%;
        overflow: hidden;
      }
    }
    .item-details {
      flex: 1;
      .item-name {
        font-size: 18px;
      }
      .price {
        margin-bottom: 5px;
        font-size: 18px;
        margin-top: 8px;
        .price-num {
          text-decoration: line-through;
          color: grey;
          font-size: 15px;
          display: inline-block;
          margin-left: 15px;
        }
      }
      .description {
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 16px;
      }
      .model {
        li {
          margin: 10px 0;
          > span {
            display: inline-block;
            min-width: 72px;
            font-weight: 500;
          }
          div {
            display: inline-block;
          }
        }
      }
      .colors {
        margin-top: 20px;
        span {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 5px;
          box-shadow: 0 0 0 1px #999;
          cursor: pointer;
          &.red {
            background-color: red;
          }
          &.blue {
            background-color: var(--bg-color);
          }
          &.white {
            background-color: white;
          }
        }
      }
      .quantity {
        margin-top: 25px;
        margin-bottom: 25px;
        label {
          margin-right: 25px;
          font-weight: 500;
        }
        .quantity-btns {
          display: inline;
          input {
            border: none;
            outline: none;
            padding-left: 10px;
            padding-right: 8px;
            width: 33px;
          }
          button {
            border: none;
            background-color: white;
            padding: 0 10px;
            i {
              pointer-events: none;
            }
          }
        }
      }
      .buy {
        display: flex;
        justify-content: center;
        .checkout {
          flex: 1;
          background-color: var(--yellow);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          font-weight: 500;
          color: var(--bg-color);
        }
        .add-product {
          color: white;
          border: none;
          font-weight: 500;
          background-color: var(--bg-color);
          padding: 10px;
          border-radius: 6px;
          transition: 0.3s;
          width: 100%;
          flex: 1;
          margin-right: 20px;
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
                margin-bottom: 0;
                font-size: 18px;
                text-align: center;
                color: green;
              }
              .modal-img {
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
                img {
                  max-width: 100%;
                }
              }
            }
            .modal-buttons {
              display: flex;
              justify-content: center;
              @media (max-width: 767px) {
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
                  margin-right: 20px;
                  @media (max-width: 767px) {
                    margin-right: 0;
                    margin-bottom: 20px;
                  }
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
      .product-options {
        display: flex;
        margin-top: 15px;
        > div {
          font-size: 17px;
          cursor: pointer;
          i {
            pointer-events: none;
          }
        }
        .fav {
          i {
            margin: 10px 10px 10px 0;
            span {
              font-family: "Roboto", sans-serif;
              pointer-events: none;
              margin-left: 2px;
              font-weight: 300;
            }
            &.active {
              display: none;
            }
          }
        }
        .compare {
          i {
            margin: 10px;
            span {
              font-family: "Roboto", sans-serif;
              pointer-events: none;
              margin-left: 2px;
              font-weight: 300;
            }
            &.compare-active {
              display: none;
            }
          }
        }
      }
      .small-screens {
        margin-top: 30px;
        margin-bottom: 80px;
        .accordion-middle {
          .accordion-col {
            flex: 1;
            margin-left: 0 !important;
            &:last-child {
              margin-left: 1em;
            }
            input {
              position: absolute;
              opacity: 0;
              z-index: -1;
            }
            .tabs {
              border-radius: 8px;
              overflow: hidden;
              .tab {
                width: 100%;
                color: white;
                overflow: hidden;
                &-label {
                  display: flex;
                  justify-content: space-between;
                  padding: 1em;
                  background: transparent;
                  font-weight: bold;
                  cursor: pointer;
                  color: var(--bg-color);
                  /* Icon */
                  &::after {
                    content: "\276F";
                    width: 1em;
                    height: 1em;
                    text-align: center;
                    transition: all 0.35s;
                  }
                }
                &-content {
                  max-height: 0;
                  padding: 0 1em;
                  transition: all 0.35s;
                }
                &-close {
                  display: flex;
                  justify-content: flex-end;
                  padding: 1em;
                  font-size: 0.75em;
                  cursor: pointer;
                }
                .tab-label {
                  font-size: 18px;
                  padding: 10px;
                  font-weight: 400;
                  border-bottom: 1px solid #e5e5e5;
                }
                .tab-content {
                  padding: 0 10px;
                  margin-top: 10px;
                  table {
                    width: 100%;
                    text-align: center;
                    td {
                      border: 1px solid #e5e5e5;
                      padding: 10px;
                    }
                    th {
                      border: 1px solid #e5e5e5;
                      padding: 10px;
                    }
                  }
                }
                input:checked {
                  + .tab-label {
                    &::after {
                      transform: rotate(90deg);
                    }
                  }
                  ~ .tab-content {
                    max-height: 100vh;
                    color: var(--bg-color);
                  }
                }
                p {
                  margin: 0;
                  i {
                    min-width: 30px;
                  }
                }
              }
            }
          }
        }
      }
    }
    @media (max-width: 991px) {
      & {
        flex-direction: column;
        .item-img {
          margin-bottom: 40px;
        }
      }
    }
  }
  .details {
    font-weight: 400;
    button {
      border: none;
      padding: 10px;
      margin-right: 10px;
      border-radius: 6px;
      background-color: transparent;
      &:hover {
        background-color: var(--yellow);
      }
    }
    > div {
      padding: 20px;
      background-color: #fff;
      &.description {
        h4 {
          font-size: 18px;
          margin-top: 12px;
        }
        ul {
          list-style-type: disc;
          margin-left: 20px;
          padding-left: 10px;
        }
        li {
          padding: 5px;
        }
        .text {
          margin-left: 20px;
          padding-left: 20px;
          border-left: 1px solid #e5e5e5;
          color: grey;
          font-style: italic;
        }
      }
      &.reviews {
        h4 {
          font-size: 18px;
          margin: 20px 0 10px;
        }
        .name {
          font-style: italic;
          margin-bottom: 10px;
          span {
            font-weight: 500;
          }
        }
        p {
          font-size: 13px;
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
