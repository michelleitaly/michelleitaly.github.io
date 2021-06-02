<template>
  <div class="printsPage">
    <ShopPrints
      :key="urlPrints"
      v-for="urlPrints in imagePrints"
      :imgPrintsSrc="urlPrints"
    />
  </div>
</template>

<script>
import ShopPrints from "../components/ShopPrints.vue";

export default {
  name: "printsPage",
  components: {
    ShopPrints
  },
  data() {
    return {
      imagePrints: [
        "Daydream III-ins.jpg",
        "Daydream II-ins .jpg",
        "Daydream I-ins.jpg",
        "Daydream VII-ins.jpg",
        "Daydream VI-ins.jpg",
        "Daydream V-ins .jpg",
        "Deer-ins.jpg",
        "dont worry be happy (ins).jpg",
        "Holiday memory-1-ins.jpg",
        "Home, Sweet home-ins.jpg",
        "right place, right time- ins.jpg",
        "sunflowers_ins.jpg",
        "THE MOON REPRESENTS MY HEART-ins.jpg",
        "Artgrab-chaderlier_ins.jpg",
        "Artgrab-japanese-ins.jpg",
        "Artgrab-Japanese sign_ins.jpg",
        "Artgrab-Japanese sign_ins.jpg",
        "Artgrab-ball-2-ins.jpg",
        "Artgrab-tiger-ins.jpg",
        "Artgrab-unicorn zebra-ins.jpg"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.printsPage {
  padding: 20px;
  max-width: 1500px;
  margin: auto;
  display: grid;
  grid-gap: 3rem;
}

@media (min-width: 0px) {
  .printsPage {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 900px) {
  .printsPage {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
