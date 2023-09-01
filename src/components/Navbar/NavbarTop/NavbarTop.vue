<template>
  <div class="navbar-top flex-center">
    <p>
      Limited-time offers: Mid-summer season sale on selected items -
      <span>SHOP NOW</span>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.navbar-top {
  background-color: var(--bg-color);
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  border-bottom: 1px solid #344456;
  p {
    font-size: 13px;
    color: white;
    font-weight: 400;
    letter-spacing: 0.5555px;
    padding: 7px;
    position: relative;
    margin: 0;
    width: fit-content;
    span {
      color: var(--yellow);
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
