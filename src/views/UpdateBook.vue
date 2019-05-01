<template>
  <div>
    <Navigation/>
    <div id="content-w">
      <!-- <Search/> -->
      <div id="wraps">
        <div id="updateBookRecord">
          <h3>Update Book Record</h3>
          <form action method="post" v-on:submit.prevent>
            <div>
              <label for="title">
                Book Title
                <span class="required">*</span>
              </label>
              <input type="text" name
                id="title" required="required"
                placeholder="Book Title" v-model="title">
            </div>
            <div>
              <label for="author-name">
                Author
                <span class="required">*</span>
              </label>
              <input type="text" name
                id="author-name" required="required"
                placeholder="Author's Name" v-model="author">
            </div>
            <div>
              <label for="">Edition</label>
              <input type="text" id="" placeholder="edition" v-model="edition" >
            </div>
            <div>
              <label for="">Quantity</label>
              <input type="text" id="" placeholder="Book Publisher" v-model="qty">
            </div>
            <div>
              <label for="book-category">
                Book Category
                <span class="required">*</span>
              </label>
              <select name="book-category"
                required="required"
                id="book-category"
                v-model="bookCategory" >
                <option disabled value>Choose Book Category</option>
                <option :value="bookCategory" selected>{{bookCategory}}</option>
                <option
                  v-for="(item, index) in categories"
                  :key="index" v-bind:value="item">
                  {{item}}
                </option>
              </select>
            </div>
            <div>
              <label for="year">
                Year of Publication
                <span class="required">*</span>
              </label>
              <input type="text" name id="year" required="required"
              placeholder="1995" v-model="yearOfPub">
            </div>
            <div>
              <button type="submit" @click="updateBook">Update Book Record</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navigation,
    Footer,
  },

  data() {
    return {
      title: '',
      author: '',
      edition: '',
      qty: '',
      yearOfPub: '',
      bookCategory: '',
      id: '',
      categories: [],
    };
  },

  methods: {
    updateBook() {
      const book = {
        title: this.title,
        author: this.author,
        edition: this.edition,
        category: this.bookCategory,
        quantity: this.qty,
        publicationYear: this.yearOfPub,
      };


      const updateURL = `/books/update/${this.id}`;
      fetch(updateURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(book),
      })
        .then(res => res.json())
        .then((response) => { console.log('Success:', JSON.stringify(response)); })
        .catch((error) => { console.log('Error:', error); });
    },
  },

  mounted() {
    var user = window.localStorage.getItem('user');
    if (!user) {
      this.$router.push('/');
    } else {
      const bookId = this.$route.params.id;
      fetch(`/books/getOne/${bookId}`).then(res => res.json()).then((res) => {
        this.title = res.title;
        this.author = res.author;
        this.edition = res.edition;
        this.qty = res.quantity;
        this.bookCategory = res.category;
        this.yearOfPub = new Date(res.publicationYear).getFullYear();
        this.id = res._id;
      });

      fetch('/books/categories')
        .then(res => res.json())
        .then(res => this.categories = res.slice());
        return true;
      }    
   },
};
</script>

<style scoped>
div#wraps {
  display: flex;
  justify-content: left;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0px;
  background: url('../assets/bgp.jpg');
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
div#content-w {
  display: flex;
  justify-content: left;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0px;
}
div#updateBookRecord {
  width: 450px;
  height: auto;
  display: block;
  position: relative;
  margin: 40px 50px;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  text-align: left;
}
div#updateBookRecord > h3 {
  font-weight: lighter;
  font-size: 1.5em;
  color: green;
  padding: 0;
  margin: 10px 0;
}
div#updateBookRecord > form {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
}
div#updateBookRecord > form > div {
  display: block;
  position: relative;
}
div#updateBookRecord > form > div:nth-child(even) {
  margin: 2.5px 0;
}
div#updateBookRecord > form > div > label {
  display: block;
  position: relative;
  padding: 5px 0;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
}
div#updateBookRecord > form > div > label > span.required {
  padding: 5px 5px;
  box-sizing: border-box;
  color: #ff0000 !important;
}
div#updateBookRecord > form > div > input,
div#updateBookRecord > form > div > select {
  width: 100%;
  height: 40px;
  display: block;
  position: relative;
  padding: 7.5px 10px;
  margin: 0;
  outline: none;
  border: 0.5px solid #cccccc;
  transition: all 300ms;
  text-transform: capitalize !important;
}
div#updateBookRecord > form > div > input:focus,
div#updateBookRecord > form > div > select:focus {
  border: 1px solid green;
}
div#updateBookRecord > form > div > .error {
  border: 1px solid #ff0000;
}
div#updateBookRecord > form > div > button {
  height: 40px;
  width: auto;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  outline: none;
  border: none;
  background: linear-gradient(90deg, #9ebd13 0%, #008552 100%) !important;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
}
input[type="date"] {
  text-transform: uppercase;
}
</style>
