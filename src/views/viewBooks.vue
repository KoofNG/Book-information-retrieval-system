<template>
  <div>
    <Navigation/>
    <div class="wr">
      <div id="book-search-result-card" v-for="(item, index) in childrenBooks" :key="index">
        <h4>{{item.title}} - <b>ID:{{item._id}}</b></h4>
        <h5>{{item.author}}</h5>
        <h6>{{new Date(item.publicationYear).getFullYear()}}</h6>
        <h6>{{item.edition}}</h6>
        <h3>STATUS:<b v-if="item.requested == false">Available</b><b v-else>Not Available</b></h3>
        <div><button v-if="item.requested != true" @click="decide" id="request">request for this book</button></div>

        <div v-if="decided" ref="bookAlert" id="alert">
          <p>Are you sure you want to borrow this Book?</p>
          <div class="btn-group">
            <button id="yes" @click="requestBook(item._id)">Yes</button>
            <button id='no' @click="noBorrow">No</button>
          </div>
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
      childrenBooks: [],
      decided: false,
    };
  },

  methods: {
    decide() {
      this.decided = true;
    },

    noBorrow(event) {
      this.decided = false;
    },
    requestBook(id) {
      const user = JSON.parse(window.localStorage.getItem('user'));
      const userID = user._id;
      const userName = user.username;
      fetch('/requests/addRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userID,
          requesterName: userName,
          bookId: id,
        }),
      })
        .then(res => res.json())
        .then((res) => {
          window.localStorage.setItem('user', JSON.stringify(res));
          alert('Book as being requested');
        })
        .then(this.decided = false);
    },
  },

  mounted() {
    const bookId = this.$route.params.id;
    fetch(`/books/children/${bookId}`)
      .then(res => res.json())
      .then((res) => {
        this.childrenBooks = res.slice();
        // console.log(this.childrenBooks);
      });
  },
};
</script>

<style scoped>
div#alert{
  width: 400px;
  height: auto;
  margin: auto auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  position: absolute;
  border: 1px solid #cccccc;
  box-shadow: 0px 0px 6px 3px #cccccc;
}
div.btn-group{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
div.btn-group button {
  width: 45%;
  height: 100%;
  outline: none;
  border: 1px solid transparent;
  padding: 10px 15px;
  margin: 0px;
  color: #ffffff;
  cursor: pointer;
}
button#yes{
  background-color: green;
  border-color: green;

}
button#no {
  background-color: #ff0000;
  border-color: #ff0000;
}
.wr {
    padding: 40px 50px;
    height: 100%;
    width: 100%;
    margin-bottom: 40px;
    display: inline-block;
}

.wr > div#book-search-result-card {
    width: 50%;
    height: auto;
    min-height: 200px !important;
    display: initial;
    position: relative;
    margin: 10px 0px;
    float: left;
    box-sizing: border-box;
}
.wr > div#book-search-result-card > * {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
}

@media screen and (max-width: 767px) {
  div.wr {
    padding: 20px;
  }
  .wr > div#book-search-result-card {
    width: 100%;
  }
}
</style>
