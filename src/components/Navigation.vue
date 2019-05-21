<template>
  <div id="navigation" class="pad-top-bottom">
    <div class="brandName">
      <h1>Book Information Retrieval</h1>
    </div>

    <div class="accounts">
      <h1 @click="showMenu">&#9776;</h1>
    </div>

    <div id="menus">
      <div class='links'>
          <ul>
            <li><router-link to="/Home">Home</router-link></li>
            <li><router-link to="/search">Search</router-link></li>
            <li v-if="allowAdmins"><router-link to="/createBook">Create Book</router-link></li>
            <li><router-link to="/viewRequest">View Request Book</router-link></li>
            <!-- <li><router-link to="#" @click="logout">Logout</router-link></li> -->
            <li><button @click="logout">Logout</button></li>
          </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      allowAdmins: Boolean,
    };
  },
  methods: {
    showMenu() {
      const menu = document.querySelector('#menus');
      menu.classList.toggle('active');
    },

    logout(event) {
      event.preventDefault();
      const user = window.localStorage.getItem('user');
      if (user) {
        window.localStorage.removeItem('user');
        this.$router.push('/');
      }
    },
  },

  mounted() {
    const user = (JSON.parse(window.localStorage.getItem('user')));
    if ((user.status) === 'student' || (user.status) === 'staff') {
      this.allowAdmins = false;
    } else {
      this.allowAdmins = true;
    }
  },
};
</script>


<style scoped>
div#menus{
  height: auto;
  width: 180px;
  padding: 20px 10px;
  background-color: #008000;
  position: absolute;
  right: 0px;
  top: 60px;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: .2s all linear;
  overflow: hidden;
  z-index: 1000;
}
div#menus.active{
  visibility: visible;
  pointer-events: inherit;
  transition: .2s all ease-in-out;
  opacity: 1;
  right: 50px;
}
div.links {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
}
div.links ul {
  list-style: none;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
div.links ul li {
  width: 100%;
  height: 40px;
  display: block;
}
div.links ul li a,
div.links ul li button{
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
  cursor: pointer;
  padding: 10px 5px;
  text-align: right;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s;
}
div.links ul li button {
  outline: none;
  border: none;
  background-color: transparent;
}
div.links ul li a:hover,
div.links ul li button:hover {
  padding-right: 15px;
  background-color: #fff;
  color: #008000;
  border-radius: 4px;
}

/* Block */
div#navigation {
  display: flex;
  justify-content: space-between;
  height: auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
}
div.brandName {
  height: 100%;
  width: auto;
}
div.accounts {
  height: 44px;
  width: auto;
  padding: 0px;
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
div.accounts > h1 {
  display: block;
  position: relative;
  padding: 0 5px;
  text-decoration: none;
  text-transform: uppercase;
  color: #008000;
  font-size: 32px;
  font-weight: 500;
  margin: 0px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  cursor: pointer;
}
/* Modifiers */
div.pad-top-bottom {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}


@media screen and (max-width: 376px) {
  div#navigation {
    padding-left: 15px;
    padding-right: 15px;
    height: 60px;;
  }

  div#menus{
    height: auto;
    width: 100%;
    padding: 20px 10px;
    background-color: #008000;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 60px;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: .2s all linear;
    overflow: hidden;
    z-index: 1000;
  }

  div.links ul li a,
  div.links ul li button {
    text-align: left;
  }

}
</style>
