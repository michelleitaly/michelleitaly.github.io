<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Collage artist
    </p>
    <div class="gallery">

    <div class="card">
      <a target="_blank" href="../assets/Artgrab_Square 2_ins.jpg">
        <img
          src="../assets/Artgrab_Square 2_ins.jpg"
          alt="album art 1"
          width="1200"
          height="1200"
        />
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>

    <div class="card">
      <a target="_blank" href="../assets/Artgrab-Just do it-2.jpg">
        <img src="../assets/Artgrab-Just do it-2.jpg" alt="album art 2" />
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>

    <div class="card">
      <a target="_blank" href="../assets/Artgrab-unicorn_stairs-ins.jpg">
        <img
          src="../assets/Artgrab-unicorn_stairs-ins.jpg"
          alt="album art 3"
          width="1200"
          height="1200"
        />
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>

    <div class="card">
      <a target="_blank" href="../assets/Artgrab-Pyramid in the sky-ins.jpg">
        <img
          src="../assets/Artgrab-Pyramid in the sky-ins.jpg"
          alt="album art 4"
          width="1200"
          height="1200"
        />
      </a>
      <div class="desc">Add a description of the image here</div>
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
/* The navbar container */
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
/*.box1 {
  width: 800px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
 
} */
.box1 {
  width: 800px;
  border: 10px solid #777;
  padding: 50px;
  margin: 50px auto;
  height: 10px;
  background-color: black;
}

div.card:hover {
  border: 1px solid #777;
}

div.card img {
  width: 100%;
  height: auto;
}

div.desc {
  padding: 15px;
  text-align: center;
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
