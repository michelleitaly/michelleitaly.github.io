<template>
  <div class="itemWrapper">
    <div class="imgWrapper">
      <img class="showPointer" :src="imgCart" alt="imgCart" />
    </div>
    <div class="productInfo">
      <div class="editWrapper">
        <span class="discPrice">15€</span>
        <span class="origPrice">20€</span>
        <img class="edit showPointer" src="../assets/pen.png" alt="edit" />
        <img
          class="delete showPointer"
          src="../assets/delete.png"
          alt="delete"
        />
      </div>
      <div class="productDesc showPointer">Top</div>
      <div class="productSize showPointer">Small</div>
    </div>
    <div class="promoWrapper showPointer">
      <div>
        Promotional code
      </div>
      <div>Add</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    imgCart: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
