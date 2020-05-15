<template>
  <div class="bg-gray-100 min-h-screen min-h-full">
    <vn-navigation></vn-navigation>
    <div class="container mx-auto mt-4">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-3/12 lg:w-2/12 tex-left">
          <document-menu></document-menu>
        </div>
        <div class="w-full sm:w-9/12 lg:w-10/12 px-4 sm:pr-10 lg:pr-4">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted } from "vue";
import router from '../router/router.js';
export default {
  name: "App",
  components: {
    "vn-navigation": defineAsyncComponent(() => import("../components/Navbars.vue")),
    "document-menu": defineAsyncComponent(() => import("../components/DocumentMenu.vue"))
  },
  watch: {
    $route: async function() {
      this.homePage();
    }
  },
  setup() {
    onMounted(() => {
      homePage();
    })

    const homePage = () => {
      if (router.currentRoute.value.path === '/') {
        router.push('/lifecycle')
      }
    }

    return { homePage }
  }
};
</script>
