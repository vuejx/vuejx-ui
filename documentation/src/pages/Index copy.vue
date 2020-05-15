<template>
  <div class="h-screen bg-gray-100">
    <nav-dkm></nav-dkm>
    <div class="container mx-auto mt-4">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
          <div class="block overflow-y-auto pb-4">
            <div class="mb-6">
              <a
                class="text-gray-800 hover:text-gray-900 text-xs uppercase font-bold block py-1 px-4 no-underline"
                href="javascript:;"
              >Mới bắt đầu</a>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
                    href="/#/lifecycle"
                  >Vòng đời của vue</a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
                    href="javascript:;"
                  >Thao tác cơ bản trên vue</a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
                    href="/learning-lab/tailwind-starter-kit/documentation/download"
                  >Tài liệu liên quan</a>
                </li>
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
                    href="/learning-lab/tailwind-starter-kit/documentation/license"
                  >Tuỳ biến Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <a
                class="text-gray-800 hover:text-gray-900 text-xs uppercase font-bold block py-1 px-4 no-underline"
                href="/learning-lab/tailwind-starter-kit/documentation/landing"
              >Môi trường phát triển</a>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
                    href="/learning-lab/tailwind-starter-kit/documentation/landing"
                  >Docker Compose</a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <a
                class="text-gray-800 hover:text-gray-900 text-xs uppercase font-bold block py-1 px-4 no-underline"
                href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
              >Môi trường cài đặt</a>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
                    href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
                  >Docker Compose</a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <a
                class="text-gray-800 hover:text-gray-900 text-xs uppercase font-bold block py-1 px-4 no-underline"
                href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
              >Hướng dẫn sử dụng</a>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
                    href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
                  >vn-text</a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <a
                class="text-gray-800 hover:text-gray-900 text-xs uppercase font-bold block py-1 px-4 no-underline"
                href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
              >Ví dụ thực thế</a>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <a
                    class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
                    href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
                  >Trang đăng nhập</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
          <div class>
            <div class>
              <h1 class="font-semibold mb-2 text-3xl">Vue.js Navbars</h1>
              <p
                class="lead text-lg text-gray-600"
              >Responsive Vue.js navigation for your website. You can add in it links, icons, links with icons, search bars and a brand text.</p>
              <hr class="mt-6 mb-8 border-b-1 border-gray-300" />
            </div>
            <h2 class="font-semibold text-xl mb-2 text-gray-800">Sample code</h2>
            <p class="text-gray-700">
              We've taken a simple example, one that it is most used in real-life website, an naviagtion menu with text and icon links. You can change the links with anything from the
              <a
                href="/learning-lab/tailwind-starter-kit/documentation/navbars"
              >CSS Navbars</a> and everything will work properly.
            </p>
            <div class="border border-solid border-gray-400 rounded my-4 p-4 pt-6 relative">
              <div
                id="colors"
                class="flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto"
                style="width: 100%; bottom: -14px;"
              >
                <div class="flex flew-wrap justify-center items-center bg-white px-2">
                  <span class="cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-gray-200"></span>
                  <span class="cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-red-200"></span>
                  <span class="cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-orange-200"></span>
                  <span class="cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-yellow-200"></span>
                  <span class="cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-green-200"></span>
                  <span class="cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-teal-200"></span>
                  <span class="cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-blue-200"></span>
                  <span
                    class="cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-indigo-500 shadow-md"
                  ></span>
                  <span class="cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-purple-200"></span>
                  <span class="cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-pink-200"></span>
                </div>
              </div>
              <nav
                class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 mb-3"
              >
                <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                  <div
                    class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
                  >
                    <a
                      class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                      href="#pablo"
                    >indigo Tailwind Starter Kit</a>
                    <button
                      class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                      type="button"
                    >
                      <i class="fas fa-bars"></i>
                    </button>
                  </div>
                  <div class="lg:flex flex-grow items-center hidden" id="example-navbar-danger">
                    <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                      <li class="nav-item">
                        <a
                          class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          href="#pablo"
                        >
                          <i
                            class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"
                          ></i>
                          <span class="ml-2">Share</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          href="#pablo"
                        >
                          <i class="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                          <span class="ml-2">Tweet</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          href="#pablo"
                        >
                          <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                          <span class="ml-2">Pin</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div class="relative mt-4">
                <div
                  id="languages"
                  class="absolute w-full right-0 border-b border-gray-700 py-1"
                  style="width: 100%;"
                >
                  <button
                    class="flex-auto text-sm px-3 outline-none focus:outline-none mb-1 text-gray-600"
                    type="button"
                  >HTML</button>
                  <button
                    class="flex-auto text-sm px-3 outline-none focus:outline-none mb-1 text-gray-600"
                    type="button"
                  >React</button>
                  <button
                    class="flex-auto text-sm px-3 outline-none focus:outline-none mb-1 text-gray-400"
                    type="button"
                  >Vue</button>
                  <button
                    class="flex-auto text-sm px-3 outline-none focus:outline-none mb-1 text-gray-600"
                    type="button"
                  >Angular</button>
                </div>
                <div class="docs-code-preview">
                  <button
                    class="text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1"
                    type="button"
                  >Copied</button>
                  <pre
                    style="display: block; overflow-x: auto; line-height: 1.45; padding: 14px; background: rgb(45, 43, 87); font-weight: normal; color: rgb(227, 223, 255); font-size: 0.825em; border-radius: 4px;"
                  ><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500 mb-3<span
  class="token punctuation"
>"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container px-4 mx-auto flex flex-wrap items-center justify-between<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start<span
  class="token punctuation"
>"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white<span
  class="token punctuation"
>"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#pablo<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
          indigo Color
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none<span
  class="token punctuation"
>"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span
  class="token attr-value"
><span class="token punctuation">=</span><span class="token punctuation">"</span>toggleNavbar()<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fas fa-bars<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token tag"
><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>class</span><span
  class="token attr-value"
><span class="token punctuation">=</span><span class="token punctuation">"</span>{'hidden': !showMenu, 'flex': showMenu}<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg:flex lg:flex-grow items-center<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex flex-col lg:flex-row list-none ml-auto<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-item<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75<span
  class="token punctuation"
>"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#pablo<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fab fa-facebook-square text-lg leading-lg text-white opacity-75<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span
  class="token tag"
><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml-2<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>Share</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-item<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75<span
  class="token punctuation"
>"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#pablo<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fab fa-twitter text-lg leading-lg text-white opacity-75<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span
  class="token tag"
><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml-2<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>Tweet</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-item<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75<span
  class="token punctuation"
>"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#pablo<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fab fa-pinterest text-lg leading-lg text-white opacity-75<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span
  class="token tag"
><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml-2<span class="token punctuation">"</span></span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>Pin</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span
  class="token punctuation"
>&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span
  class="token punctuation"
>&gt;</span></span><span
  class="token plain-text"
>
export default {
  name: "indigo-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</span><span
  class="token tag"
><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span
  class="token punctuation"
>&gt;</span></span>
</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-2/12 px-4 hidden lg:block"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "App",
  components: {
    "nav-dkm": defineAsyncComponent(() => import("../components/Navbars.vue"))
  }
};
</script>
