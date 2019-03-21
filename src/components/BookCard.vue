<template>
    <div class="card">       
        <img src="" alt="">
        <div class="card-body">
            <h4 class="book-title"></h4>
            <h5 class="book-author"></h5>
            <h6 class="book-pub-year"></h6>
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
}
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

/* Elements */
div.card>img{
    vertical-align: middle;
    border-style: none;

}

/* Modifiers */
</style>

