<template>
  <div>
    <Navigation/>
    <div class="wr">
      <div id="book-search-result-card" v-for="(item, index) in childrenBooks" :key="index">
        <h4>
          {{item.title}} -
          <b>ID:{{item._id}}</b>
        </h4>
        <h5>{{item.author}}</h5>
        <h6>{{new Date(item.publicationYear).getFullYear()}}</h6>
        <h6>{{item.edition}}</h6>
        <h3>
          STATUS:
          <b v-if="item.requested == false">Available</b>
          <b v-else>Not Available</b>
        </h3>
        <div>
          <button
            v-if="item.requested != true"
            id="request"
            @click="requestBook(item._id)"
          >request for this book</button>
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
    };
  },

  methods: {
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
        });
    },
  },

  mounted() {
    const bookId = this.$route.params.id;
    fetch(`/books/children/${bookId}`)
      .then(res => res.json())
      .then((res) => {
        this.childrenBooks = res.slice();
        console.log(this.childrenBooks);
      });
  },
};
</script>

<style scoped>
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
</style>
