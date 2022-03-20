<template>
  <div>
    <Header />
    <div class="container animated fadeIn" ref="DownloadPage">
      <div class="box text-center" v-for="item in dlApp" :key="item.title">
        <div class="img" @click="download(item.href)">
          <img :src="item.imgsrc" alt="" />
        </div>
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="tencent-ad">
      <a
        class="tencent-ad-bg"
        href="https://blog.shouzi.xyz/index.php/2022/03/20/tencet-cloud/"
      >
        <div class="text-ad">
          <h1>腾讯云优惠汇总</h1>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Pinlogo from '../assets/logo.png'
import CDlinux from '../assets/CDlinux.jpg'
import kail from '../assets/kail.svg'
import hywifi from '../assets/hywifi.png'
import Shouzi from '../assets/shouzi.jpg'
import Header from '../header/index.vue'
export default {
  components: {
    Header,
  },
  methods: {
    download: function (url) {
      window.location.href = url
    },
  },
  data() {
    return {
      dlApp: [
        {
          href: 'https://xz.108878.xyz/%E5%B9%BB%E5%BD%B1pin1.75.apk',
          title: '幻影Pin-v1.75',
          imgsrc: Pinlogo,
        },
        {
          href: 'https://xz.108878.xyz/%E5%B9%BB%E5%BD%B1PinLNbeta4.apk',
          title: '幻影Pin-v4.0',
          imgsrc: Pinlogo,
        },
        {
          href: 'https://xz.108878.xyz/hypin_fix2.apk',
          title: '幻影Pin-v4.2',
          imgsrc: Pinlogo,
        },
        {
          href: 'https://xz.108878.xyz/%E5%B9%BB%E5%BD%B1WIFI_2.9995(%E6%94%AF%E6%8C%81%E5%AE%89%E5%8D%934-7.1).apk',
          title: '幻影Wifi-v2.995',
          imgsrc: hywifi,
        },
        {
          href: 'https://xz.108878.xyz/%E5%B9%BB%E5%BD%B1Wifi(%E9%80%82%E9%85%8D%E5%AE%89%E5%8D%938.0%E4%BB%A5%E4%B8%8A).apk',
          title: '幻影Wifi(安卓8.0以上)',
          imgsrc: hywifi,
        },
        {
          href: 'https://xz.108878.xyz/%E5%B9%BB%E5%BD%B1pin-magisk%E9%A9%B1%E5%8A%A8%E6%8C%82%E8%BD%BD%E6%A8%A1%E5%9D%97v2.5.zip',
          title: '幻影Magik驱动',
          imgsrc: Pinlogo,
        },
        {
          href: 'https://h5ai.shouzi.xyz',
          title: '驱动及其他文件',
          imgsrc: Pinlogo,
        },
        {
          href: 'https://log.shouzi.xyz/index.php/2021/08/18/cdlinuxcrackwifi/',
          title: 'CDLinux使用方法',
          imgsrc: Shouzi,
        },
        {
          href: 'https://xz.108878.xyz/CDlinux.zip',
          title: 'CDLinux',
          imgsrc: CDlinux,
        },
        {
          href: 'https://www.kali.org/downloads/',
          title: 'Kali Linux',
          imgsrc: kail,
        },
      ],
    }
  },
}
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
  width: 200px;
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
  border-radius: 15px;
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
.tencent-ad {
  width: 100vw;
  height: 100px;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  bottom: 0px;
}
.tencent-ad-bg {
  width: 100%;
  height: 100px;
  display: inherit;
  background: url(https://blog.shouzi.xyz/wp-content/uploads/2022/03/hero_pc-484e1a32b23948c20c7daad977b68bd371426a39-scaled.jpg);
  background-position: 40% 20%;
  text-decoration: none;
}
.text-ad {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0px 25%;
}
.text-ad h1 {
  font-size: 35px;
  margin: 0;
}

.tencent-ad-bg:visited {
  text-decoration: none;
  color: #fff;
}
.tencent-ad-bg:hover {
  text-decoration: none;
  color: #fff;
}
@media only screen and (max-width: 960px) {
  .tencent-ad {
    margin-top: 50px;
    width: 100vw;
    height: 100px;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    bottom: 0px;
  }
  .tencent-ad-bg {
    width: 100%;
    height: 100px;
    display: inherit;
    background: url(https://blog.shouzi.xyz/wp-content/uploads/2022/03/hero_pc-484e1a32b23948c20c7daad977b68bd371426a39-scaled.jpg);
    background-position: 55% 20%;
    text-decoration: none;
  }
  .text-ad {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0px 25%;
  }
}
@media only screen and (max-width: 450px) {
  .container .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* 让元素垂直排列 这里就是让包含图片的div和文字垂直排列 */
    flex-direction: column;
    width: 150px;
    height: 150px;
    margin: 0px;
    /* 鼠标放上去变成小手 */
    cursor: pointer;
  }
  .container {
    display: flex;
    /* 让一行中的元素平均分配宽度 */
    justify-content: space-around;
    align-items: center;
    /* 元素在一行放不下时自动换行 */
    flex-wrap: wrap;
  }
  .tencent-ad {
    margin-top: 50px;
    width: 100vw;
    height: 100px;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
    bottom: 0px;
  }
  .tencent-ad-bg {
    width: 100%;
    height: 100px;
    display: inherit;
    background: url(https://blog.shouzi.xyz/wp-content/uploads/2022/03/hero_pc-484e1a32b23948c20c7daad977b68bd371426a39-scaled.jpg);
    background-position: 55% 20%;
    text-decoration: none;
  }
  .text-ad {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-ad h1 {
    font-size: 25px;
    margin: 0;
  }
}
</style>