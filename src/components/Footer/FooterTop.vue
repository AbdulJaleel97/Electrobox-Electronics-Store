<template>
  <div class="footer-top">
    <div class="container">
      <div class="subscribe">
        <h4>Get Our Latest Update!</h4>
        <p>Join Our Newsletter And Get $10 Discount</p>
        <div class="form-floating">
          <input class="form-control" type="email" placeholder=" " />
          <label>Email</label>
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div class="download-app">
        <div class="text">
          <h5>Download Our App</h5>
          <p>15% Discount on your first purchase.</p>
        </div>
        <div class="stores">
          <img src="@/assets/footer-gplay.png" alt="" />
          <img src="@/assets/footer-appstore.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer-top {
  border-bottom: 1px solid #394553;
  padding-bottom: 50px;
  padding-top: 30px;
  .container {
    display: flex;
    .subscribe {
      flex: 1;
      .form-floating {
        color: var(--bg-color);
        display: flex;
        .form-control {
          width: 70%;
          height: 44px;
          margin-right: 10px;
          &:focus {
            border-color: #ced4da;
            box-shadow: none;
          }
        }
        label {
          color: grey;
          padding: 10px;
        }
        button {
          border: none;
          background-color: var(--yellow);
          border-radius: 6px;
          font-weight: 500;
          padding: 0 20px;
        }
      }
    }
    .download-app {
      text-align: center;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2e3f54;
      border-radius: 6px;
      font-weight: 400;
      padding: 20px;
      @media (max-width: 1199px) {
        margin-top: 30px;
      }
      .text {
        margin-right: 30px;
      }
      .stores {
        display: flex;
        img {
          margin-right: 15px;
          margin-bottom: 15px;
        }
        @media (max-width: 400px) {
          flex-direction: column;
          & {
            img {
              margin: 0 0 15px 0;
            }
            .text {
              margin: 0;
            }
          }
        }
      }
    }
    @media (max-width: 1199px) {
      & {
        flex-direction: column;
        .download-app {
          flex-direction: column;
          .text {
            margin: 0;
            @media (max-width: 400px) {
              flex-direction: column;
              & {
                img {
                  margin: 15px 0 !important;
                }
                .text {
                  margin: 0;
                }
              }
            }
          }
        }
        .subscribe {
          .form-floating {
            input {
              flex: 1;
            }
          }
        }
      }
    }
  }
}
</style>
