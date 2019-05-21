<template>
    <div id="Random">
        <div id="bookCard" v-for="(item, index) in randomBooks" :key="index" >
            <div class="banner"></div>
            <div class="content">
                <h2>{{item.title}}</h2>
                <h3>{{item.author}}</h3>
                <div>
                    <p>{{new Date(item.publicationYear).getFullYear()}}</p>
                    <p>{{item.edition}}</p>
                    <p>Available: <span>{{item.quantity}}</span></p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

  data() {
    return {
      randomBooks: [],
    };
  },

  mounted() {
    fetch('/books/random').then(res => res.json()).then((res) => {
      this.randomBooks = res.slice();
    });
  },

};
</script>

<style scoped>
div#Random {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 40px 50px;
    margin: 40px 0px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: center;
}

div#bookCard{
    width: 300px;
    height: auto;
    display: block;
    position: relative;
    background-color: #ffffff !important;
    border: 1px solid #cccccc;
    border-radius: 5px;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    margin: 3.5px 0;
}
div.banner {
    height: 200px;
    width: 100%;
    display: block;
    position: relative;
    background: url('../assets/library.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
}
div.content {
    padding: 10px;
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    text-align: left;
    text-transform: capitalize;
    background-color: #f7f7f7;
}
div.content * {
    padding: 0;
    margin: 0;
}
div.content h2 {
    padding: 2.5px 0;
    font-size: 16px;
    font-size: 500;
    line-height: 1.5;
}
div.content h3 {
    font-size: 14px;
    font-weight: 400;
}
div.content div {
    padding: 7.5px 0px;
}
div.content div p {
    /* font-weight: 400; */
    /* font-size: 14px; */
    line-height: 1.5;
    letter-spacing: -.00278rem;
    font-size: 1rem;
}
div.content div p span {
    background-color: #008000;
    color: #ffffff;
    padding: 1.5px 7.5px;
    border-radius: 30%;
}

@media screen and (max-width: 767px) {
    div#Random {
        padding: 0px 20px;
        margin-bottom: 20px;
    }
    div#bookCard {
        width: 100%;
    }
}

</style>
