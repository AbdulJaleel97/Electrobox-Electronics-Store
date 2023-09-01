<template>
  <div class="features">
    <div>
      <div>
        <img src="@/assets/cart.png" alt="" />
      </div>
      <div class="text">
        <h5>Fast Delivery</h5>
        <p>Our Fast Delivery Service</p>
      </div>
    </div>
    <div>
      <div>
        <img src="@/assets/support.png" alt="" />
      </div>
      <div class="text">
        <h5>24/7 Call support</h5>
        <p>Fast Customer Service Contact</p>
      </div>
    </div>
    <div>
      <div>
        <img src="@/assets/quality.png" alt="" />
      </div>
      <div class="text">
        <h5>Quality Products</h5>
        <p>The Finest Quality in our Field</p>
      </div>
    </div>
    <div>
      <div>
        <img src="@/assets/offers.png" alt="" />
      </div>
      <div class="text">
        <h5>Up to 50% Off</h5>
        <p>Enjoy Our Amazing Sales!</p>
      </div>
    </div>
    <div>
      <div>
        <img src="@/assets/products.png" alt="" />
      </div>
      <div class="text">
        <h5>Best Satisfaction</h5>
        <p>Satisfaction is Guaranteed</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.features {
  margin: 20px 0;
  background-color: white;
  padding: 10px;
  > div {
    padding: 30px 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    border-bottom: 1px solid #00000073;
    cursor: pointer;
    &:last-child {
      border-bottom: none;
    }
    p {
      margin-bottom: 0;
    }
    img {
      margin-right: 10px;
    }
  }
}
</style>
