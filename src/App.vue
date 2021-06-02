<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/test">Test</router-link>
    </div> -->
    <div v-if="showSearch" class="outerBlank">
      <div class="searchWrap">
        <input class="inputSearch" type="text" placeholder="Search" />
        <img
          class="showPointer"
          src="./assets/search.png"
          alt="search"
          width="20"
          height="20"
        />
      </div>
      <img
        class="showPointer"
        v-on:click="closeSearch"
        src="./assets/cancel.png"
        alt="cancel"
        width="20"
        height="20"
      />
    </div>
    <div v-if="showBag" class="outerBag">
      <div class="cartTitle">MY BAG ({{ n }})</div>
      <div class="itemWrapper">
        <div class="imgWrapper">
          <img :src="imgCart" alt="imgCart" />
        </div>
        <div class="productInfo">
          <div class="editWrapper">
            <span class="discPrice">15€</span>
            <span class="origPrice">20€</span>
            <img class="edit" src="./assets/pen.png" alt="edit" />
            <img class="delete" src="./assets/delete.png" alt="delete" />
          </div>
          <div class="productDesc">Top</div>
          <div class="productSize">Small</div>
        </div>
      </div>
      <div class="promoWrapper">
        <div>
          Promotional code
        </div>
        <div>Add</div>
      </div>
      <div class="totalWrapper">
        <div>Total <span>(VAT included)</span></div>

        <div class="totPrice">
          15€
        </div>
      </div>
      <button class="orderButton">PROCESS ORDER</button>
    </div>

    <div id="navigationbar">
      <div>
        <a target="_blank" href="/">
          <img src="./assets/Logo.png" alt="logo" width="100" height="100" />
        </a>
      </div>
      <ul>
        <li>
          <router-link to="/PrintsPages" target="_blank"
            >SHOP PRINTS</router-link
          >
        </li>
        <li><a href="#news">COVER ART</a></li>
        <li><a href="#contact">GALLERY</a></li>
        <li><a href="#about">INFO&FAQS</a></li>
      </ul>
      <div class="icons">
        <img
          v-on:click="openSearch"
          src="./assets/search.png"
          alt="search"
          class="navbarSearch showPointer"
        />
        <img
          class="showPointer navbarBag"
          v-on:click="openBag"
          src="./assets/bag.png"
          alt="bag"
        />
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      showSearch: false,
      showBag: false,
      textSearch: "",
      n: 0,
      imgCart: ""
    };
  },
  methods: {
    openSearch() {
      this.showSearch = true;
      console.log("clicked", this.showSearch);
    },

    closeSearch() {
      this.showSearch = false;
      console.log("closed", this.showSearch);
    },
    openBag() {
      this.showBag = true;
      console.log("clicked", this.showBag);
    },
    closeBag() {
      this.showBag = false;
      console.log("closed", this.showBag);
    }
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
}
.outerBag {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 999;
  height: 100%;
  top: 0;
  right: 0;
  width: 300px;
  background: white;
  margin-bottom: 150px;
  padding-left: 20px;
  .itemsContainer {
    flex-grow: 1;
    overflow: hidden;
    overflow-y: scroll;
  }
}
.closeBag {
  position: absolute;
  top: 10px;
  right: 24px;
}
.cartTitle {
  padding-top: 40px;
  font-size: 25px;
  font-weight: bold;
  height: 100px;
  text-align: left;
}
.itemWrapper {
  background-color: red;
  height: 500px;
  overflow-y: auto;
  .editwrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .discPrice {
    color: rgb(226, 82, 63);
    font-weight: bold;
  }
  .origPrice {
    text-decoration-line: line-through;
  }
  .edit {
    width: 20px;
    height: 20px;
  }
  .delete {
    width: 20px;
    height: 20px;
  }
  .promoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
}

.totalWrapper {
  // position: absolut./views/Homepage.vue
  // bottom: 0;
  width: 100%;
  height: 150px;
  background: #fff;

  font-weight: bold;
  font-size: 25px;
  .orderButton {
    background-color: rgb(44, 189, 100);
    width: 80%;
    height: 40px;
    border: 0;
    border-radius: 5px;

    color: honeydew;
  }
}
.showPointer {
  cursor: pointer;
}
.outerBlank {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  height: 200px;
  top: 0;
  width: 100%;
  background: white;

  .searchWrap {
    display: flex;
    flex-basis: 70%;
    justify-content: center;
    align-items: center;
    border: 2px solid;
    height: 40px;
    margin-right: 10px;
    padding: 0 10px;

    .inputSearch {
      width: 100%;
      height: 80%;
      border: 0px;
      margin-right: 10px;
      font-size: 1.2rem;
      outline: none;
    }
  }
}
#navigationbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  .navbarSearch {
    width: 20px;
    height: 20px;
  }
  .navbarBag {
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }
}
.icons {
  width: 100px;
}
#navigationbar ul {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
}

#navigationbar li {
  display: flex;
  align-items: center;
}
#navigationbar li a {
  color: #666;
  text-align: center;
  padding: 0px 16px;
  text-decoration: none;
}
</style>
