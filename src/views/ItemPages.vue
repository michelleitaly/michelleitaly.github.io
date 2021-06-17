<template>
  <div>
    <div>
      <DetailCard />
    </div>
    <div>you might also like</div>
    <div></div>
  </div>
</template>

<script>
import DetailCard from "../components/DetailCard.vue";

export default {
  name: "ItemPages",
  components: {
    DetailCard
  },
  data() {
    return {
      imageUrls: [
        "Artgrab_Square 2_ins.jpg",
        "Artgrab-Just do it-2.jpg",
        "Artgrab-unicorn_stairs-ins.jpg",
        "Artgrab-Pyramid in the sky-ins.jpg"
      ]
    };
  }
};
</script>

<style scoped lang="scss"></style>
