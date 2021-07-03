<template>
  <section id="Download" class="bg firstbg animated fadeInDownBig">
    <div class="py-3">
      <div class="max row">
        <div class="col my-auto animated fadeIn">
          <div class="my-4 text-color">
            <h2>幻影科技</h2>
            <p>幻影Pin是一款通过跑Pin绕过密码输入的Wifi破解软件。</p>
          </div>
          <div class="row text-center">
            <div class="col mx-auto button align-self-center">
              <b-button
                class="button mb-3 my-4 link-down mx-2"
                variant="outline-light"
                to="/download"
                ><p>即刻下载</p></b-button
              >
              <b-button
                class="button mb-3 my-4 link-down mx-2"
                variant="outline-light"
                to="/CreateDictionary"
                ><p>字典生成</p></b-button
              >
            </div>
          </div>
        </div>
        <div class="col text-center align-self-center animated fadeIn">
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
  justify-content: center;
  align-items: center;
  margin: auto;
}

@media screen and (max-width: 480px) {
  .firstbg {
    min-height: 90vh;
  }
  .max {
    max-width: 1500px;
    min-height: 40vh;
    justify-content: center;
    align-items: center;
    margin: 20% 0%;
  }
}
.text-color {
  color: white;
}
.link-down {
  height: 40px;
}
.link-down p {
  line-height: 40px;
  margin: 0;
}
</style>


