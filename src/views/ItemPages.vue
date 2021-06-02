<template>
  <div>
    <DetailCard />
  </div>
</template>

<script>
import DetailCard from "../components/DetailCard.vue";

export default {
  name: "itemDetail",
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
