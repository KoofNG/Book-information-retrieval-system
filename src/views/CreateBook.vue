<template>
  <div>
    <Navigation/>
    <div id="wraps">
      <div id="createBookForm">
        <h3>Create New Book Record</h3>
        <form action v-on:submit.prevent method="post">
          <Loader/>
          <div>
            <label for="book-title">
              Book Title
              <span class="required">*</span>
            </label>
            <input
              type="text"
              name
              id="book-title"
              required="required"
              placeholder="Book Title"
              v-model="title"
            >
          </div>
          <div>
            <label for="author-name">
              Author
              <span class="required">*</span>
            </label>
            <input
              type="text"
              name
              id="author-name"
              required="required"
              placeholder="Author's Name"
              v-model="author"
            >
          </div>
          <div>
            <label for="edition">
              Edition
              <span class="required">*</span>
            </label>
            <input
              type="text"
              name
              id="edition"
              required="required"
              placeholder="6th Edition"
              v-model="edition"
            >
          </div>
          <div>
            <label for="">Quantity</label>
            <input
              type="text"
              name
              id=""
              placeholder="1"
              v-model="qty"
            >
          </div>
          <div>
            <label for="book-category">
              Book Category
              <span class="required">*</span>
            </label>
            <select name="book-category" required="required" id="book-categorry" v-model="category">
              <option value="0" disabled>Choose Book Category</option>
              <option
                v-for="(item, index) in categories"
                :key="index" v-bind:value="item">{{item}}</option>
            </select>
          </div>
          <div>
            <label for="year">
              Year of Publication
              <span class="required">*</span>
            </label>
            <input
              type="text"
              name
              id="year"
              required="required"
              placeholder="1995"
              v-model="yearOfPub"
            >
          </div>
          <div>
            <button type="submit" @click="createBook">Submit New Book</button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import Loader from '@/components/Loader.vue';

export default {
  components: {
    Navigation,
    Loader,
    Footer,
  },

  data() {
    return {
      qty: '',
      title: '',
      author: '',
      edition: '',
      category: '',
      yearOfPub: '',
      categories: [],
    };
  },

  methods: {
    createBook() {
      const loader = document.querySelector('#loader');
      const book = {
        title: this.title,
        author: this.author,
        edition: this.edition,
        category: this.category,
        quantity: this.qty,
        publicationYear: this.yearOfPub,
      };

      if ((this.title && this.author && this.edition && this.publisher && this.category && this.yearOfPub) !== '') {
        if (loader) {
          loader.classList.add('active');
          const updateURL = '/books/addBook';
          fetch(updateURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
          })
            .then(res => res.json())
            .then((response) => {
              // console.log('Success:', JSON.stringify(response));
              alert('Book Created Successfully');
              loader.classList.remove('active');
              return this.$router.push('/Home');
            })
            .catch((error) => {return console.log('Error:', error)});
        }
      }
    },
  },

  mounted() {
    var user = window.localStorage.getItem('user');
    console.log(this);
    if (!user) {
      this.$router.push('/');
    } else {
    fetch('/books/categories')
      .then((res) => {return res.json()})
      .then((res) => {return this.categories = res.slice()});
    }
  },
};
</script>

<style scope>
div#wraps {
  width: 100%;
  display: flex;
  height: auto;
  padding: 35px 0px;
  position: relative;
  background: url('../assets/bgp.jpg');
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
div#createBookForm {
  width: 450px;
  height: auto;
  display: block;
  position: relative;
  /* margin: 0px auto; */
  left: 50px;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  text-align: left;
}
div#createBookForm > h3 {
  font-weight: lighter;
  font-size: 1.5em;
  color: green;
  padding: 0;
  margin: 10px 0;
}
div#createBookForm > form {
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
}
div#createBookForm > form > div {
  display: block;
  position: relative;
}
div#createBookForm > form > div:nth-child(even) {
  margin: 2.5px 0;
}
div#createBookForm > form > div > label {
  display: block;
  position: relative;
  padding: 5px 0;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
}
div#createBookForm > form > div > label > span.required {
  padding: 5px 5px;
  box-sizing: border-box;
  color: #ff0000 !important;
}
div#createBookForm > form > div > input,
div#createBookForm > form > div > select {
  width: 100%;
  height: 40px;
  display: block;
  position: relative;
  padding: 7.5px 10px;
  margin: 0;
  outline: none;
  border: 0.5px solid #cccccc;
  transition: all 300ms;
}
div#createBookForm > form > div > input:focus,
div#createBookForm > form > div > select:focus {
  border: 1px solid green;
}
div#createBookForm > form > div > .error {
  border: 1px solid #ff0000;
}
div#createBookForm > form > div > button {
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

#footer {
  position: relative !important;
}
</style>
