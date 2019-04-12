import Vue from 'vue';
import Router from 'vue-router';

// Importing the various views from the Views folder
import Index from './views/Index.vue';
import CreateBook from './views/CreateBook.vue';
import SearchBook from './views/SearchBook.vue';
import UpdateBook from './views/UpdateBook.vue';
import Login from './views/Login.vue';


// const Vue = require('vue');
// const Router = require('vue-router');

// // Importing the various pages
// const Index = require('./views/Index.vue');
// const CreateBook = require('./views/CreateBook.vue');
// const DeleteBook = require('./views/DeleteBook.vue');
// const RequestedBook = require('./views/RequestBook.vue');
// const SearchBook = require('./views/SearchBook.vue');
// const UpdateBook = require('./views/UpdateBook.vue');
// const ViewRequestedBook = require('./views/ViewRequestedBook.vue');


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/Home',
      name: 'home',
      component: Index,
    },
    {
      path: '/createBook',
      name: 'createBook',
      component: CreateBook,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchBook,
    },
    {
      path: '/updateBook/:id',
      name: 'updateBook',
      component: UpdateBook,
    },
  ],
});
