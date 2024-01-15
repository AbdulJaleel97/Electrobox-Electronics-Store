<template>
  <div class="delivery">
    <h2>{{ title }}</h2>
    <div class="content">
      <div class="item">
        <h4>The standard Lorem Ipsum passage</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          accumsan turpis posuere cursus ultricies. Ut nunc justo, faucibus eget
          elit quis, vehicula rhoncus nulla. Phasellus convallis sem nec
          facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet sed
          massa in vulputate. Quisque gravida suscipit tincidut.
        </p>
      </div>
      <div class="item">
        <h4>At vero eos et accusamus et iusto odio dignissimos</h4>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes.
        </p>
      </div>
      <div class="item">
        <h4>
          Certain circumstances and owing to the claims of duty or the
          obligations
        </h4>
        <p>
          Mauris elementum scelerisque elit non egestas. Cras lacus nibh,
          pretium quis bibendum nec, dapibus a metus. Morbi eros lectus, aliquam
          eu aliquam id, fringilla nec eros. Praesent suscipit commodo diam, non
          viverra turpis dapibus malesuada. Duis cursus metus eu sem eleifend,
          id rhoncus odio porttitor.
        </p>
      </div>
      <div class="item">
        <h4>The standard Lorem Ipsum passage</h4>
        <p>
          Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Mauris suscipit dolor
          scelerisque, bibendum tellus ac, pharetra sapien. Praesent lacinia
          scelerisque odio et consequat. In a facilisis lacus. Maecenas vel
          lobortis tellus.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      footerLinks: [
        { name: "Policy-For-Buyers" },
        { name: "Policy-For-Sellers" },
        { name: "Terms-And-Conditions" },
        { name: "Shipping-&-Refund" },
        { name: "Wholesale-Policy" },
        { name: "About-us" },
        { name: "Delivery-Information" },
        { name: "Privacy-Policy" },
        { name: "Terms-and-Conditions" },
        { name: "Search" },
      ],
      title: "",
    };
  },
  mounted() {
    this.title = this.$route.params.name.replaceAll("-", " ");
    console.log(this.$route);
  },
  watch: {
    $route: {
      handler() {
        this.title = this.$route.params.name.replaceAll("-", " ");
      },
    },
  },
};
$(() => {
  $(".dropdown button").on("click", () => {
    $("button i").toggleClass("arrow-up");
  });
});
</script>

<style lang="scss" scoped>
.delivery {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  flex: 1;
  padding: 30px 15px;
  @media (max-width: 1199px) {
    padding: 30px 0;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 60px;
  }
  .content {
    .item {
      h4 {
        font-weight: 400;
        margin: 25px 0;
        font-size: 19px;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>
