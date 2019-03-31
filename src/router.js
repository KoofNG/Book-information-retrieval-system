import Vue from 'vue';
import Router from 'vue-router';

// Importing the various views from the Views folder
import Index from './views/Index.vue';
import CreateBook from './views/CreateBook.vue';
import DeleteBook from './views/DeleteBook.vue';
import RequestedBook from './views/RequestBook.vue';
import SearchBook from './views/SearchBook.vue';
import UpdateBook from './views/UpdateBook.vue';
import ViewRequestedBook from './views/ViewRequestedBook.vue';


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
      name: 'home',
      component: Index,
    },
    {
      path: '/createBook',
      name: 'createBook',
      component: CreateBook,
    },
    {
      path: '/deleteBook',
      name: 'deleteBook',
      component: DeleteBook,
    },
    {
      path: '/requestBook',
      name: 'requestedBook',
      component: RequestedBook,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchBook,
    },
    {
      path: '/updateBook',
      name: 'updateBook',
      component: UpdateBook,
    },
    {
      path: '/viewBook',
      name: 'viewBook',
      component: ViewRequestedBook,
    },
  ],
});
