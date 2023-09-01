<template>
  <div
    class="hidden-search"
    v-if="showSearch"
    ref="modal"
    v-click-outside="closeModal"
  >
    <div class="container">
      <div class="search-content">
        <form>
          <div class="form-floating">
            <input
              class="form-control"
              type="search"
              placeholder=" "
              required
            />
            <label>Search</label>
          </div>
        </form>
        <button @click="closeModal" class="close-search">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSearch: {
      type: Boolean,
    },
  },
  directives: {
    "click-outside": {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          // Check if the clicked element is a child of the element we want to keep open
          if (el.contains(event.target)) {
            return false;
          }
          // Check if an expression was passed to the directive
          if (binding.expression) {
            vnode.context[binding.expression]();
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
  // methods: {
  //   closeModal() {
  //     this.showSearch = false;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.hidden-search {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #2e3f54;
  z-index: 987987;
  color: var(--bg-color);
  .container {
    width: 100%;
    height: 100%;
    .search-content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      form {
        width: 70%;
        margin-right: 15px;
        .form-floating {
          .form-control {
            height: 44px;
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
      }
      .close-search {
        font-size: 24px;
        color: white;
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
        i {
          pointer-events: none;
        }
      }
    }
  }
}
</style>
