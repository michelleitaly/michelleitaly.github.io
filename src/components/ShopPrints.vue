<template>
  <div class="card">
    <a target="_blank" href="../assets/Artgrab-Just do it-2.jpg">
      <img :src="require('@/assets/' + imgPrintsSrc)" alt="prints art" />
    </a>
    <div class="desc">Add a description of the image here</div>
    <div class="productPrice">15€</div>
  </div>
</template>

<script>
export default {
  name: "ShopPrints",
  props: {
    imgPrintsSrc: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.card:hover {
  cursor: pointer;
}

div.card img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
  border: 0;
}
</style>
