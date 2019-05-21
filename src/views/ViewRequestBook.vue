<template>
  <div>
    <Navigation/>
    <div id="request">
      <div id="book-request" v-for="(item, index) in requestArray" :key="index">
        <div class="user">
          <h2>{{item.bookId.title}}</h2>
          <h6>{{item.requesterName}} requested for this book</h6>
        </div>
        <div v-if="isAdmin" class="actions">
          <button @click="approveBook(item._id)">Approve</button>
        </div>
        <div v-else class="actions">
          <div v-bind:class="{ active: item.status == 'approved'}" id="indicator"><p>{{item.status}}</p></div>
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
      isAdmin: false,
      isActive: false,
      requestArray: [],
    };
  },

  created() {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user.status == 'admin') {
      this.isAdmin = true;
      fetch('/requests')
        .then(res => res.json())
        .then((res) => {
          console.log(res);
          this.requestArray = res.slice();
        });
    } else {
      const requestsInfo = [];
      for (const bookId of user.bookRequests) {
        console.log(bookId);
        fetch(`/requests/one/${bookId}`)
          .then(res => res.json())
          .then((res) => {
            this.requestArray.push(JSON.parse(JSON.stringify(res)));
          });
      }
    }
  },

  methods: {
    approveBook(id) {
      console.log(id);
      fetch(`/requests/approveRequest/${id}`)
        .then(res => res.json())
        .then((res) => {
          if (res.status != 'sucessful') {
            alert('Error occured while approving the book');
          } else {
            alert('Book Approved');
          }
        });
    },
  },
};
</script>

<style scoped>
div#indicator {
  width: auto;
  height: auto;
  padding: 10px 15px;
  margin: 0px;
  background-color: #ff0000;
}
div#indicator.active {
  background-color: #008100;
}
div#indicator p {
  color: #ffffff;
  font-size: 14px;
  margin: 0px;
  padding: 2.5px;
  text-transform: capitalize;
}
div#request {
  width: 100%;
  height: auto;
  padding: 40px 50px;
  display: block;
  position: relative;
}

div#book-request {
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #f7f7f7;
  background-color: #f7f7f7;
  padding: 5px 10px;
}
div#book-request:nth-child(even) {
    margin: 5px 0;
}

div.user {
  width: 75%;
  height: 100%;
  display: block;
  text-align: left;
}
div.user h2 {
  margin: 0px;
  padding: 7.5px 0;
  text-transform: capitalize;
}
div.user h6 {
  margin: 0px;
  padding: 5px 0;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: lighter;
}
div.actions {
  width: 25%;
  height: 100%;
  padding: 10px;
  position: relative;
  margin: 0px;
}
div.actions button {
  width: 100%;
  height: 40px;
  display: block;
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
  color: #f7f7f7;
  background-color: #008100;
  margin: auto 0px;
  padding: 10px 0px;
}

#footer {
}
</style>
