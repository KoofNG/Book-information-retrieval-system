<template>
  <div id="login">
    <h1>Login</h1>
    <form action>
      <div>
        <input type="text" name id placeholder="Email Address">
      </div>
      <div>
        <input type="password" name id placeholder="Password">
      </div>
      <div>
        <input type="submit" value="Login">
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Block */
div#login {
  width: 300px;
  height: auto;
  display: block;
  position: absolute;
  right: 50px;
  top: 65px;
  background-color: #ffffff;
  -webkit-box-shadow: 0 0 15px rgba(99, 114, 130, 0.3);
  box-shadow: 0 0 15px rgba(99, 114, 130, 0.3);
  padding: 20px;
  z-index: 2;
}
div#login input {
  width: 100%;
  height: 40px;
  display: block;
  position: relative;
  outline: none;
  border: none;
}

/* Elements */
div#login > h1 {
  margin: 0;
  padding: 10px 0px;
  text-align: left;
  font-weight: lighter;
}
div#login input:nth-child(odd){
    margin: 0.2rem 0px;
}
/* Modifiers */
div#login input[type="text"],
div#login input[type="password"] {
  border: 1px solid #cccccc;
  padding: 7.5px 10px;
  border-radius: 4px;
  transition: all 300ms;
}
div#login input[type="text"]:focus,
div#login input[type="password"]:focus{
    border: 1px solid green;
}
input[type=submit]{
    background-color: green;
    color: #ffffff;
    cursor: pointer;
    margin: 7.5px 0px !important;
    border-radius: 4px;
}
</style>
