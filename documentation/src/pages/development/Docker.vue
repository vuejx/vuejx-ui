<template>
  <div>
    <h1 class="font-semibold mb-2 text-heading">Docker Compose</h1>
    <hr class="mt-2 mb-8 border-gray-300" />
    <h2 class="font-semibold text-lg mb-2 mt-8 text-gray-800">Cài đặt môi trường</h2>
    <ol class="list-decimal px-8">
      <li>
        Docker
      </li>
      <li>
        Docker Compose ( phiên bản 1.25.4 trở lên )
      </li>
      <li>
        Node
      </li>
      <li>
        Cài đặt dependent ( cd vào các module --> npm install )
      </li>
      <li>
        cd vào thư mục gốc ( --> docker-compose up )
      </li>
    </ol>
    <p class="my-4">NOTE: docker-compose up --build -d ( --build để build mới images ). source development đã cấu hình hot deploy --> không cần --build</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
