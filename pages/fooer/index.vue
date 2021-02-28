<template>
  <div class="footer">
    <div class="row">
      <div class="col text=left">
        HYTEAM 2015-{{ new Date().getFullYear() }}
      </div>
      <div class="col text-right">
        <a href="https://beian.miit.gov.cn/">浙ICP备19018912号-2</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1071;
  min-height: 25px;
  background-color: #f5f5f5;
  box-shadow: 0 0 0 0 rgb(0 0 0 / 20%), 0 0 0 0 rgb(0 0 0 / 14%),
    0 0 0 0 rgb(0 0 0 / 12%);
}
</style>