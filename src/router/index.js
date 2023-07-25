import Vue from 'vue'
import VueRouter from 'vue-router'
import ContinentView from "../views/ContinentView.vue"
import CountryView from "../views/CountryView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CountryView,
  },
  {
    path: '/countries',
    name: 'countries',
    component: CountryView,
  },
  {
    path: '/continents',
    name: 'continents',
    component: ContinentView,
  }
]

const router = new VueRouter({
  routes
})

export default router
