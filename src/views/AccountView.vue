<template>
  <div class="account">
    <h2>Profile Page</h2>
    <div class="login">
      <h4>Login</h4>
      <form>
        <div class="form-floating first">
          <input class="form-control" type="email" placeholder=" " required />
          <label>Email</label>
        </div>
        <div class="form-floating">
          <input
            class="form-control"
            type="password"
            placeholder=" "
            required
          />
          <label>Password</label>
        </div>
        <span class="forgot-pw">Forgot Password?</span>
        <input class="submit" type="submit" value="LOGIN" />
        <p class="create-acc">
          Don't have an account? <span class="sign-up">Sign up</span>
        </p>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.account {
  flex: 1;
  padding: 30px 15px;
  @media (max-width: 1199px) {
    width: 100%;
    padding: 30px 0;
  }
  h2 {
    font-size: 24px;
  }
  .login {
    max-width: 55%;
    margin: 50px auto;
    background-color: white;
    padding: 30px;
    border-radius: 6px;
    @media (max-width: 1199px) {
      max-width: 100%;
    }
    h4 {
      text-align: center;
      font-size: 22px;
    }
    .form-floating {
      &.first {
        margin-bottom: 25px;
      }
      .form-control {
        height: 44px;
        background-color: rgb(232, 240, 254);
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
    .forgot-pw {
      cursor: pointer;
      margin-top: 10px;
      display: inline-block;
      &:hover {
        color: var(--yellow);
      }
    }
    .submit {
      display: block;
      margin: auto;
      margin-top: 25px;
      border: none;
      padding: 15px 20px;
      border-radius: 6px;
      background-color: rgb(232, 240, 254);
      transition: 0.3s;
      &:hover {
        background-color: var(--yellow);
      }
    }
    .create-acc {
      margin-top: 15px;
      margin-bottom: 0;
      text-align: center;
      span {
        cursor: pointer;
        &:hover {
          color: var(--yellow);
        }
      }
    }
  }
  @media (max-width: 1199px) {
    flex-direction: column-reverse;
    padding: 30px 0;
  }
}
</style>
