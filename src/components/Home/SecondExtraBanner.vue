<template>
  <div class="extra-banner">
    <div class="row">
      <div class="col-md-6">
        <div class="extra">
          <div class="extra-inner">
            <div class="extra-item">
              <img
                src="@/assets/second-extra-banner-1.png"
                class="d-block w-100"
                alt="Sale!"
              />
              <div
                class="extra-caption animate__animated animate__fadeIn"
                style="color: white"
              >
                <h5>Extra 30% Off</h5>
                <h1>Prolet designed for Airpods</h1>
                <button style="color: white">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 second">
        <div class="extra">
          <div class="extra-inner">
            <div class="extra-item">
              <img
                src="@/assets/second-extra-banner-2.png"
                class="d-block w-100"
                alt="Sale!"
              />
              <div
                class="extra-caption animate__animated animate__fadeIn"
                style="color: white"
              >
                <h5>Extra 30% Off</h5>
                <h1>EasySkinz XBOX Series X</h1>
                <button style="color: white">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {};
</script>

<style lang="scss" scoped>
.extra-banner {
  .extra {
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    img {
      transition: 0.3s;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
    .extra-caption {
      position: absolute;
      width: 50%;
      height: 50%;
      left: 53%;
      text-align: left;
      padding: 0;
      font-family: "jost", sans-serif;
      top: -50%;
      animation-delay: 0.3s;
      button {
        background-color: transparent;
        border: none;
        border-radius: 6px;
        text-decoration: underline;
      }
      h5 {
        margin-bottom: 0;
      }
      h1 {
        font-size: 25px;
        margin: 0;
      }
    }
    @media (min-width: 1400px) {
      .extra-caption {
        top: 23% !important;
        h5 {
          font-size: 15px;
          margin-bottom: 10px;
        }
        h1 {
          font-size: 28px;
          margin: 0;
        }
        button {
          margin-top: 10px;
        }
      }
    }
    @media (min-width: 1199px) {
      .extra-caption {
        top: 15%;
        h5 {
          font-size: 15px;
          margin-bottom: 10px;
        }
        h1 {
          font-size: 26px;
        }
        button {
          margin-top: 10px;
        }
      }
    }
    @media (max-width: 1199px) {
      .extra-caption {
        top: 20%;
        h5 {
          font-size: 15px;
          margin-bottom: 10px;
        }
        h1 {
          font-size: 24px;
        }
        button {
          margin-top: 10px;
        }
      }
    }
    @media (max-width: 991px) {
      .extra-caption {
        top: 15%;
        h5 {
          font-size: 15px;
          margin-bottom: 10px;
        }
        h1 {
          font-size: 21px;
        }
        button {
          margin-top: 10px;
        }
      }
    }
    @media (max-width: 767px) {
      .extra-caption {
        top: 10%;
        h5 {
          font-size: 15px;
        }
        h1 {
          font-size: 30px;
          margin: 10px 0;
        }
        button {
          padding: 7px 15px;
        }
      }
    }
    @media (max-width: 530px) {
      .extra-caption {
        top: 10%;
        padding-right: 20px;
        h5 {
          font-size: 15px;
        }
        h1 {
          font-size: 22px;
        }
        button {
          padding: 7px 15px;
        }
      }
    }
    @media (max-width: 420px) {
      .extra-caption {
        top: 15%;
        h5 {
          font-size: 12px;
        }
        h1 {
          font-size: 16px;
          margin: 3px 0;
        }
        button {
          padding: 0;
          background-color: transparent;
          color: var(--yellow);
          text-decoration: underline;
          font-size: 12px;
        }
      }
    }
    @media (max-width: 320px) {
      .extra-caption {
        top: 5%;
        h5 {
          font-size: 12px;
        }
        h1 {
          font-size: 14px;
          margin: 3px 0;
        }
        button {
          padding: 0;
          background-color: transparent;
          color: var(--yellow);
          text-decoration: underline;
          font-size: 12px;
        }
      }
    }
  }
  .second {
    @media (max-width: 767px) {
      margin: 30px 0;
    }
  }
}
</style>
