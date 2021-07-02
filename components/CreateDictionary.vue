<template>
  <div class="Dictionary">
    <!-- <select v-model="county">
      <option v-for="item in countyArr" :key="item.name" :value="item.name">
        {{ item.name }}
      </option>
    </select> -->

    <div class="col-ls-6 col-sm-8 mx-auto text-center">
      <h3 style="color: #ff5f6d">全国手机号生成[待开发]</h3>
      <select v-model="province" @change="getCity()" disabled>
        <option v-for="item in arr" :key="item.name" :value="item.name">
          {{ item.name }}
        </option>
      </select>
      <select v-model="city" @change="getCounty()" disabled>
        <option v-for="item in cityArr" :key="item.name" :value="item.name">
          {{ item.name }}
        </option>
      </select>
    </div>

    <hr />
    <div class="col-ls-6 col-sm-8 mx-auto text-center">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-9 text-center mx-auto">
          <b-input-group class="mx-auto Prefix" size="md" prepend="前缀:">
            <b-form-input autocomplete="off" v-model="Prefix"></b-form-input>
          </b-input-group>

          <b-input-group class="mx-auto Prefix mt-3" size="md" prepend="后缀:">
            <b-form-input autocomplete="off" v-model="suffix"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-9 text-center mx-auto">
          预先显示
          <br />
          {{ Prefix + suffix }}
        </div>
      </div>
    </div>
    <hr />
    <div class="col-ls-6 col-sm-8 mx-auto text-center">
      <b-input-group
        class="mx-auto DictionaryTitle"
        size="md"
        prepend="文件名:"
        append=".txt"
      >
        <b-form-input v-model="title" autocomplete="off"></b-form-input>
      </b-input-group>
      <b-button class="CreateBtn mt-4" @click="BtnClick()">生成</b-button>
    </div>
    <!-- 生成字典 -->
  </div>
</template>

<script>
import { arrAll } from "../assets/items.js";
import { saveAs } from "file-saver";
export default {
  data() {
    return {
      Prefix: "", //前缀
      suffix: "", //后缀
      title: "",
      DictionaryIndex: 1,
      province: "", // 省份
      city: "", // 市
      county: "", // 县/区
      arr: arrAll, // 所有城市的数据，已经在items.js里面定义了
      cityArr: [],
      countyArr: [],
      password: "value\r\ntest",
    };
  },
  methods: {
    BtnClick() {
      let link = new Blob([this.password], {
        type: "text/plain;charset=utf-8",
      });
      if (this.title) {
        saveAs(link, this.title);
      } else {
        saveAs(link, "新建字典" + this.DictionaryIndex);
        this.DictionaryIndex++;
      }
    },
    getCity() {
      for (var i = 0; i < this.arr.length; i++) {
        var obj = this.arr[i];
        if (this.province == obj.name) {
          this.cityArr = obj.sub;
        }
      }
    },
    getCounty() {
      for (var i = 0; i < this.cityArr.length; i++) {
        var obj = this.cityArr[i];
        if (this.city == obj.name) {
          this.countyArr = obj.sub;
        }
      }
    },
  },
};
</script>

<style>
.Dictionary {
  width: 100vw;
  height: 100vh;

  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.CreateBtn {
  width: 50%;
  border-color: v;
  color: rgb(52, 152, 219);
  background-color: transparent;
  border-radius: 25px;
}
.CreateBtn:hover {
  background-color: rgb(52, 152, 219);
  color: #fff;
  border-color: rgb(41, 128, 185);
}
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show > .btn-secondary.dropdown-toggle {
  background-color: rgb(52, 152, 219);
  color: #fff;
  border-color: rgb(41, 128, 185);
}
.DictionaryTitle {
  width: 50%;
}
.Prefix {
  width: 80%;
}
.input-group-text {
  background-color: transparent;
  border-color: rgb(41, 128, 185);
}
.form-control {
  background-color: transparent;
  border-color: rgb(41, 128, 185);
}
</style>