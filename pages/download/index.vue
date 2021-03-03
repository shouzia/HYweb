<template>
  <div>
    <Header />
    <div class="container">
      <div class="box text-center" v-for="item in dlApp" :key="item.title">
        <div class="img" @click="download(item.href)">
          <img :src="item.imgsrc" alt="" />
        </div>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Pinlogo from "../assets/logo.png";
import Header from "../header/index.vue";
export default {
  components: {
    Header,
  },
  methods: {
    download: function (url) {
      window.location.href = url;
    },
  },
  data() {
    return {
      dlApp: [
        {
          href: "https://108878.xyz/",
          title: "幻影Pin-v1.75",
          imgsrc: Pinlogo,
        },
        {
          href: "https://108878.xyz/",
          title: "幻影Pin-v4.0",
          imgsrc: Pinlogo,
        },
        {
          href: "https://108878.xyz/",
          title: "幻影Pin-v4.2",
          imgsrc: Pinlogo,
        },
        {
          href: "https://108878.xyz/",
          title: "幻影Wifi-v2.995",
          imgsrc: Pinlogo,
        },
        {
          href: "https://108878.xyz/",
          title: "幻影Magik驱动",
          imgsrc: Pinlogo,
        },
        {
          href: "https://108878.xyz/",
          title: "CDLinux",
          imgsrc: Pinlogo,
        },
        {
          href: "https://108878.xyz/",
          title: "Kali Linux",
          imgsrc: Pinlogo,
        },
      ],
    };
  },
};
</script>

<style>
.Headerd-navbar {
  position: sticky;
  top: 0;
  z-index: 1071;
  background-color: #2196f3;
  min-height: 4rem;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
}

.container {
  display: flex;
  /* 让一行中的元素平均分配宽度 */
  justify-content: space-around;
  align-items: center;
  /* 元素在一行放不下时自动换行 */
  flex-wrap: wrap;
}
.container .box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* 让元素垂直排列 这里就是让包含图片的div和文字垂直排列 */
  flex-direction: column;
  width: 140px;
  height: 150px;
  margin: 0px;
  /* 鼠标放上去变成小手 */
  cursor: pointer;
}
.container .box .img {
  /* 这里让图片在盒子里垂直+水平居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  /* 圆角属性 */
  border-radius: 20px;
  /* 盒子阴影 */
  box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2),
    -18px -18px 30px rgba(255, 255, 255, 1);
  /* 过渡时间 ease-out是指先快速 后慢速 */
  transition: all 0.2s ease-out;
}
.container .box .img img {
  width: 60px;
  transition: all 0.2s ease-out;
}
.container .box p {
  color: slategrey;
}
.container .box .img:hover {
  /* inset 是内部阴影 默认是外部阴影outset */
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(255, 255, 255, 0.8),
    inset 18px 18px 30px rgba(0, 0, 0, 0.1),
    inset -18px -18px 30px rgba(255, 255, 255, 1);
}
.container .box .img:hover img {
  width: 58px;
}

.boximg {
  width: 100px;
  height: 100px;
}
</style>