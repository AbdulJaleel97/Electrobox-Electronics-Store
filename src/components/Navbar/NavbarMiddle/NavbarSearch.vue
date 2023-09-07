<template>
  <div class="search-input">
    <input type="text" placeholder="Search for product.." />
    <button>Search</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  justify-content: center;
  gap: 10px;
  input {
    padding: 8px;
    outline: none;
    border-radius: 6px;
    border: 1px solid var(--yellow);
    width: 70%;
    &::placeholder {
      font-size: small;
    }
  }
  button {
    padding: 5px 15px;
    border: 1px solid var(--yellow);
    border-radius: 6px;
    background-color: var(--yellow);
  }
  @media (min-width: 1199px) {
    flex: 1;
  }
  @media (max-width: 1199px) {
    display: none;
  }
}
</style>
