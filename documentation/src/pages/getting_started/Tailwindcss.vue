<template>
  <div>
    <h1 class="font-semibold mb-2 text-heading">Tuỳ biến CSS</h1>
    <hr class="mt-2 mb-8 border-gray-300" />

    <div class="mb-8">
      <h2 class="font-semibold text-lg mb-2 mt-8 text-gray-800">Cấu hình CSS</h2>
      <p class="text-gray-700">
        VD dưới là cấu hình tối thiểu. <br/>
        Đường dẫn tới file cấu hình: documentation/tailwind.config.js <br/>
        Chi tiết cấu hình mặc định xem tại <br/>
        <a class="font-semibold" href="https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js" target="_blank">https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js</a>
      </p>
    </div>

    <div class="border border-solid border-gray-400 rounded p-4 relative bg-gray-300">
      <div class="relative">
        <div class="docs-code-preview">
          <pre
            style="display: block;overflow-x: auto;line-height: 1.45;padding: 14px;background: rgb(45, 43, 87);font-weight: normal;color: #ffffff;font-size: 0.825em;border-radius: 4px;"
          >
          <code>
            <span class="token tag float-left"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
            <span class="token plain-text">
module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
      },
      fontSize: {
        xs: '12px',
        base: '14px',
        lg: '16px'
      },
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
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
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
