<template>
  <div id="Features" class=" animated fadeInUp">
    <div class="row max mx-auto my-3">
      <div
        class="col text-center px-5"
        v-for="item in FeaturesObj"
        :key="item.title"
      >
        <img :src="item.icon" alt="" width="140px" height="140px" />
        <h2 class="my-2">{{ item.title }}</h2>
        <p class="my-2">{{ item.details }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// 图片

import Compatible from "../assets/Features/Compatible.png";
import operation from "../assets/Features/operation.png";
import security from "../assets/Features/security.png";
export default {
  data() {
    return {
      FeaturesObj: [
        {
          icon: Compatible,
          title: "兼容性强",
          details:
            "幻影系列软件在多次版本更新迭代和改良后，保证了大部分机型可以正常使用，并且突破网卡限制，省去再花费一份网卡的钱。",
        },
        {
          icon: operation,
          title: "操作简单",
          details:
            "幻影系列软件上手简单且轻松，软件自带常见问题的解答，之后的破解操作全部由软件自动化运行。这时你只需冲上一杯咖啡，静待结果出现。",
        },
        {
          icon: security,
          title: "绿色安全",
          details:
            "幻影系列软件无任何恶意的强制性广告，我们本着Google提出的《开发者计划政策》开发该系列软件，故无需担心软件会对您的手机造成威胁。软件安全贴心才是硬道理。",
        },
      ],
    };
  },
};
</script>

<style>
</style>