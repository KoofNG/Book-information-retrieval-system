<template>
    <div id="loader"></div>
</template>

<script>
export default {

};
</script>

<style scoped>
div#loader {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 60px;
    height: 60px;
    margin: -37.5px 0 0 -37.5px;
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #008000;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    z-index: 1000;
    display: none;
}
div#loader.active{
    display: block;
}
@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
