<template>
  <div class="our-exp">
    <div class="card">
      <img
        src="@/assets/our-exp.jpg"
        class="card-img-top"
        alt="Our Experience"
      />
      <div class="card-body">
        <div class="text">
          <h5>Awesome Experience With Our Company</h5>
          <ul>
            <li>
              <i class="fa-solid fa-circle-check fa-lg"></i>Working with Pro
              Coders around the globe
            </li>
            <li>
              <i class="fa-solid fa-circle-check fa-lg"></i>
              Deliver the best User interface in a short time with quality code
            </li>
          </ul>
        </div>
        <a href="#" class="btn">READ MORE</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.our-exp {
  background-color: white;
  border-radius: 6px;
  .card {
    border: none;
    img {
      border-radius: 6px 6px 0 0;
    }
    .card-body {
      h5 {
        font-weight: 400;
      }
      ul {
        padding: 15px;
        li {
          position: relative;
          padding: 15px;
          i {
            position: absolute;
            left: -12px;
            top: 25px;
            color: var(--bg-color);
          }
        }
      }
      a {
        background-color: var(--yellow);
      }
    }
  }
  @media (max-width: 1199px) {
    .card {
      img {
        border-radius: 0;
      }
    }
  }
}
</style>
