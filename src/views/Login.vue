<template>
  <div>
    <div class="alert">
      <p v-text="msg"></p>
    </div>

    <div id="navigation" class="navigation-color">
      <div class="brandName">
        <a href="/">Book Information Retrieval System</a>
      </div>
    </div>

    <div id="wraps">
      <div id="forms">
        <div class="links">
          <div>
            <p id="login" class="active">Login</p>
          </div>
          <div>
            <p id="signup">Sign up</p>
          </div>
        </div>
        <div class="user-forms">
          <Loader v-if="authenticating"/>
          <div id="login" class="active">
            <h1>Login</h1>
            <form name="login" v-on:submit.prevent>
              <div>
                <input
                  type="email"
                  name
                  id="logemail"
                  placeholder="Email Address"
                  v-model="logEmail"
                >
              </div>
              <div>
                <input
                  type="password"
                  id="logpassword"
                  placeholder="Password"
                  v-model="logPassword"
                >
              </div>
              <div>
                <input type="submit" value="Login" @click="login">
              </div>
            </form>
          </div>
          <div id="signup">
            <h1>Sign up</h1>
            <form name="register" v-on:submit.prevent>
              <div>
                <input type="email" name id="email" placeholder="Email Address" v-model="regEmail">
              </div>
              <div>
                <input type="password" id="password" placeholder="Password" v-model="regPassword">
              </div>
              <div>
                <select name="category" id v-model="regCategory">
                  <option value disabled>Choose User Category</option>
                  <option value="student">Student</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
              <div>
                <input type="submit" value="Register" @click="signup">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div id="footer" class="footer-color">
      <h6>
        &copy; 2019
      </h6>
    </div>

  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  components: {
    Loader
  },

  data() {
    return {
      logEmail: "",
      logPassword: "",
      regEmail: "",
      regPassword: "",
      regCategory: "",
      msg: "",
      authenticating: false
    };
  },

  mounted() {
    const chooseForm = document.querySelectorAll("div.links div p");
    for (let index = 0; index < chooseForm.length; index++) {
      const element = chooseForm[index];
      element.addEventListener("click", e => {
        const activeLink = document.querySelector("p.active");
        activeLink.classList.remove("active");
        element.classList.add("active");
        const route = e.target.id;
        const currentActive = document.querySelector(
          "div.user-forms div.active"
        );
        currentActive.classList.remove("active");        
        if (this.authenticating === true){this.authenticating = false}
        document.querySelector(`div#${route}`).classList.add("active");
      });
    }
  },

  methods: {
    showAlert: function (message) {
      const alert = document.querySelector('.alert');
      alert.classList.add('active');
        this.msg = message;
        setTimeout(() => {
          alert.classList.remove('active');
        }, 1000);
    },

    login: function () {
      if (this.logEmail != "" && this.logPassword != ""){
        this.authenticating = true;
        fetch("/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.logEmail,
            password: this.logPassword
          })
        })
        .then((res)=>res.json())
        .then(res => {
          const user = res;
          if (res.message === "invalid password") {
            this.showAlert("Incorrect Password");            
            this.authenticating = false;            
          } else if (res.message === "unknown user") {
            this.showAlert("This account doesnt exist");
            this.authenticating = false;
          } else {
            window.localStorage.setItem("user", JSON.stringify(user));
            this.authenticating = false;
            this.$router.push("/Home");
          }
        })
        .catch(err => this.showAlert(err));
      } else {
        this.showAlert('Provide Email and Password');
      }
    },

    signup: function () {
      if (this.regEmail != "" && this.regPassword != "" && this.regCategory != "") {
        this.authenticating = true;
        fetch("/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: this.regEmail,
            password: this.regPassword,
            status: this.regCategory
          })
        })
        .then(res => res.json())
        .then(res => {
          const user = res;
          window.localStorage.setItem("user", JSON.stringify(user));
          this.authenticating = false;
          this.$router.push("/Home");
        })
        .catch(err => {
          this.showAlert("An error occured while creating an account");
          this.authenticating = false;
        });
      } else if (this.regEmail == "" || this.regPassword == "" || this.regCategory == "") {
        this.showAlert('All fields are required here');
        this.authenticating = false;
      } else {
        this.$router.push('/');
      }
    },
    
  }
};
</script>

