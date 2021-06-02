<template>
  <div class="hello">
    <div id="banner">
      <button class="bannerButton">
        <router-link to="/PrintsPages" target="_blank" class="rounterLink">
          SHOP PRINTS
        </router-link>
      </button>
    </div>
    <h1>ALI DEL SOGNO</h1>
    <p>Collage artist</p>
    <div class="gallery">
      <ItemCard :key="url" v-for="url in imageUrls" :imgSrc="url" />
    </div>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a
          href="https://www.instagram.com/milliondreams.jpg/"
          target="_blank"
          rel="noopener"
          >Instagram</a
        >
      </li>
    </ul>

    <footer>
      <small>Copyright &copy; 2021 DAYDREAM, All Rights Reserved </small>
    </footer>
  </div>
</template>

<script>
import ItemCard from "../components/ItemCard.vue";

export default {
  name: "Homepage",
  components: {
    ItemCard
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* The navbar container */

#banner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1300px;
  background-image: url("../assets/Artgrab-black unicorn-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
  margin: 0 auto;
  @media (max-width: 800px) {
    height: 250px;
  }
  .bannerButton {
    background-color: black;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-color: rgb(110, 110, 110);
    }

    .rounterLink {
      color: aliceblue;
      text-decoration-line: none;
    }
  }
  /*.bannerButton:hover {
    background-color: rgb(82, 82, 82);
  }*/
}
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Navbar links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Links - change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
div.gallery {
  padding: 50px;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-gap: 3rem;
}

@media (min-width: 0px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

h3 {
  display: block;
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
footer {
  position: fixed;
  bottom: 40px;
  left: 35%;
}
</style>
