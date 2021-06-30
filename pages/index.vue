<template>
  <div id="HYpage">
    <!-- NavBar -->
    <!-- <Header /> -->
    <main>
      <!-- 下载 -->
      <!-- <Download /> -->
      <!-- 特性 -->
      <!-- <Features /> -->
      <!-- <Docs /> -->

      <!-- <Technical /> -->
    </main>
    <!-- <Footer /> -->
    <CreateDictionary />
  </div>
</template>


<script>
import Header from "./header/index.vue";
import Download from "./main/download";
import Features from "./main/Features";
import Docs from "./main/Docs";
import Technical from "./main/Technical";
import Footer from "./fooer/index";
export default {
  data() {
    return {
      Header: "Header",
    };
  },
  components: {
    Header,
    Download,
    Features,
    Docs,
    Technical,
    Footer,
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

.bg {
  background: linear-gradient(180deg, #1867c0, #5cbbf6);
  /* min-height: 40rem; */
  padding: 0 15px;
}

.button {
  min-width: 280px;
  min-height: 50px;
}
.w-420 {
  max-width: 420px;
}
</style>
