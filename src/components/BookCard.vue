<template>
    <div class="card">
        <img src="" alt="">
        <div class="card-body">
            <h4 class="book-title">Control Engineering</h4>
            <h5 class="book-author">I.J. Nagrath and M. Gopal </h5>
            <h6 class="book-pub-year">1996</h6>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    id: Number,
    coverPage: String,
    AuthorName: String,
    YearOfPublication: Number,
  },
};
</script>

<style scoped>
/* Block */
div.card{
    width: calc(100%/4);
    height: 100%;
    position: relative;
    display: block;
    background-color: #ffffff;
    float: left;
    margin: 0px 0.2rem;
    -webkit-box-shadow: 0 0 15px rgba(99, 114, 130, 0.3);
    box-shadow: 0 0 15px rgba(99, 114, 130, 0.3);
    border-radius: 5px;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
}
div.card-body{
    height: calc(0.4 * 100%);
    padding: 10px;
    margin: 0;
    display: block;
    position: relative;
}

/* Elements */
div.card>img{
    /* vertical-align: middle; */
    border-style: none;
    height: calc(0.6 * 100%);
    width: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
div.card-body>h4,
div.card-body>h5,
div.card-body>h6{
    padding: 0;
    margin: 0;
    text-align: left;
}

/* Modifiers */
div.card-body>h4{
    font-size: 16px;
    padding: 0.15rem;

}
div.card-body>h5,
div.card-body>h6{
    font-size: 14px;
    font-weight: lighter;
    padding: 0.1rem;
}
</style>
