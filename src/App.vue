<template>
  <div id="app">
    <div id="banner">
      <button class="bannerButton">SHOP PRINTS</button>
    </div>
    <HelloWorld msg="DayDream" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#banner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1300px;
  background-image: url("./assets/Artgrab-black unicorn-banner.jpg");
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
    color: blanchedalmond;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-color: rgb(110, 110, 110);
    }
  }
  /*.bannerButton:hover {
    background-color: rgb(82, 82, 82);
  }*/ 
}
</style>
