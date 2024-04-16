<template>
  <div>
    <p>{{ defaultText }} 的方式孤独感</p>
  </div>
</template>

<script>
import browser from "webextension-polyfill";
export default {
  name: "HelloWorld",
  created() {
    console.log("browser:", browser);
  },
  mounted() {
    // browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
