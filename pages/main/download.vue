<template>
  <section id="Download" class="bg">
    <div class="py-3">
      <div class="m-auto max row">
        <div class="col my-auto">
          <div class="my-4 text-color">
            <h2>幻影科技</h2>
            <p>幻影Pin是一款通过跑Pin绕过密码输入的Wifi破解软件。</p>
          </div>
          <div class="row text-center">
            <!-- <div
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
            </div> -->

            <div class="col mx-auto button align-self-center">
              <b-button
                class="button mb-3 my-4"
                variant="outline-light"
                to="/download"
                >即刻下载</b-button
              >
            </div>
          </div>
        </div>
        <div class="col text-center align-self-center">
          <img src="../assets/logo.png" alt="" width="200px" height="200px" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.max {
  max-width: 1500px;
  min-height: 40vh;
}
.text-color {
  color: white;
}
</style>


