<template>
  <div>
    <p>{{ (defaultText, fdsf) }} 的方式孤独感</p>
    <button @click="goto">fsdhjfgsdkj</button>
  </div>
</template>

<script>
/* eslint-disable */
import browser from "webextension-polyfill";
import { mapState } from "vuex";
import router from "@/router";

export default {
  name: "HelloWorld",
  data() {
    return {
      fdsf: "",
    };
  },
  mounted() {},
  methods: {
    goto() {
      this.fdsf = "fsdhjfgsdkj";
      // router.push("/about");
      // 打开devtools.html 页面
      // browser.tabs.create({
      //   url: "/devtools.html",
      // });

      // 获取当前浏览器窗口的位置和大小信息
      browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
        const currentWindow = windowInfo;

        // 计算弹出窗口的位置（右上角）
        const popupWidth = 360;
        const popupHeight = 620;
        const popupTop = currentWindow.top;
        const popupLeft = currentWindow.left + currentWindow.width - popupWidth;

        // 创建弹出窗口
        browser.windows.create({
          url: "/options.html",
          type: "popup",
          width: popupWidth,
          height: popupHeight,
          top: popupTop,
          left: popupLeft,
        });

        // 向该页面发送消息
        browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
          const activeTab = tabs[0];
          browser.tabs.sendMessage(activeTab.id, { message: "hello" });
        });
      });
    },
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
