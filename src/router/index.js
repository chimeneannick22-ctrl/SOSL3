import { createRouter, createWebHistory } from "vue-router"

import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Services from "../views/Services.vue"

import Kigali from "../views/kigali.vue"
import South from "../views/south.vue"
import West from "../views/west.vue"
import North from "../views/north.vue"
import East from "../views/east.vue"

import GalleryImages from "../views/GalleryImages.vue"
import GalleryVideos from "../views/GalleryVideos.vue"

import Contact from "../views/Contact.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },

  { path: "/kigali", component: Kigali },
  { path: "/south", component: South },
  { path: "/west", component: West },
  { path: "/north", component: North },
  { path: "/east", component: East },

  { path: "/gallery/images", component: GalleryImages },
  { path: "/gallery/videos", component: GalleryVideos },

  { path: "/contact", component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router