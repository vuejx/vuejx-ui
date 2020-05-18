<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-0 navbar-expand-lg bg-white mb-3 text-gray-900 border-b">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase " href="javascript:;" @click="backToHome">
          Tài liệu tham khảo
        </a>
        <button class=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div v-bind:class="{'hidden': false}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" href="#pablo">
              <i class="mdi mdi-github text-lg leading-lg  opacity-75" /><span class="ml-2">Tải xuống</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import router from '../router/router.js';
export default {
  name: "vn-navigation",
  setup() {
    const backToHome = () => {
      router.push('/')
    }

    return { backToHome }
  }
}
</script>
