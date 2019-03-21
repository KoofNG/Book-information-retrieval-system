<template>
  <div>
    <Navigation/>
    <div class="searchBox">
      <div class="content">
        <p>Find a book</p>
        <div class="questionRow">
          <input type="text" name id placeholder="eg: Control Engineering">
          <button type="submit">Search</button>
        </div>
      </div>
    </div>
    <div class="randomBooks">
      <div class="sciences">
        <div class="row-title">
          <p>sciences</p>
          <span>
            Recommended
            <span class="color-yellow">&#9733;</span>
            <span class="color-yellow">&#9733;</span>
            <span class="color-yellow">&#9733;</span>
            <span>&#9733;</span>
          </span>
        </div>

        <div class="book-cards">
            <BookCard v-for="(item, index) in this.sciences" :key="index" />
        </div>
      </div>
      <div class="art">
        <div class="row-title">
          <p>arts</p>
          <span>
            Recommended
            <span class="color-yellow">&#9733;</span>
            <span class="color-yellow">&#9733;</span>
            <span class="color-yellow">&#9733;</span>
            <span>&#9733;</span>
          </span>
        </div>
        <div class="book-cards">
          <BookCard v-for="(item, index) in this.sciences" :key="index"/>
        </div>
      </div>
      <div class="business">
        <div class="row-title">
          <p>business</p>
          <span>
            Recommended
            <span class="color-yellow">&#9733;</span>
            <span class="color-yellow">&#9733;</span>
            <span class="color-yellow">&#9733;</span>
            <span>&#9733;</span>
          </span>
        </div>
        <div class="book-cards">
          <BookCard v-for="(item, index) in this.sciences" :key="index"/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import BookCard from "@/components/BookCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navigation,
    BookCard,
    Footer
  },

  data() {
    return {
      sciences: 4,
    };
  }
};
</script>

<style>
/* Block */
div.searchBox {
  height: 400px;
  width: 100%;
  display: block;
  position: relative;
  padding: 10px 50px;
  margin: 0;
  box-sizing: border-box;
  background-color: green;
}
div.content {
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  padding: 5px 0;
}
div.questionRow {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
div.randomBooks {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  padding: 40px 50px;
  background-color: #fafafa;
}
div.randomBooks > div:nth-child(2) {
  margin: 10px 0;
}
div.randomBooks > div {
  height: 300px;
  width: 100%;
  position: relative;
  display: block;
}
div.book-cards {
  height: 243px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
}

/* Element */
div.content > p {
  color: #ffffff;
  font-size: 45px;
  font-weight: 300;
  text-align: left;
  margin: 0px;
  padding: 12.5px 0;
}
div.questionRow > input {
  width: 80%;
  border-radius: 20px 0 0 20px;
  outline: none;
  border: none;
  padding: 5px 15px;
}
div.questionRow > button {
  width: 20%;
  border-radius: 0 20px 20px 0px;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
}
div.row-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  position: relative;
}

/* Modifiers */
div.row-title > p {
  margin: 0;
  padding: 10px 0;
  text-transform: uppercase;
  color: #121212;
  font-weight: bold;
}
div.row-title > span {
  margin: 0;
  padding: 10px 0;
  color: grey;
}
span.color-yellow {
  color: yellow;
}
</style>
