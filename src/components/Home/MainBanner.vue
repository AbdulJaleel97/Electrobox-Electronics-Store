<template>
  <div class="banners">
    <!-- Main Banner -->
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-touch="true"
      data-interval="5000"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/main-banner1.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption animate__animated animate__fadeInDown">
            <h5>Limited Offer 50% Off</h5>
            <h1>Playing Video Games</h1>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/main-banner2.png"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="carousel-caption animate__animated animate__fadeInDown"
            style="color: #223040"
          >
            <h5>Limited Offer 50% Off</h5>
            <h1>New Wireless Speaker</h1>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev hover-btn"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button
        class="carousel-control-next hover-btn"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
    <!-- Two Banners -->
    <div class="extra-banner">
      <div class="row">
        <div class="col-md-6">
          <div class="extra">
            <div class="extra-inner">
              <div class="extra-item">
                <img
                  src="@/assets/extra-banner1.png"
                  class="d-block w-100"
                  alt="Sale!"
                />
                <div class="extra-caption" style="color: #223040">
                  <h5>Extra 30% Off</h5>
                  <h1>Prolet designed for Airpods</h1>
                  <button style="color: #223040">SHOP NOW</button>
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
                  src="@/assets/extra-banner2.png"
                  class="d-block w-100"
                  alt="Sale!"
                />
                <div class="extra-caption" style="color: white">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banners {
  .carousel {
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
    &:hover {
      .hover-btn {
        margin: 0 20px;
        opacity: 1;
      }
    }
    .carousel-caption {
      position: absolute;
      width: 40%;
      height: 50%;
      left: 60%;
      transform: translateY(-50%);
      text-align: left;
      padding: 0;
      font-family: "jost", sans-serif;
      top: 20%;
      animation-delay: 0.3s;
      button {
        background-color: var(--yellow);
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
      }
      h5 {
        margin-bottom: 0;
      }
      h1 {
        margin: 20px 0;
        font-size: 50px;
      }
    }
    .carousel-indicators {
      margin: 0;
      button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        &.active {
          background-color: var(--yellow);
        }
      }
    }
    .carousel-control-next,
    .carousel-control-prev {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--yellow);
      border-radius: 50%;
      color: #223040 !important;
      width: 40px;
      height: 40px;
      opacity: 0;
      margin: 0;
      transition: 0.3s;
    }
    @media (max-width: 991px) {
      .carousel-caption {
        h5 {
          font-size: 20px;
        }
        h1 {
          font-size: 40px;
        }
      }
      .hover-btn {
        display: none;
      }
    }
    @media (max-width: 767px) {
      .carousel-caption {
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
      .carousel-caption {
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
      .carousel-caption {
        top: 15%;
        h5 {
          font-size: 12px;
          margin-bottom: 10px;
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
          margin-top: 10px;
        }
      }
      .carousel-indicators {
        button {
          width: 7px;
          height: 7px;
        }
      }
    }
    @media (max-width: 320px) {
      .carousel-caption {
        top: 5%;
        h5 {
          font-size: 12px;
          margin: 0;
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
          margin: 0;
        }
      }
    }
  }
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
}
</style>
