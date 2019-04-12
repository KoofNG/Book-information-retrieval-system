<template>
  <div id="search-form">
    <form action method="get" v-on:submit.prevent>
      <h3>Search for a Book</h3>
      <select name id="set" v-model="searchCategory">
        <option value="author">By Author</option>
        <option value="title">By Title</option>
        <option value="category">By Category</option>
      </select>

      <div v-if="searchCategory == 'title'">
        <label for="book-title">Book Title</label>
        <input
          type="text"
          name
          id="book-title"
          placeholder="eg: Control Engineering"
          v-model="paramDict['title']"
        >
      </div>
      <div v-else-if="searchCategory == 'author'">
        <label for="book-author">Book Author</label>
        <input
          type="text"
          name
          id="book-author"
          placeholder="eg: B. K. Oguta"
          v-model="paramDict['author']"
        >
      </div>
      <div v-else>
        <label for="book-category">Book Category</label>
        <select name id="book-category" v-model="paramDict['category']">
          <option value>Choose Book Category</option>
          <option
            v-for="(item, index) in categories"
            :key="index" v-bind:value="item">{{item}}</option>
        </select>
      </div>
      <div>
        <button type="submit" @click="search">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paramDict: {
        author: null,
        category: null,
        title: null,
      },
      bookTitle: '',
      bookAuthor: '',
      category: '',
      searchCategory: 'author',
      isActive: false,
      categories: [],
      searchResult: [],
    };
  },

  methods: {
    search() {
      const loader = document.querySelector('#loader');
      const header = document.querySelector('#header');
      if (loader) {
        loader.classList.add('active');
      }
      const query = `http://localhost:8081/books/${this.searchCategory}/${this.paramDict[this.searchCategory]}`;
      fetch(query)
        .then(res => res.json())
        .then((res) => {
          if (res.length !== 0) {
            loader.classList.remove('active');
            document.querySelector('.result').classList.add('active');
            this.searchResult = res.slice();
            header.innerHTML = 'Search Results';
            this.$emit('search', this.searchResult);
          } else {
            loader.classList.remove('active');
            document.querySelector('.result').classList.add('active');
            header.innerHTML = 'No record found';
          }
        })
        .catch(() => {
          loader.classList.remove('active');
          alert('Search Unsuccessful');
        });
    },
  },

  mounted() {
    fetch('http://localhost:8081/books/categories')
      .then(res => res.json())
      .then(res => { return this.categories = res.slice()});
  },

};
</script>

<style scoped>
div#search-form {
  width: 35%;
  height: auto;
  display: block;
  padding: 0 50px;
  text-align: left;
}
div#search-form > form,
div#search-form > form > div {
  display: block;
  position: relative;
  width: auto;
  height: auto;
}
div#search-form > form > h3 {
  font-weight: lighter;
  font-size: 1.3em;
  color: green;
  padding: 0;
  margin: 10px 0;
}
div#search-form > form select#set {
  width: 100%;
  height: 40px;
  margin-bottom: 20px !important;
}
div#search-form > form > div:nth-child(even) {
  margin: 5px 0;
}
div#search-form > form > div > label {
  padding: 5px 0;
  margin: 0;
  display: block;
  position: relative;
  font-weight: 500;
  font-size: 14px;
}
div#search-form > form > div > input,
div#search-form > form > div > select {
  height: 40px;
  width: 100%;
  display: block;
  position: relative;
  padding: 7.5px 10px;
  outline: none;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  font-size: 14px;
}
div#search-form > form > div > input:focus,
div#search-form > form > div > select:focus {
  border: 1px solid green;
}
div#search-form > form > div > button {
  height: 40px;
  width: auto;
  padding: 10px 20px;
  margin-top: 10px;
  outline: none;
  border: none;
  background: linear-gradient(90deg, #9ebd13 0%, #008552 100%) !important;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
}
</style>
