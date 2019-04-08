<template>
  <div>
    <Navigation/>
    <div id="search-w">
      <Search @search="find"/>
      <div id="search-result">
        <Loader/>
        <h3>Search Results</h3>
        <div id="book-search-result-card" v-for="(item, index) in searchResult" :key="index">
          <h4>{{item.title}}</h4>
          <h5>{{item.author}}</h5>
          <h6>{{new Date(item.publicationYear).getFullYear()}}</h6>
          <h6>{{item.edition}}</h6>
          <p>
            Quantity Available:
            <span id="availability">{{item.quantity}}</span>
          </p>

          <div>
            <button id="edit" @click="editBook(item._id)">edit</button>
            <button id="delete" @click="bookDelete(item._id)">delete</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";
export default {
  components: {
    Navigation,
    Search,
    Loader,
    Footer
  },

  data: function() {
    return {
      searchResult: []
    };
  },

  methods: {
    find(result) {
      this.searchResult = result.slice();
    },

    editBook: function(id) {
      this.$router.push({ path: `/updateBook/${id}` });
    },

    bookDelete(id) {
      fetch("http://192.168.43.220:8080/books/remove/" + id)
        .then(res => res.json())
        .then(res => {
          if (res.status == "unsuccesful") {
            alert("Book not deleted");
          } else {
            alert("Book deleted");
            this.searchResult = this.searchResult.filter(result => {
              return result._id != id;
            });
          }
        });
      // console.log(id)
    }
  }
};
</script>

<style>
span#availability {
  padding: 2px 10px !important;
  margin: 0 4px;
  background-color: #008000;
  color: #ffffff;
  position: relative;
  border-radius: 5px;
}
div#search-w {
  display: flex;
  justify-content: left;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px 0px;
}
div#search-result {
  width: 65%;
  padding: 0 30px;
  position: relative;
  display: block;
  text-align: left;
}
div#search-result > h3 {
  font-weight: lighter;
  font-size: 1.3em;
  color: green;
  padding: 0;
  margin: 10px 0;
}
div#book-search-result-card {
  width: 100%;
  height: auto;
  padding: 10px 15px;
  margin: 0;
  display: block;
  position: relative;
  box-shadow: 2px 0px 5px 1px #cccccc;
}
div#book-search-result-card > div {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  margin-top: 15px;
}
div#book-search-result-card > div > button {
  height: 100%;
  width: auto;
  padding: 10px 15px;
  margin: 0 4.5px;
  cursor: pointer;
  border: none;
  outline: none;
  text-transform: capitalize;
}
div#book-search-result-card > div > button#delete {
  background-color: #ff0000;
  color: #ffffff;
}
div#book-search-result-card > div > button#edit {
  background-color: blue;
  color: #ffffff;
}
div#book-search-result-card * {
  margin: 0px;
  padding: 0px;
}
div#book-search-result-card > h4 {
  padding: 2.5px 0px;
  font-weight: 500;
  font-size: 1.2em;
  text-transform: capitalize;
}
div#book-search-result-card > h5,
div#book-search-result-card > h6 {
  font-weight: lighter;
  font-size: 0.8em;
  padding: 1.5px 0px;
  text-transform: capitalize;
}
div#book-search-result-card:nth-child(even) {
  margin: 12.5px 0;
}
</style>