<style scoped>
div.alert {
  width: 100%;
  position: absolute;
  margin: 0px;
  background-color: #fd3916;
  padding: 7.5px 0px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  top: -40px;
  opacity: 0;
  transition: all 300ms;
}
div.alert.active{
  top: 60px;
  opacity: 1;
  z-index: 3;
}
div.alert p{
  margin: 0px;
  color: #121212;
  font-size: .8em;
}
/* Block */
div#wraps {
  width: 100%;
  display: block;
  height: calc(100vh - 141.5px);
  position: relative;
  background: url("../assets/bgp.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
div#navigation {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: left;
  padding: 20px 50px;
  margin: 0px;
}
div#forms {
  position: absolute;
  display: block;
  top: 35%;
  transform: translateY(-35%);
  left: 50px;
  width: 450px;
  height: auto;
  -webkit-box-shadow: 0 0 15px rgba(99, 114, 130, 0.3);
  box-shadow: 0 0 15px rgba(99, 114, 130, 0.3);
}
div.links {
  display: flex;
  justify-content: center;
  height: 50px;
  width: 100%;
  padding: 0;
  margin: 0;
}
div#footer {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  bottom: 0;
}
div.brandName {
  display: block;
  position: relative;
  height: 40px;
  width: auto;
  padding: 6.5px 0;
}
div.user-forms {
  width: 100%;
  height: auto;
  display: inline-block;
  position: relative;
  transition: height 0.2s;
}
div.user-forms > div.active {
  display: block !important ;
}
div#login,
div#signup {
  width: 100%;
  height: auto;
  display: none;
  position: relative;
  background-color: #ffffff;
  -webkit-box-shadow: 0 6px 10px rgba(99, 114, 130, 0.3);
  box-shadow: 0 6px 10px rgba(99, 114, 130, 0.3);
  padding: 20px;
  z-index: 2;
}
div#login input,
div#signup input,
div#signup select {
  width: 100%;
  height: 40px;
  display: block;
  position: relative;
  outline: none;
  border: none;
}

/* Element */
div.brandName a {
  text-decoration: none;
  color: #008000;
  font-size: 22px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  position: relative;
  cursor: pointer;
}
div.links div {
  width: 50%;
  height: 100%;
  position: relative;
}
div.links div p {
  width: 100%;
  min-height: 100%;
  cursor: pointer;
  display: block;
  margin: 0px;
  padding: 15px 0;
  font-size: 17px;
  font-weight: 400;
  border-bottom: 1px solid #008000;
  transition: all 0.2s;
}
div#login > h1,
div#signup > h1 {
  margin: 0;
  padding: 10px 0px;
  text-align: left;
  font-weight: lighter;
  font-size: 25px;
}
div#login input:nth-child(odd),
div#signup input:nth-child(odd) {
  margin: 0.2rem 0px;
}
div#footer h6 {
  font-size: 18px;
  font-weight: lighter;
  padding: 20px 0px;
  margin: 0px;
  color: #ffffff;
  position: relative;
  display: block;
}
div#footer h6 span {
  color: indianred;
}
div#footer h6 a {
  text-decoration: none;
  color: inherit;
}

/* Modifiers */
.navigation-color {
  background-color: #ffffff;
  border-bottom: 1.5px solid #008000;
}
div.links div p.active {
  background-color: #008000;
  color: #ffffff;
}
div#login input[type="text"],
div#login input[type="password"],
div#login input[type="email"],
div#signup input[type="text"],
div#signup input[type="password"],
div#signup input[type="email"],
div#signup select {
  border: 1px solid #cccccc;
  padding: 7.5px 10px;
  border-radius: 4px;
  transition: all 300ms;
  outline: none;
}
div#login input[type="text"]:focus,
div#login input[type="password"]:focus,
div#login input[type="email"]:focus,
div#signup input[type="text"]:focus,
div#signup input[type="password"]:focus,
div#signup input[type="email"]:focus,
div#signup select:focus {
  border: 1px solid green;
}
input[type="submit"] {
  background-color: green;
  color: #ffffff;
  cursor: pointer;
  margin: 15px 0px !important;
  border-radius: 4px;
}
input[type="email"] {
  text-transform: lowercase !important;
}
.footer-color {
  background-color: #008000;
}


@media screen and (max-width: 767px) {
  div#navigation {
    height: 60px;
    width: 100%;
    padding: 10px 20px;
  }

  div.brandName a {
    font-size: 1.2rem;
  }

  div#wraps{
    padding: 0px 10px;
    height: 100vh;
    position: fixed;
  }

  div#forms {
    width: 100%;
    left: 0px;
    position: relative;
  }

  div#footer {
    width: 100%;
    height: 45px;
    position: relative;
    margin-top: 20px;
  }
  div#footer h6{
    font-size: 1rem;
    padding: 12.5px 0;
  }
}
</style>
