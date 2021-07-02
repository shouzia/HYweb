<template>
  <div>
    <select v-model="province" @change="getCity()">
      <option v-for="item in arr" :key="item.name" :value="item.name">
        {{ item.name }}
      </option>
    </select>
    <select v-model="city" @change="getCounty()">
      <option v-for="item in cityArr" :key="item.name" :value="item.name">
        {{ item.name }}
      </option>
    </select>
    <!-- <select v-model="county">
      <option v-for="item in countyArr" :key="item.name" :value="item.name">
        {{ item.name }}
      </option>
    </select> -->
    <button @click="BtnClick()">生成</button>
    <!-- 生成字典 -->
  </div>
</template>

<script>
import { arrAll } from "../assets/items.js";
import { saveAs } from "file-saver";
export default {
  data() {
    return {
      province: "", // 省份
      city: "", // 市
      county: "", // 县/区
      arr: arrAll, // 所有城市的数据，已经在items.js里面定义了
      cityArr: [],
      countyArr: [],
      password: "value\r\ntest",
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    BtnClick() {
      let link = new Blob([this.password], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(link, `导出文件时的名字.txt`);
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
</style>