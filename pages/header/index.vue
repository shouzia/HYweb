<template>
  <header class="Headerd-navbar px-auto">
    <div>
      <b-navbar toggleable="lg" type="dark" class="">
        <b-navbar-brand href="#"
          ><img
            src="../assets/logo.png"
            alt="logo"
            width="40px"
            height="40px"
          /><span class="pl-2">幻影官网</span></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- <b-nav-item href="#">下载</b-nav-item>
            <b-nav-item href="#">特性</b-nav-item>
            <b-nav-item href="#">文档与帮助</b-nav-item>
            <b-nav-item href="#">技术支持</b-nav-item> -->

            <b-nav-item
              v-for="item in Navarr"
              :key="item.Navtitle"
              :href="item.Navhref"
              >{{ item.Navtitle }}</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      Navarr: [
        { Navtitle: "下载", Navhref: "#Download" },
        { Navtitle: "特性", Navhref: "#Features" },
        { Navtitle: "文档与技术", Navhref: "#Docs" },
        { Navtitle: "技术支持", Navhref: "#Technical" },
      ],
    };
  },

  methods: {
    jump(index) {
      let jump = document.querySelectorAll(".d_jump");
      // 获取需要滚动的距离
      let total = jump[index].offsetTop;
      // Chrome
      document.body.scrollTop = total;
      // Firefox
      document.documentElement.scrollTop = total;
      // Safari
      window.pageYOffset = total;
    },
  },
};
</script>

<style>
</style>