<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
html, body{
  padding: 0;
  margin: 0;
  font-family: "Google Sans", sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

::placeholder{
  color: #cccccc;
}
input[type='email']::placeholder {
  text-transform: capitalize !important;
}

input {
  text-transform: capitalize;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
