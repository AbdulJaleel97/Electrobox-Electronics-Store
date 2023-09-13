<template>
  <div class="compare">
    <h2>Compare Section</h2>
    <div class="row" v-if="compare.length > 0">
      <div
        class="col-md-6 col-lg-4 col-xl-3 parent"
        v-for="compare in compare"
        :key="compare.id"
      >
        <div class="card">
          <div
            class="img"
            style="cursor: pointer"
            @click="
              this.$router.push({
                name: 'product',
                params: {
                  id: compare.id,
                  description: compare.description,
                },
              })
            "
          >
            <img
              :src="compare.firstImg"
              class="card-img-top"
              :alt="compare.title"
            />
          </div>
          <div class="card-body">
            <div class="price-compare">
              <p
                style="cursor: pointer"
                @click="
                  this.$router.push({
                    name: 'product',
                    params: {
                      id: compare.id,
                      description: compare.description,
                    },
                  })
                "
                class="card-text"
              >
                {{ compare.description }}
              </p>
              <span class="after-discount">{{
                `$${(
                  compare.price -
                  (compare.price * compare.discount) / 100
                ).toFixed(2)}`
              }}</span>
              <span class="real-price">{{ `$${compare.price}` }}</span>
            </div>
            <div class="list">
              <ul>
                <li>
                  <span class="left">Vendor</span
                  ><span class="right">Canon</span>
                </li>
                <li>
                  <span class="left">Type</span><span class="right">Scarf</span>
                </li>
                <li>
                  <span class="left">Sku</span
                  ><span class="right">NHFL5-14</span>
                </li>
                <li>
                  <span class="left">Availability</span
                  ><span class="right" style="color: #3ed660">In Stock</span>
                </li>
                <li>
                  <span class="left">Color</span
                  ><span class="right color">
                    <div>
                      <span class="red"></span>
                      <span class="blue"></span>
                      <span class="black"></span>
                    </div>
                  </span>
                </li>
                <li>
                  <span class="left">Size</span
                  ><span class="right"
                    ><div>S</div>
                    <div>L</div>
                    <div>M</div></span
                  >
                </li>
              </ul>
            </div>
          </div>
          <button class="delete-btn" @click="deleteCompare(compare)">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="empty-compare" v-else>
      <h2>Comparison Is Empty</h2>
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
    ...mapState(["compare", "cart"]),
  },
  methods: {
    setCartToLS() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    checkCartLS() {
      localStorage.getItem("cart")
        ? (this.cart = JSON.parse(localStorage.getItem("cart")))
        : (this.cart = []);
    },
    setCompareToLS() {
      localStorage.setItem("compare", JSON.stringify(this.compare));
    },
    // Delete Compare Product
    deleteCompare(product) {
      this.compare.splice(this.compare.indexOf(product), 1);
      this.setCompareToLS();
      this.$store.commit("totalCompare");
      product.compare = false;
      localStorage.setItem(
        `${product.name}Compare_${product.id}`,
        product.compare
      );
    },
  },
  mounted() {
    this.checkCartLS();
    this.setCompareToLS();
  },
};
$(() => {
  $(".dropdown button").on("click", () => {
    $("button i").toggleClass("arrow-up");
  });
});
</script>

<style lang="scss" scoped>
.compare {
  color: var(--bg-color);
  flex: 1;
  padding: 30px 15px;
  @media (max-width: 1199px) {
    padding: 30px 0;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .row {
    padding: 0 12px;
    .parent {
      padding: 0;
      .card {
        margin-bottom: 24px;
        border: 1px solid #ccc;
        border-radius: 0;
        background-color: #f5f5f5;
        padding: 0;
        .img {
          padding-bottom: 20px;
          padding: 15px;
        }
        .card-body {
          padding: 0;
          .card-text {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .price-compare {
            border-bottom: 1px solid #ccc;
            padding: 15px;
            p {
              margin-bottom: 10px;
            }
            span {
              font-size: 18px;
            }
            .after-discount {
              font-weight: 600;
              margin-right: 10px;
            }
            .real-price {
              color: grey;
              text-decoration: line-through;
            }
          }
          .list {
            ul {
              li {
                display: flex;
                padding: 15px;
                border-bottom: 1px solid #ccc;
                span {
                  flex: 1;
                }
                .left {
                  text-align: left;
                  font-weight: 600;
                }
                .right {
                  text-align: right;
                  div {
                    span {
                      display: inline-block;
                      width: 20px;
                      height: 20px;
                      margin-right: 5px;
                      border-radius: 50%;
                      box-shadow: 0 0 5px #cdcdcd;
                      &.red {
                        background-color: red;
                      }
                      &.black {
                        background-color: black;
                      }
                      &.white {
                        background-color: white;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .delete-btn {
          position: absolute;
          top: 5%;
          right: 7%;
          background-color: transparent;
          border: none;
          font-size: 18px;
          i {
            pointer-events: none;
          }
        }
      }
    }
  }

  .empty-compare {
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
