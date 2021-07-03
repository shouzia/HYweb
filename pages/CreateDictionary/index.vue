<template>
  <div class="Dictionary">
    <Header />

    <!-- <select v-model="county">
      <option v-for="item in countyArr" :key="item.name" :value="item.name">
        {{ item.name }}
      </option>
    </select> -->

    <!-- <div class="col-ls-6 col-sm-8 mx-auto text-center " style="min-height:10%">
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
    </div> -->

    <!-- <hr /> -->
    <div
      class="col-ls-6 col-sm-8 mx-auto text-center mt-5"
      style="min-height: 20%"
    >
      <div
        class="row"
        style="height: 100%; justify-content: center; align-items: center"
      >
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
          <p v-show="Prefixflag">
            {{ Lastfix + "0000" }}<br />
            {{ Lastfix + "0001" }}<br />
            {{ Lastfix + "0002" }}<br />
            {{ Lastfix + "9998" }}<br />
            {{ Lastfix + "9999" }}<br />
          </p>
          <p v-show="suffixflag">
            {{ "0000" + Lastfix }}<br />
            {{ "0001" + Lastfix }}<br />
            {{ "0002" + Lastfix }}<br />
            {{ "9998" + Lastfix }}<br />
            {{ "9999" + Lastfix }}<br />
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div class="col-ls-6 col-sm-10 mx-auto text-center">
      <b-input-group
        class="mx-auto col-sm-10 col-md-8 col-lg-8"
        size="md"
        prepend="文件名:"
        append=".txt"
      >
        <b-form-input v-model="title" autocomplete="off"></b-form-input>
      </b-input-group>
      <b-button
        class="CreateBtn mt-4 col-sm-10 col-md-8 col-lg-8"
        @click="BtnClick()"
        >生成</b-button
      >
      <b-progress
        class="mt-4"
        :value="progressValue"
        variant="success"
      ></b-progress>
    </div>
    <!-- 生成字典 -->
    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title class="modal-dialog-centered"> 出现错误 </template>
      <div class="d-block text-center">
        <h3>字典最小长度不能低于8</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
        >关闭</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import { arrAll } from "../../assets/items.js";
import { saveAs } from "file-saver";
import Header from "../header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      Prefix: "", //前缀
      Prefixflag: true,
      suffix: "", //后缀
      suffixflag: false,
      Lastfix: "",
      createPassword: "",
      title: "",
      DictionaryIndex: 1,
      province: "", // 省份
      city: "", // 市
      county: "", // 县/区
      arr: arrAll, // 所有城市的数据，已经在items.js里面定义了
      cityArr: [],
      countyArr: [],
      password: "",
      progressValue: 0,
      timer: "",
    };
  },

  watch: {
    Prefix(nval, oval) {
      // console.log(nval, oval);          this.Lastfix = this.Prefix;
      this.Lastfix = this.Prefix;
      this.suffixflag = false;
      this.Prefixflag = true;
      this.createPassword = nval + this.suffix;
    },
    suffix(nval, oval) {
      this.Lastfix = this.suffix;
      // console.log(nval, oval);
      this.Prefixflag = false;
      this.suffixflag = true;
    },
    createPassword(nval) {
      if (this.Prefix || this.suffix) {
        if (this.Prefix) {
          // this.Lastfix = this.Prefix;
        }
        if (this.suffix) {
          // this.Lastfix = this.suffix;
        }
      } else {
        // alert("你必须输入4个字符的前缀或后缀");
      }
    },
  },
  methods: {
    BtnClick() {
      if (this.Lastfix.length < 4) {
        this.$bvModal.show("bv-modal-example");
      } else {
        this.createPrefix();
        this.SetTimer();
        let link = new Blob([this.password], {
          type: "text/plain;charset=utf-8",
        });
        if (this.title) {
          saveAs(link, this.title);
        } else {
          saveAs(link, "新建字典" + this.DictionaryIndex);
          this.DictionaryIndex++;
        }
      }
    },

    createPrefix() {
      this.password = "";
      if (this.Prefixflag) {
        for (let i = 0; i <= 9999; i++) {
          if (i < 10) {
            let a = "000";
            let b = a + i + "\r\n";
            let c = this.Lastfix + b;
            this.password += c;
          }
          if (i > 9 && i < 100) {
            let a = "00";
            let b = a + i + "\r\n";
            let c = this.Lastfix + b;
            this.password += c;
          }
          if (i > 99 && i < 1000) {
            let a = "0";
            let b = a + i + "\r\n";
            let c = this.Lastfix + b;
            this.password += c;
          }
          if (i >= 999) {
            let b = i + "\r\n";
            let c = this.Lastfix + b;
            this.password += c;
          }
        }
      } else {
        for (let i = 0; i <= 9999; i++) {
          if (i < 10) {
            let a = "000";
            let b = a + i;
            let c = b + this.Lastfix + "\r\n";
            this.password += c;
          }
          if (i > 9 && i < 100) {
            let a = "00";
            let b = a + i;
            let c = b + this.Lastfix + "\r\n";
            this.password += c;
          }
          if (i > 99 && i < 1000) {
            let a = "0";
            let b = a + i;
            let c = b + this.Lastfix + "\r\n";
            this.password += c;
          }
          if (i >= 999) {
            let b = i;
            let c = b + this.Lastfix + "\r\n";
            this.password += c;
          }
        }
      }
    },

    SetTimer() {
      this.progressValue = 0;
      this.timer = setInterval(() => {
        this.progressValue += 1;
      }, 100);
      if (this.progressValue >= 100) {
        clearInterval(this.timer);
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
  background-image: linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%);
}
.CreateBtn {
  border-color: rgb(52, 152, 219);
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
.modal-dialog {
  top: 30%;
}
</style>