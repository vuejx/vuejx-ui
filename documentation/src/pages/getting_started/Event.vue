<template>
  <div>
    <h1 class="font-semibold mb-2 text-heading">Thao tác cơ bản trên vue</h1>
    <hr class="mt-2 mb-8 border-gray-300" />

    <h2 class="font-semibold text-lg mb-2 mt-8 text-gray-800">Sử dụng các hàm điều kiện if/else ... trong vuejs</h2>

    <a href="https://vuejs.org/v2/guide/conditional.html" target="_blank">https://vuejs.org/v2/guide/conditional.html</a>

    <h2 class="font-semibold text-lg mb-2 mt-8 text-gray-800">Khai báo sử dụng dữ liệu</h2>
    <p class="mb-2">
      <span class="font-semibold">let, const</span>: sử dụng khai báo này dữ liệu sẽ không cập nhật thay đổi như ví dụ dưới đây. sau 5s biến title sẽ không thay đổi sang giá trị mới
    </p>
    <div class="border border-solid border-gray-400 rounded p-4 relative bg-gray-300">
      <div class="relative">
        <div class="docs-code-preview">
          <pre
            style="display: block;overflow-x: auto;line-height: 1.45;padding: 14px;background: rgb(45, 43, 87);font-weight: normal;color: #ffffff;font-size: 0.825em;border-radius: 4px;"
          >
          <code>
            <span class="token tag float-left"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span
  class="token punctuation"
>&gt;</span></span>
            <span class="token plain-text">
export default {
  setup() {
    let title = "Hello, Vue 3!";

    setTimeout(() => {
      title = "THIS IS A NEW TITLE";
    }, 5000);

    return { title };
  }
};
            </span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span
  class="token punctuation"
>&gt;</span></span>
          </code>
          </pre>
        </div>
      </div>
    </div>
    <p class="my-2 pt-6">
      <span class="font-semibold">ref</span>: sử dụng khai báo này đối với các kiểu dữ liệu nguyên thuỷ. sau 5s biến title sẽ thay đổi sang giá trị mới
    </p>
    <div class="border border-solid border-gray-400 rounded p-4 relative bg-gray-300">
      <div class="relative">
        <div class="docs-code-preview">
          <pre
            style="display: block;overflow-x: auto;line-height: 1.45;padding: 14px;background: rgb(45, 43, 87);font-weight: normal;color: #ffffff;font-size: 0.825em;border-radius: 4px;"
          >
          <code>
            <span class="token tag float-left"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span
  class="token punctuation"
>&gt;</span></span>
            <span class="token plain-text">
import { ref } from "vue";

export default {
  setup() {
      const title = ref("Hello, Vue 3!");

      setTimeout(() => {
        title.value = "New Title";
      }, 5000);

      return { title };
  }
};
            </span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span
  class="token punctuation"
>&gt;</span></span>
          </code>
          </pre>
        </div>
      </div>
    </div>

    <p class="my-2 pt-6">
      <span class="font-semibold">reactive</span>: sử dụng khai báo này đối với các kiểu dữ liệu Object. sau 5s biến data sẽ thay đổi sang giá trị mới
    </p>
    <div class="border border-solid border-gray-400 rounded p-4 relative bg-gray-300">
      <div class="relative">
        <div class="docs-code-preview">
          <pre
            style="display: block;overflow-x: auto;line-height: 1.45;padding: 14px;background: rgb(45, 43, 87);font-weight: normal;color: #ffffff;font-size: 0.825em;border-radius: 4px;"
          >
          <code>
            <span class="token tag float-left"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span
  class="token punctuation"
>&gt;</span></span>
            <span class="token plain-text">
import { reactive } from "vue";

export default {
  setup() {
      const data = reactive({
        title: "Hello, Vue 3"
      });

      setTimeout(() => {
        data.title = "New Title";
      }, 5000);

      return { data };
  }
};
            </span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span
  class="token punctuation"
>&gt;</span></span>
          </code>
          </pre>
        </div>
      </div>
    </div>

    <h2 class="font-semibold text-lg mb-2 mt-8 text-gray-800">Khai báo sử dụng function</h2>

    <div class="border border-solid border-gray-400 rounded p-4 relative bg-gray-300">
      <div class="relative">
        <div class="docs-code-preview">
          <pre
            style="display: block;overflow-x: auto;line-height: 1.45;padding: 14px;background: rgb(45, 43, 87);font-weight: normal;color: #ffffff;font-size: 0.825em;border-radius: 4px;"
          >
          <code>
            <span class="token tag float-left"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span
  class="token punctuation"
>&gt;</span></span>
            <span class="token plain-text">

export default {
  setup() {
      const helloWorld = (param) => {
        console.log("Xin chào: ", param);
      }

      return { helloWorld };
  }
};
            </span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span
  class="token punctuation"
>&gt;</span></span>
          </code>
          </pre>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>
