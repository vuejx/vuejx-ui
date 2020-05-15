<template>
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
            href="javascript:;" @click="toPage('lifecycle')"
          >Vòng đời của vue</a>
        </li>
        <li>
          <a
            class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
            href="javascript:;" @click="toPage('event')"
          >Thao tác cơ bản trên vue</a>
        </li>
        <li>
          <a
            class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
            href="javascript:;" @click="toPage('reference')"
          >Tài liệu liên quan</a>
        </li>
        <li>
          <a
            class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
            href="javascript:;" @click="toPage('tailwindcss')"
          >Tuỳ biến Tailwind CSS</a>
        </li>
      </ul>
    </div>
    <div class="mb-6">
      <a
        class="text-gray-800 hover:text-gray-900 text-xs uppercase font-bold block py-1 px-4 no-underline"
            href="javascript:;"
      >Môi trường phát triển</a>
      <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
        <li>
          <a
            class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
            href="javascript:;" @click="toPage('development/docker')"
          >Docker Compose</a>
        </li>
      </ul>
    </div>
    <div class="mb-6">
      <a
        class="text-gray-800 hover:text-gray-900 text-xs uppercase font-bold block py-1 px-4 no-underline"
            href="javascript:;"
      >Môi trường cài đặt</a>
      <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
        <li>
          <a
            class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
            href="javascript:;" @click="toPage('production/docker')"
          >Docker Compose</a>
        </li>
      </ul>
    </div>
    <div class="mb-6">
      <a
        class="text-gray-800 hover:text-gray-900 text-xs uppercase font-bold block py-1 px-4 no-underline"
            href="javascript:;"
      >Hướng dẫn sử dụng</a>
      <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
        <li>
          <a
            class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
            href="javascript:;"
          >vn-text</a>
        </li>
      </ul>
    </div>
    <div class="mb-6">
      <a
        class="text-gray-800 hover:text-gray-900 text-xs uppercase font-bold block py-1 px-4 no-underline"
            href="javascript:;"
      >Ví dụ thực thế</a>
      <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
        <li>
          <a
            class="text-gray-600 hover:text-gray-900 text-sm block mb-2 mx-4 no-underline"
            href="javascript:;"
          >Trang đăng nhập</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import router from '../router/router.js';
export default {
  name: "vn-navigation",
  setup() {

    const toPage = (page) => {
      router.push({ path: '/'.concat(page) })
    }

    return { toPage }
  }
};
</script>
