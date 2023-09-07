<template>
  <div class="dropdown">
    <button
      class="btn btn-primary collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="true"
      aria-controls="collapseExample"
    >
      SHOP BY CATAGORIES <i class="fa-solid fa-angle-up arrow-up"></i>
    </button>
    <div
      :class="`${
        this.$route.name == 'blog' || this.$route.name == 'blog-page'
          ? 'collapse holder'
          : 'collapse show holder'
      }`"
      id="collapseExample"
    >
      <div class="card card-body">
        <ul>
          <li><a>Smart Items</a></li>
          <li><a>Smart Watches</a></li>
          <li><a>IPAD Accessories</a></li>
          <li><a>Mircophone</a></li>
          <li><a>Wireless Printer</a></li>
          <li><a>Video Games</a></li>
          <li><a>Polaroid Camera</a></li>
          <li><a>Air Purifier</a></li>
          <li><a>Control Speakers</a></li>
          <li><a>Headset</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {};
$(() => {
  $(".dropdown button").on("click", () => {
    $("button i").toggleClass("arrow-up");
  });
});
</script>

<style lang="scss" scoped>
.dropdown {
  button {
    width: 100%;
    font-size: 14px;
    color: black;
    background-color: var(--yellow);
    border: none;
    margin-top: -73px;
    padding: 15px;
    font-weight: 500;
    border-radius: 6px 6px 0 0;
    i {
      margin-left: 10px;
      transition: 0.3s;
      &.arrow-up {
        transform: rotate(180deg);
      }
    }
    &:hover {
      background-color: var(--yellow);
    }
  }
  .holder {
    transition: 0.8s;

    border-radius: 0 0 10px 10px;
    background-color: white;
    .card-body {
      margin-top: -20px;
      margin-bottom: 25px;
      border: none;
      padding: 20px 30px;
      ul {
        li {
          padding: 10px 0;
          border-bottom: 1px solid #d9d9d9;
          cursor: pointer;
          &:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          &:hover {
            a {
              color: var(--yellow);
            }
          }
          a {
            color: #4c4c4c;
          }
        }
      }
    }
  }
  @media (max-width: 1199px) {
    button {
      margin-top: 0;
      border-radius: 0;
    }
    .holder {
      .card-body {
        margin-top: 0;
      }
    }
  }
}
</style>
