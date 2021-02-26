<template>
  <div>
    <!-- NavBar -->
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
              <b-nav-item href="#">下载</b-nav-item>
              <b-nav-item href="#">特性</b-nav-item>
              <b-nav-item href="#">文档与帮助</b-nav-item>
              <b-nav-item href="#">技术支持</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
    <main>
      <!-- 下载 -->
      <section>
        <div class="bg pt-3 pt-sm-5 pb-3">
          <article class="mx-auto" style="max-width: 1406px">
            <div class="p-2 m-3">
              <div class="mx-auto d-flex flex-wrap align-items-center">
                <div
                  class="order-md-2 text-center flex-grow-1"
                  style="max-width: 680px"
                >
                  <img
                    src="../assets/logo.png"
                    alt="logo"
                    width="240px"
                    height="240px"
                  />
                </div>
                <div
                  class="order-md-1 p-auto flex-grow-1"
                  style="max-width: 680px"
                >
                  <div class="mr-auto ml-auto mt-3" style="color: #fff">
                    <h2>幻影科技</h2>
                    <p>幻影Pin是一款通过跑Pin绕过密码输入的Wifi破解软件。</p>
                  </div>
                  <div class="row justify-content-lg-center">
                    <b-button
                      class="mb-3 mx-auto text-center p-2 col-md-4 col-lg-3 button"
                      variant="outline-light"
                      >幻影WIIFI-v2.995</b-button
                    >
                    <b-button
                      class="mb-3 mx-auto text-center p-2 col-md-4 col-lg-3 button"
                      variant="outline-light"
                      >幻影Pin-v1.75</b-button
                    >
                    <b-button
                      class="mb-3 mx-auto text-center p-2 col-md-4 col-lg-3 button"
                      variant="outline-light"
                      >幻影Pin-v4.2</b-button
                    >
                    <b-button
                      class="mb-3 mx-auto text-center p-2 col-md-4 col-lg-3 button"
                      variant="outline-light"
                      >幻影Pin-v4.2</b-button
                    >
                    <b-button
                      class="mb-3 mx-auto text-center p-2 col-md-4 col-lg-3 button"
                      variant="outline-light"
                      >幻影Pin驱动自动切换工具</b-button
                    >
                    <b-button
                      class="mb-3 mx-auto text-centerp-2 col-md-4 col-lg-3 button"
                      variant="outline-light"
                      >CDLinux</b-button
                    >
                    <b-button
                      class="mb-3 mx-auto text-center p-2 col-md-4 col-lg-3 button"
                      variant="outline-light"
                      >Kail Linux</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <!-- 特性 -->
      <section>
        <div class="mx-5" style="min-height: 200px">
          <article class="mx-5">
            <div class="mx-5">
              <div class="mx-5">
                <h2 class="text-center">软件特性</h2>
                <div class="row">
                  <div>
                    <img
                      src="https://108878.xyz/_nuxt/img/header-code.649d95a.png"
                      alt="12"
                    />
                  </div>
                  <div>
                    <img
                      src="https://108878.xyz/_nuxt/img/header-code.649d95a.png"
                      alt="12"
                    />
                  </div>
                  <div>
                    <img
                      src="https://108878.xyz/_nuxt/img/header-code.649d95a.png"
                      alt="12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
</style>
