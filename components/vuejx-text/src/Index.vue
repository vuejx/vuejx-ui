<template>
  <div class="vuejx__text">
    <input type="text" placeholder="Placeholder" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
  </div>
</template>

<script>
import service from "./service";
export default {
  name: "vuejx-text",
  props: {
  },
  setup(props, ctx) {
    return service(props, ctx);
  }
};
</script>
