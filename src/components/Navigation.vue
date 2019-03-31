<template>
  <div id="navigation" class="pad-top-bottom">
    <div class="brandName">
      <h1>Book Information Retrieval</h1>
      <!--  -->
    </div>
    <div class='links'>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/createBook">Create Book</router-link></li>
        <li><router-link to="/updateBook">Update Book</router-link></li>
        <li><router-link to="/deleteBook">Delete Book</router-link></li>
      </ul>
    </div>
    <div class="accounts">
      <a href=''>Login</a>
    </div>
  </div>
</template>

<script>

// import CreateBook from './views/CreateBook.vue';


export default {
  data() {
    return {
    };
  },
  // components: {
  //   CreateBook,
  // },
  methods: {
    // showLogin: function(event) {
    //   event.preventDefault();
    //   // this.isLogged = true;
    // }
  },
};
</script>


<style>
div.links{
  display: block;
  position: relative;
  width: auto;
}
div.links >ul li {
  list-style: none;
}
div.links >ul>li {
  float: left;
  margin: 0 10px;
  text-decoration: none;
}
div.links >ul>li>a{
  text-decoration: none;
}
/* Block */
div#navigation {
  display: flex;
  justify-content: space-between;
  height: 60px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding-left: 50px;
  padding-right: 50px;
}
div.brandName {
  height: 100%;
  width: auto;
}
div.accounts {
  height: 44px;
  width: auto;
  padding: 7px 0px;
  position: relative;
  display: block;
}
/* Elements */
div.brandName > h1 {
  margin: 0;
  padding: 9px 0px;
  font-size: 22px;
  font-weight: 400;
  color: green;
}
div.accounts > a {
  display: block;
  position: relative;
  padding: 7px 20px;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  background-color: green;
}
/* Modifiers */
div.pad-top-bottom {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
