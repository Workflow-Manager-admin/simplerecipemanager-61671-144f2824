import { createRouter, createWebHistory } from 'vue-router'
import RecipesView from '../views/RecipesView.vue'
import RecipeDetailsView from '../views/RecipeDetailsView.vue'
import AuthView from '../views/AuthView.vue'
import SearchView from '../views/SearchView.vue'
import ManageRecipesView from '../views/ManageRecipesView.vue'
import UsersView from '../views/UsersView.vue'
import CategoriesView from '../views/CategoriesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/recipes'
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesView,
    },
    {
      path: '/recipes/:id',
      name: 'recipe-details',
      component: RecipeDetailsView,
      props: true,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/manage',
      name: 'manage-recipes',
      component: ManageRecipesView,
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView,
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView,
    },
    // catch-all fallback
    {
      path: '/:pathMatch(.*)*',
      redirect: '/recipes'
    }
  ],
})

export default router
