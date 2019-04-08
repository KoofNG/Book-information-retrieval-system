<template>
  <div>
    <Navigation/>
    <div class="searchBox">
      <div class="content">
        <p>Find a book</p>
        <div class="questionRow">
          <form action method="post" v-on:submit.prevent>
            <input type="text" name id placeholder="eg: Control Engineering">
            <button type="submit">Search</button>
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
};

</script>

<style scoped>
div.searchBox {
  height: 400px;
  width: 100%;
  display: block;
  position: relative;
  padding: 10px 50px;
  margin: 0;
  box-sizing: border-box;
}
div.content {
  display: block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  padding: 5px 0;
}
div.questionRow > form {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
div.content > p {
  color: #008000;
  font-size: 45px;
  font-weight: 300;
  text-align: left;
  margin: 0px;
  padding: 12.5px 0;
}
div.questionRow > form > input {
  width: 80%;
  height: 60px;
  border-radius: 30px 0 0 30px;
  outline: none;
  border: 1px solid #008000;
  padding: 5px 15px;
  transition: all 300ms;
}
div.questionRow > form > button {
  width: 20%;
  height: 60px;
  border-radius: 0 30px 30px 0px;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  background-color: #008000;
  border: 1px solid #008000;
  color: #ffffff;
} 

div#footer{
  position: absolute;
  bottom: 0px !important;
}

</style>
