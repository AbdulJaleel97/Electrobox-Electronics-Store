<template>
  <div class="contact">
    <h2>Share your thoughts with us.</h2>
    <div class="contact-form row">
      <div class="form col-md-6">
        <h4>Contact Us</h4>
        <form>
          <div class="form-floating">
            <input class="form-control" type="text" placeholder=" " required />
            <label>Name</label>
          </div>
          <div class="form-floating">
            <input class="form-control" type="email" placeholder=" " required />
            <label>Email</label>
          </div>
          <div class="form-floating">
            <input
              class="form-control"
              type="number"
              placeholder=" "
              required
            />
            <label>Phone Number</label>
          </div>
          <div class="form-floating">
            <textarea
              class="form-control"
              type="number"
              placeholder=" "
              required
            ></textarea>
            <label>Comment</label>
          </div>
          <button>SEND</button>
        </form>
      </div>
      <div class="location col-md-6">
        <h4>Get in touch with us</h4>
        <ul>
          <li>
            <i class="fa-solid fa-house"></i>33 New Montgomery St. Ste 750 San
            Francisco, CA, USA 94105
          </li>
          <li><i class="fa-solid fa-phone"></i>(+99) 0123-456-789</li>
          <li>
            <i class="fa-solid fa-envelope"></i>AbdulJaleelSaeed1997@gmail.com
          </li>
          <li><i class="fa-solid fa-clock"></i>Monday – Friday 10 AM – 8 PM</li>
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
.contact {
  flex: 1;
  padding: 30px 15px;
  width: 80%;
  @media (max-width: 1199px) {
    & {
      width: 100%;
      padding: 30px 0;
    }
  }
  h2 {
    font-size: 20px;
  }
  .contact-form {
    padding-top: 40px;
    h4 {
      margin-bottom: 25px;
    }
    .form {
      .form-floating {
        .form-control {
          height: 44px;
          margin-bottom: 25px;
          &:focus {
            border-color: #ced4da;
            box-shadow: none;
          }
        }
        label {
          color: grey;
          padding: 10px;
        }
      }
      button {
        border: none;
        background-color: var(--yellow);
        padding: 10px 25px;
        border-radius: 6px;
        font-weight: 500;
      }
    }
    .location {
      padding-left: 60px;
      ul {
        li {
          margin-bottom: 25px;
          i {
            margin-right: 15px;
          }
        }
      }
      @media (max-width: 767px) {
        padding-top: 40px;
        padding-left: 12px;
      }
    }
  }
  @media (max-width: 767px) {
    & .container {
      max-width: 100%;
    }
  }
  @media (max-width: 1199px) {
    & {
      .container {
        flex-direction: column-reverse;
        padding: 0 12px;
      }
    }
  }
}
</style>
