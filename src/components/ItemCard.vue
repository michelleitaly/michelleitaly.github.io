<template>
  <div class="card">
    <router-link to="/itemDetail" target="_blank" class="itemLink">
      <a target="_blank" href="../assets/Artgrab-Just do it-2.jpg">
        <img :src="require('@/assets/' + imgSrc)" alt="album art 2" />
      </a>
      <div class="desc">Add a description of the image here</div>
      <div class="productPrice">15€</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    imgSrc: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.itemLink {
  text-decoration-line: none;
  color: black;
  .desc {
    padding: 15px;
    text-align: center;
    border: 0;
  }
}
.card:hover {
  cursor: pointer;
}

.card img {
  width: 100%;
  height: auto;
}
</style>
