<template>
  <header class="Headerd-navbar px-auto">
    <div>
      <b-navbar toggleable="lg" type="dark" class="">
        <b-navbar-brand href="/" to="/"
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
            <b-nav-item
              v-for="item in ToNavLink"
              :key="item.Navtitle"
              :to="item.Navhref"
              >{{ item.Navtitle }}</b-nav-item
            >
            <b-nav-item
              v-for="item in Navarr"
              :key="item.Navtitle"
              v-scroll-to="{
                el: item.Navhref,
                offset: -280,
              }"
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
        { Navtitle: '下载', Navhref: '#Download' },
        { Navtitle: '特性', Navhref: '#Features' },
        { Navtitle: '文档与技术', Navhref: '#Docs' },
        { Navtitle: '技术支持', Navhref: '#Technical' },
      ],
      ToNavLink: [{ Navtitle: '首页', Navhref: '/' }],
    }
  },
}
</script>

<style>
</style>