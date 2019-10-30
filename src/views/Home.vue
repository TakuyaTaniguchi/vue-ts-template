<template>
  <div class="home">
    <p>{{ greetText }}</p>
    <p>挨拶した回数 : {{ count }}回</p>
    <p>
      <MyButton :greet="greetText" @click="onMyButtonClick"></MyButton>
    </p>
    <p>
      <ResetButton v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
import ResetButton from '@/components/ResetButton.vue'

@Component({
  components: {
    ResetButton,
    MyButton,
  },
})
export default class Home extends Vue {
  private count: number = 0
  public greetText: string = 'Hello'

  public onMyButtonClick(count: number) {
    // ← 引数で受け取る
    this.count = count
    this.greetText = 'こんにちは'
  }
}
</script>
