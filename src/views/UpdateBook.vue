<template>
    <div>
        <Navigation/>

        <div id="updateBookRecord">
            <h3>Update Book Record</h3>
            <form action="" method="post">
                <div>
                    <label for="book-title">Book Title<span class='required'>*</span></label>
                    <input type="text" name="" id="book-title" required='required' placeholder="Book Title">
                </div>
                <div>
                    <label for="author-name">Author<span class='required'>*</span></label>
                    <input type="text" name="" id="author-name" required='required' placeholder="Author's Name">
                </div>
                <div>
                    <label for="issn-isbn">ISSN / ISBN<span class='required'>*</span></label>
                    <input type="text" name="" id="issn-isbn" required='required' placeholder="ISSN/ISBN">
                </div>
                <div>
                    <label for="book-publisher">Publisher</label>
                    <input type="text" name="" id="book-publisher" placeholder="Book Publisher">
                </div>
                <div>
                    <label for="book-category">Book Category<span class='required'>*</span></label>
                    <select name="book-category" required='required' id="book-categorry">
                        <option value="0" disabled>Choose Book Category</option>
                    </select>
                </div>
                <div>
                    <label for="year">Year of Publication<span class='required'>*</span></label>
                    <input type="date" name="" id="year" required='required' placeholder="1995">
                </div>
                <div>
                    <button type="submit">Update Book Record</button>
                </div>
            </form>
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
        Footer
    },

};
</script>

<style>
div#updateBookRecord{
    width: 450px;
    height: auto;
    display: block;
    position: relative;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    text-align: left;
}
div#updateBookRecord > h3{
    font-weight: lighter;
    font-size: 1.5em;
    color: green;
    padding: 0;
    margin: 10px 0;
}
div#updateBookRecord > form{
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
}
div#updateBookRecord > form > div{
    display: block;
    position: relative;
}
div#updateBookRecord > form > div:nth-child(even){
    margin: 2.5px 0;
}
div#updateBookRecord > form > div > label{
    display: block;
    position: relative;
    padding: 5px 0;
    margin: 0;
    font-weight: 500;
    font-size: 14px;
}
div#updateBookRecord > form > div > label > span.required{
    padding: 5px 5px;
    box-sizing: border-box;
    color: #ff0000 !important;
}
div#updateBookRecord > form > div > input,
div#updateBookRecord > form > div > select {
    width: 100%;
    height: 40px;
    display: block;
    position: relative;
    padding: 7.5px 10px;
    margin: 0;
    outline: none;
    border: 0.5px solid #cccccc;
    transition: all 300ms;
}
div#updateBookRecord > form > div > input:focus,
div#updateBookRecord > form > div > select:focus {
    border : 1px solid green;
}
div#updateBookRecord > form > div > .error {
    border: 1px solid #ff0000;
}
div#updateBookRecord > form > div > button {
    height: 40px;
    width: auto;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 10px;
    outline: none;
    border: none;
    background: linear-gradient(90deg, #9ebd13 0%, #008552 100%) !important;
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
}
input[type=date] {
    text-transform: uppercase;
}

</style>
