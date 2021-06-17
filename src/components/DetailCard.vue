<template>
  <div class="printsWrapper">
    <div class="imgWrapper">
      <img
        class="imgPrints"
        src="../assets/Artgrab-japanese-ins.jpg"
        alt="imgCart"
      />
    </div>

    <div class="productInfo">
      <div class="printName">
        Golf
      </div>
      <div class="detailsPrice">
        <div class="discLabel">20% off this item today!</div>
        <div class="priceTag">
          <span class="origPrice">27€</span>
          <span class="discPrice">20€</span>
        </div>
      </div>
      <div class="sizeWrapper">
        <div class="printSize">SIZE</div>
        <v-select
          class="selectTool"
          :items="items"
          label=" Medium 17' X 20'"
          solo
          prepend-item
          outlined
          offset-y
        ></v-select>

        <!-- <v-combobox class="selectTool" :items="items" outlined solo>
          Medium 17' X 20'</v-combobox
        > -->
        <!-- <div role="button" class="selectTool" title="Medium 17' X 20' ">
          Medium 17" X 20"
        </div>
        <div role="button" class="contentDropdown">
          <div class="headerDropdown">Select a size</div>
          <div role="button" class="optionDropdown">
            <span>X-Small 8x9</span>
            <span>€13.52</span>
          </div>
          <div role="button" class="optionDropdown">
            <span>Small 13x16</span>
            <span>€15.98</span>
          </div>
          <div role="button" class="optionDropdown">
            <span>Medium 17x20</span>
            <span>€20.90</span>
          </div>
          <div role="button" class="optionDropdown">
            <span>Large 22x34</span>
            <span>€25.21</span>
          </div>
          <div role="button" class="optionDropdown">
            <span>X-Large</span>
            <span>€36.28</span>
          </div>
        </div> -->
      </div>
      <div class="quantityContainer">
        <div class="quantitySelection">
          QUANTITY
        </div>

        <v-text-field
          v-model="pieces"
          outlined
          min="1"
          max="218"
          readonly
          class="quantityInputContainer"
        >
          <template v-slot:prepend-inner>
            <v-icon @click="decrement">
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon @click="increment">
              mdi-plus
            </v-icon>
          </template>
        </v-text-field>
      </div>

      <v-text-field v-model="pieces" outlined type="number" />

      <button class="cartButton">Add to cart</button>
      <button class="payalButton">
        <img src="../assets/paypal.png" alt="paypal" class="paypal" />
      </button>
      <div class="paymentOptions">More payment option</div>
    </div>
  </div>
</template>

<script>
import { PRINTS_DATA } from "../database/database";
console.warn({ PRINTS_DATA });
export default {
  name: "DetailCard",
  data: () => ({
    items: [
      "X-Small 8x9",
      "Small 13x16",
      "Medium 17x20",
      "Large 22x34",
      "X-Large"
    ],
    pieces: 1
  }),
  props: {
    imgSrc: String
  },
  methods: {
    decrement() {
      this.bpm--;
    },
    increment() {
      this.bpm++;
    }
  }
};
</script>
<style scoped lang="scss">
.printsWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 100px 10px 100px;
  width: 100%;
  min-height: 800px;
  font-size: 14px;
  flex-wrap: wrap;

  .imgWrapper {
    position: relative;
    // width: 58%;
    flex-basis: 58%;
    @media (max-width: 800px) {
      flex-basis: 100%;
    }
    .imgPrints {
      // width: 100%;
      max-width: 400px;
    }
  }
  .productInfo {
    flex-basis: 42%;
    @media (max-width: 800px) {
      flex-basis: 100%;
    }
    .printName {
      margin-bottom: 20px;
      text-align: left;
      font-size: 20px;
      font-weight: 700;
    }
    .detailsPrice {
      margin-bottom: 20px;
      margin-top: 10px;
      width: 100%;
      min-height: 32px;
      text-align: left;
      .discLabel {
        color: #e02900;
        font-size: 12px;
      }

      .origPrice {
        text-decoration: line-through;
        font-size: 16px;
        font-weight: 600;
        margin-right: 5px;
        line-height: 1;
        letter-spacing: -0.34px;
      }
      .discPrice {
        color: #e02900;
        font-size: 16px;
        font-weight: 600;
        line-height: 1;
        letter-spacing: -0.34px;
      }
    }

    .sizeWrapper {
      margin-bottom: 20px;
      margin-top: 20px;
      .printSize {
        font-size: 11px;
        font-weight: 400;
        letter-spacing: 1.5px;
        color: #6e6e6e;
        margin: 22px 0 10px;
        text-align: left;
      }
      .selectTool {
        font-weight: 300;
        height: 54px;
        // padding: 16px 36px 0 15px;
        position: relative;
        border-radius: 2px;
        // overflow-x: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;
        // border: 20px solid #d1d1d1;
        font-size: 16px;
      }
    }
  }
  .quantityContainer {
    .quantitySelection {
      text-align: left;
      font-size: 11px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #6e6e6e;
    }
    .quantityInputContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 195px;
      border-radius: 8px;
      border: 2px solid #c4bfbf;
      background-color: #fff;
      margin-bottom: 15px;
      .v-text-field_slot {
        align-items: center;
      }
      #input-30 {
        align-items: center;
      }
    }

    // .quantityInputBox {
    //   text-align: center;
    //   width: 50%;
    //   height: 100%;
    //   font-weight: 600;
    //   font-size: 15px;
    //   color: #5c5c5c;
    //   border-style: hidden;
    // }
  }
  .cartButton {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 54px;
    border-radius: 3px;
    // background-color: #000;
    // color: #fff;
    font-size: 18px;
    font-weight: 500;
    border: 2px solid #000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    text-align: center;
    padding: 0;
    font-weight: 400;
    margin: 10px 0;
    display: flex;
  }
  .payalButton {
    width: 100%;
    height: 54px;
    background-color: rgb(211, 190, 3);
    border: 2px solid #000;
    cursor: pointer;
    margin: 10px 0;
    .paypal {
      height: 100%;
    }
  }
  .paymentOptions {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
