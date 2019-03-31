<template>
    <div id="footer">
        <p>&copy; 2019 - Book Information Retrieval System</p>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
div#footer{
    height: 50px;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: green;
    position: sticky;
    bottom: 0px;
}
div#footer>p{
    padding: 7.5px 0;
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
}
</style>
