<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Collage artist
    </p>
    <div class="grid">
      <div v-for="n in 8" :key="n" class="bigContainer">
        <div class="imgContainer"></div>
        <div class="textContainer">ciao</div>
      </div>
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
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
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
.grid {
  display: grid;
  grid-template-columns: 106px 106px 106px 106px;
  grid-template-rows: 300px 300px 300px 300px;
  column-gap: 10px;
  row-gap: 15px;
  justify-content: center;
}
.imgContainer {
  height: 250px;
  width: 100px;
  background: rgb(184, 98, 49);
  border: 3px solid rgb(12, 110, 86);
}
</style>
