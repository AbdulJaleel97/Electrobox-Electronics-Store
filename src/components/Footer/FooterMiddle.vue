<template>
  <div class="footer-middle">
    <div class="container">
      <div class="row large-screens">
        <div class="col-md-4 one">
          <h2 class="header">Contact Us</h2>
          <p class="para">
            Burj Khalifa - Room 12154-Downtown Dubai - United Arab Emirates
          </p>
          <a class="mail" href="mailto:AbdulJaleelSaeed1997@gmail.com"
            >AbdulJaleelSaeed1997@gmail.com</a
          >
          <span style="display: block">+20 1100-8000-30</span>
          <div class="social">
            <a href="https://www.facebook.com/KaptainBoshkash" target="_blank">
              <i class="fa-brands fa-facebook"></i
            ></a>
            <a href="https://github.com/AbdulJaleel97" target="_blank"
              ><i class="fa-brands fa-github"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/abduljaleel-mohammed-80279a25a/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i
            ></a>
          </div>
        </div>
        <div class="col-md-3 two">
          <h2>Need Help?</h2>
          <ul>
            <li>
              <router-link to="/contact">Contact Us</router-link>
            </li>
            <li>
              <router-link to="/catalog">Catalog</router-link>
            </li>
            <li>
              <router-link to="/my-cart">Cart</router-link>
            </li>
            <li>
              <router-link to="/blog">Blog</router-link>
            </li>
            <li>
              <router-link to="/">Home</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2" v-for="footer in footerLinks" :key="footer.id">
          <h2>{{ footer.title }}</h2>
          <ul>
            <li v-for="path in footer.links" :key="path">
              <router-link
                :to="{
                  name: 'footer-link',
                  params: { name: path.name },
                }"
              >
                {{ path.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="small-screens">
        <div class="row accordion-middle">
          <div class="col">
            <div class="tabs">
              <div class="tab">
                <input type="checkbox" id="chck1" />
                <label class="tab-label" for="chck1">Contact Us</label>
                <div class="tab-content">
                  <p class="para">
                    Burj Khalifa - Room 12154-Downtown Dubai - United Arab
                    Emirates
                  </p>
                  <a href="mailto:AbdulJaleelSaeed1997@gmail.com"
                    >AbdulJaleelSaeed1997@gmail.com</a
                  >
                  <span style="display: block">+20 1100-8000-30</span>
                  <div class="social">
                    <a
                      href="https://www.facebook.com/KaptainBoshkash"
                      target="_blank"
                    >
                      <i class="fa-brands fa-facebook"></i
                    ></a>
                    <a href="https://github.com/AbdulJaleel97" target="_blank"
                      ><i class="fa-brands fa-github"></i
                    ></a>
                    <a
                      href="https://www.linkedin.com/in/abduljaleel-mohammed-80279a25a/"
                      target="_blank"
                    >
                      <i class="fa-brands fa-linkedin"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="chck2" />
                <label class="tab-label" for="chck2">Need Help?</label>
                <div class="tab-content">
                  <ul>
                    <li>
                      <router-link to="/contact">Contact Us</router-link>
                    </li>
                    <li>
                      <router-link to="/catalog">Catalog</router-link>
                    </li>
                    <li>
                      <router-link to="/my-cart">Cart</router-link>
                    </li>
                    <li>
                      <router-link to="/blog">Blog</router-link>
                    </li>
                    <li>
                      <router-link to="/">Home</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab" v-for="footer in footerLinks" :key="footer.id">
                <input
                  type="checkbox"
                  :id="footer.id == 1 ? 'chck3' : 'chck4'"
                />
                <label
                  class="tab-label"
                  :for="footer.id == 1 ? 'chck3' : 'chck4'"
                  >{{ footer.title }}</label
                >
                <div class="tab-content">
                  <ul>
                    <li v-for="path in footer.links" :key="path">
                      <router-link
                        :to="{
                          name: 'footer-link',
                          params: { name: path.name },
                        }"
                      >
                        {{ path.name }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          id: 1,
          title: "Informations",
          links: [
            { id: 1, name: "Policy-For-Buyers" },
            { id: 2, name: "Policy-For-Sellers" },
            { id: 3, name: "Terms-And-Conditions" },
            { id: 4, name: "Shipping-&-Refund" },
            { id: 5, name: "Wholesale-Policy" },
          ],
        },
        {
          id: 2,
          title: "About us",
          links: [
            { id: 6, name: "About-us" },
            { id: 7, name: "Delivery-Information" },
            { id: 8, name: "Privacy-Policy" },
            { id: 9, name: "Terms-and-Conditions" },
            { id: 10, name: "Search" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-middle {
  padding-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #394553;
  .container {
    .small-screens {
      display: none;
    }
    @media (max-width: 991px) {
      .large-screens {
        display: none;
      }
      .small-screens {
        display: block;
        button {
          width: 100%;
        }
        ul {
          width: 100%;
        }
      }
    }
    .mail {
      &:hover {
        color: white;
      }
    }
    .accordion-middle {
      display: flex;
      .col {
        flex: 1;
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
              background: var(--bg-color);
              font-weight: bold;
              cursor: pointer;
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
              padding: 10px 10px 0;
              font-weight: 400;
            }
            .tab-content {
              padding: 0 10px;
            }
            input:checked {
              + .tab-label {
                &::after {
                  transform: rotate(90deg);
                }
              }
              ~ .tab-content {
                max-height: 100vh;
                background: var(--bg-color);
              }
            }
          }
        }
      }
    }
  }
  .social {
    margin-top: 15px;
    a {
      margin-right: 10px;
      font-size: 22px;
      &:hover {
        i {
          color: var(--yellow);
        }
      }
    }
  }
  h2 {
    font-size: 18px;
  }
  p {
    color: #b2b2b2;
    line-height: 2;
    margin-top: 14px;
  }
  a {
    color: #b2b2b2;
  }
  span {
    color: #b2b2b2;
    margin-top: 10px;
    font-size: 20px;
  }
  ul {
    li {
      margin: 14px 0;
      cursor: pointer;
      color: #b2b2b2;
      width: fit-content;
      &:hover {
        a {
          color: white;
        }
      }
      a {
        color: #b2b2b2;
      }
    }
  }
}
</style>
