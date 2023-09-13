<template>
  <div class="cart-content">
    <h2 class="header">Your Shopping Cart</h2>
    <div v-if="this.cart.length > 0">
      <div class="titles">
        <div class="first">PRODUCT</div>
        <div class="second">PRICE</div>
        <div class="third">QUANTITY</div>
        <div class="fourth">TOTAL</div>
      </div>
      <div class="products">
        <div class="item" v-for="(product, i) in cart" :key="product.id">
          <div class="one">
            <div class="img">
              <img :src="product.firstImg" :alt="product.title" />
            </div>
            <div class="text">
              <router-link
                :to="{
                  name: 'product',
                  params: {
                    id: product.id,
                    description: product.description,
                  },
                }"
                >{{ product.title }}</router-link
              >
              <p>{{ product.description }}</p>
            </div>
          </div>
          <div class="two">
            <span class="after-discount">{{
              `$${Math.floor(
                product.price - (product.price * product.discount) / 100
              )}.00 `
            }}</span>
          </div>
          <div class="three">
            <div class="quantity">
              <label>Quantity</label>
              <div class="quantity-btns">
                <button
                  @click="
                    {
                      product.count > 1 ? product.count-- : true;
                      setCartCountToLS();
                    }
                  "
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
                <input type="number" v-model="product.count" />
                <button
                  @click="
                    {
                      product.count++;
                      setCartCountToLS();
                    }
                  "
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="four text-end">
            <div class="four-total">Total</div>
            <div class="mb-1">
              {{
                `$${
                  Math.floor(
                    product.price - (product.price * product.discount) / 100
                  ) * product.count
                }`
              }}
            </div>
            <button class="delete" @click="deleteItem(i)">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
      <router-link class="continue" to="/catalog">
        Continue Shopping
      </router-link>
      <div class="checkout">
        <div class="instructions">
          <h4>Order Special Instructions</h4>
          <div class="form-floating">
            <textarea
              class="form-control"
              type="number"
              placeholder=" "
              required
            ></textarea>
            <label>Comment</label>
          </div>
        </div>
        <div class="total-check">
          <div class="total">
            <span class="sub m-2"> Subtotal </span>
            <span class="total-num">${{ totalPrice }}</span>
          </div>
          <div class="taxes">Taxes and shipping calculated at checkout</div>
          <router-link class="pay" to="/profile-page"> CHECKOUT </router-link>
        </div>
      </div>
    </div>
    <div class="empty-cart" v-else>
      <h2>Your Cart is Empty</h2>
      <div class="continue-link">
        <router-link to="/catalog"> Continue Shopping </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
    totalPrice() {
      return this.cart
        .reduce(
          (total, product) =>
            total +
            Math.floor(
              product.price - (product.price * product.discount) / 100
            ) *
              product.count,
          0
        )
        .toFixed(2);
    },
  },
  methods: {
    setCartCountToLS() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    deleteItem(i) {
      if (window.confirm("Are you sure you want to delete this product?")) {
        this.cart.splice(i, 1);
        this.setCartCountToLS();
        this.$store.commit("totalCart");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-content {
  padding: 30px 15px;
  color: var(--bg-color);
  @media (max-width: 1199px) {
    & {
      width: 100%;
      padding: 30px 0;
    }
  }
  .header {
    margin-bottom: 40px;
    font-size: 22px;
  }
  .titles {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 20px;
    font-weight: 500;
    padding: 0 10px 25px 10px;
    border-bottom: 1px solid #e5e5e5;
    .second,
    .third {
      text-align: center;
    }
    .fourth {
      text-align: end;
    }
    @media (max-width: 767px) {
      & {
        grid-template-columns: 1fr 1fr;
        .fourth,
        .third {
          display: none;
        }
        .second {
          text-align: end;
        }
      }
    }
  }
  .products {
    margin-bottom: 40px;
    .item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 20px;
      padding: 40px 0;
      border-bottom: 1px solid #e5e5e5;
      .one {
        display: flex;
        .img {
          margin-right: 15px;
          img {
            width: 100px;
          }
        }
        .text {
          a {
            display: block;
            color: var(--bg-color);
            font-weight: 500;
            font-size: 17px;
            margin-bottom: 12px;
          }
          p {
            color: #626262;
          }
        }
      }
      .two {
        text-align: center;
        @media (max-width: 767px) {
          text-align: end;
        }
        .after-discount {
          font-weight: 500;
          font-size: 17px;
          margin-right: 10px;
        }
      }
      .three {
        text-align: center;
        @media (max-width: 767px) {
          text-align: end;
        }
        .quantity {
          @media (max-width: 991px) {
            label {
              display: block;
            }
          }
          label {
            margin-right: 25px;
            font-weight: 500;
            display: none;
            @media (max-width: 767px) {
              display: block;
              margin: 18px 22px 5px 0;
              margin-right: 22px;
              margin-bottom: 5px;
            }
          }
          .quantity-btns {
            display: inline;
            input {
              border: none;
              outline: none;
              padding-left: 10px;
              padding-right: 6px;
              width: 33px;
            }
            button {
              border: none;
              background-color: white;
              padding: 1px 10px;
              i {
                pointer-events: none;
              }
            }
          }
          .delete {
            border: none;
            background-color: transparent;
            margin-left: 10px;
            padding: 5px 10px;
            background-color: #e5e5e5;
            border-radius: 6px;
            &:hover {
              color: red;
            }
            i {
              pointer-events: none;
            }
          }
        }
      }
      .four {
        font-size: 17px;
        font-weight: 500;
        .four-total {
          display: none;
          @media (max-width: 767px) {
            display: block;
          }
        }
        .delete {
          border: none;
          background-color: transparent;
          margin-left: 10px;
          padding: 5px 10px;
          background-color: #e5e5e5;
          border-radius: 6px;
          &:hover {
            color: red;
          }
          i {
            pointer-events: none;
          }
        }
      }
      @media (max-width: 767px) {
        & {
          grid-template-columns: 2fr 1fr;
          .two {
            justify-content: end;
            align-items: start;
          }
          .four {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .continue {
    background-color: #e5e5e5;
    color: var(--bg-color);
    padding: 15px 20px;
    border-radius: 6px;
    font-weight: 500;
    letter-spacing: 0.6px;
    &:hover {
      background-color: var(--yellow);
    }
  }
  .checkout {
    display: flex;
    justify-content: space-between;
    margin: 60px 0;
    .instructions {
      flex: 1;
      h4 {
        font-size: 16px;
        margin-bottom: 30px;
        font-weight: 400;
      }
      .form-floating {
        max-width: 350px;
        max-height: 200px;
        textarea {
          height: 110px !important;
        }
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
    .total-check {
      flex: 1;
      display: flex;
      align-items: end;
      justify-content: space-evenly;
      flex-direction: column;
      .total {
        font-size: 17px;
        .total-num {
          font-weight: 500;
        }
      }
      .pay {
        display: block;
        background: var(--bg-color);
        color: var(--yellow);
        padding: 15px 30px;
        width: 70%;
        text-align: center;
        border-radius: 6px;
        font-weight: 500;
        letter-spacing: 0.6px;
      }
    }
    @media (max-width: 767px) {
      & {
        flex-direction: column-reverse;
        align-items: center;
        .total-check {
          width: 100%;
          align-items: center;

          .taxes {
            margin: 8px 0 15px;
          }
        }
        .instructions {
          width: 100%;
          margin-top: 40px;
          .form-floating {
            max-width: 100%;
            margin: auto;
          }
          h4 {
            text-align: center;
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
