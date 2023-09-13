<template>
  <div class="not-found">
    <h2 class="text-center">Where are you going?</h2>
    <h2 class="text-center">
      This Url doesn't Exist.
      <router-link
        style="
          color: var(--bg-color);
          text-decoration: underline;
          font-size: 16px;
        "
        to="/"
        >Go Back</router-link
      >
    </h2>
    <div class="img w-100 text-center mt-5 mb-5">
      <img
        style="max-width: 100%"
        src="@/assets/not-found.gif"
        alt="404PageNotFound"
      />
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
.not-found {
  flex: 1;
  padding: 30px 15px;
  @media (max-width: 1199px) {
    width: 100%;
    padding: 30px 0;
  }
  h2 {
    font-size: 20px;
  }
}
</style>
