<template>
  <section id="Download" class="bg">
    <div class="py-3">
      <div class="m-auto max row">
        <div class="col">
          <div class="my-4 text-color">
            <h2>幻影科技</h2>
            <p>幻影Pin是一款通过跑Pin绕过密码输入的Wifi破解软件。</p>
          </div>
          <div class="row text-center">
            <div
              class="col mx-auto button"
              v-for="item in dlApp"
              :key="item.title"
            >
              <b-button
                class="button mb-3"
                variant="outline-light"
                @click="download(item.href)"
                >{{ item.title }}</b-button
              >
            </div>
          </div>
        </div>
        <div class="col text-center align-self-center">
          <img src="../assets/logo.png" alt="" width="240px" height="240px" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dlApp: [
        { href: "https://108878.xyz/", title: "幻影Pin-v1.75" },
        { href: "https://108878.xyz/", title: "幻影Pin-v4.0" },
        { href: "https://108878.xyz/", title: "幻影Pin-v4.2" },
        { href: "https://108878.xyz/", title: "幻影Wifi-v2.995" },
        { href: "https://108878.xyz/", title: "幻影Pin驱动自动切换工具" },
        { href: "https://108878.xyz/", title: "CDLinux" },
        { href: "https://108878.xyz/", title: "Kali Linux" },
      ],
    };
  },
  methods: {
    download: function (url) {
      window.location.href = url;
    },
  },
};
</script>

<style>
.max {
  max-width: 1500px;
  min-height: 30vh;
}
.text-color {
  color: white;
}
</style>


