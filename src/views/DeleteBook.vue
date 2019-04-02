<template>
    <div>
        <Navigation/>

        <div id="search-Wrap">
            <div id="search-form">
                <form action="" method="get">
                    <h3>Search for a Book</h3>
                    <div>
                        <label for="book-title">Book Title</label>
                        <input type="text" name="" id="book-title" placeholder="eg: Control Engineering">
                    </div>
                    <div>
                        <label for="book-author">Book Author</label>
                        <input type="text" name="" id="book-author" placeholder="eg: B. K. Oguta">
                    </div>
                    <div>
                        <label for="book-category">Book Category</label>
                        <select name="" id="book-category">
                            <option value="">Choose Book Category</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>

            <div id="search-result">
                <h3>Search Result</h3>
                <div id="keys">
                    <div>
                        <div id='sciences'></div>
                        <label for="">sciences</label>
                    </div>
                    <div>
                        <div id='art'></div>
                        <label for="">art</label>
                    </div>
                    <div>
                        <div id='business'></div>
                        <label for="">business</label>
                    </div>
                </div>

                <div id="book-search-result-card" class="sciences">
                    <h4>Book Title</h4>
                    <h5>Author of the Book</h5>
                    <h6>Year of publication</h6>
                </div>
                <div id="book-search-result-card" class="art">
                    <h4>Principles Of Electronics</h4>
                    <h5>M.K. Metha & B. K. Metha</h5>
                    <h6>1984</h6>
                </div>
                <div id="book-search-result-card" class="business">
                    <h4>Control Engineering</h4>
                    <h5>B. k. Ogata</h5>
                    <h6>1995</h6>
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

<style>
div#search-Wrap{
    display: flex;
    justify-content: center;
    align-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 30px 0px;
}
div#search-form {
    width: 35%;
    height: auto;
    display: block;
    padding: 0 50px;
    text-align: left;
}
div#search-form > form,
div#search-form > form > div {
    display: block;
    position: relative;
    width: auto;
    height: auto;
}
div#search-form > form > h3 {
    font-weight: lighter;
    font-size: 1.3em;
    color: green;
    padding: 0;
    margin: 10px 0;
}
div#search-form > form> div:nth-child(even) {
    margin: 5px 0;
}
div#search-form > form > div > label {
    padding: 5px 0;
    margin: 0;
    display: block;
    position: relative;
    font-weight: 500;
    font-size: 14px;
}
div#search-form > form > div > input,
div#search-form > form > div > select {
    height: 40px;
    width: 100%;
    display: block;
    position: relative;
    padding: 7.5px 10px;
    outline: none;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    font-size: 14px;
}
div#search-form > form > div > input:focus,
div#search-form > form > div > select:focus {
    border : 1px solid green;
}
div#search-form > form > div > button {
    height: 40px;
    width: auto;
    padding: 10px 20px;
    margin-top: 10px;
    outline: none;
    border: none;
    background: linear-gradient(90deg, #9ebd13 0%, #008552 100%) !important;
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
}


div#search-result {
    width: 65%;
    padding: 0 30px;
    position: relative;
    display: block;
    text-align: left;
}
div#search-result > h3 {
    font-weight: lighter;
    font-size: 1.3em;
    color: green;
    padding: 0;
    margin: 10px 0;
}
div#keys {
    display: flex;
    justify-content: left;
    padding: 5px 0;
    margin-bottom: 20px;
}
div#keys > div:nth-child(even) {
    margin: 0 7.5px;
}
div#keys > div > div{
    width: 40px;
    height: 10px;
    box-sizing: border-box;
    display: block;
    position: relative;
    margin-top: 5px;
    margin-right: 5px;
    float: left;
}
div#keys > div > div#sciences{
    background-color: #ff0000;
}
div#keys > div > div#art{
    background-color: #ffff00;
}
div#keys > div > div#business {
    background-color: #0000ff;
}
div#keys > div > label {
    text-transform: capitalize;
}

div#book-search-result-card {
    width: 100%;
    height: auto;
    padding: 10px 15px;
    margin: 0;
    display: block;
    position: relative;
    box-shadow: 2px 0px 5px 1px #cccccc;
}
div#book-search-result-card * {
    margin: 0px;
    padding: 0px;
}
div#book-search-result-card > h4 {
    padding: 2.5px 0px;
    font-weight: 500;
    font-size: 1.2em;
}
div#book-search-result-card > h5,
div#book-search-result-card > h6 {
    font-weight: lighter;
    font-size: 0.8em;
    padding: 1.5px 0px;
}
div#book-search-result-card:nth-child(even) {
    margin: 10px 0;
}
div#book-search-result-card.sciences {
    border-left: 10px solid #ff0000;
}
div#book-search-result-card.art {
    border-left: 10px solid #ffff00;
}
div#book-search-result-card.business {
    border-left: 10px solid #0000ff;
}
</style>
