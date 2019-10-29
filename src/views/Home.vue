<template>
  <div class="home">
    <MyButton></MyButton>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script　lang="ts">
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import {Component, Vue} from "vue-property-decorator"
import MyButton from "@/components/MyButton.vue";
// import Component from 'vue-class-component';

@Component({
    components: {
        MyButton,
    },
})
export default class Home extends Vue {}
</script>



