<template>
  <div class="home">
    <p>{{ greetText }}</p>
    <p>挨拶した回数 : {{ count }}回</p>
    <p v-if="isRegulars">いつもありがとうございます。</p>
    <p>
      <MyButton :greet="greetText" @click="onMyButtonClick"></MyButton>
    </p>
    <p>
      <ResetButton v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator'
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
  private isRegulars: boolean = false
  public greetText: string = 'Hello'

  @Watch('count')
  public countChanged() {
    console.log('Watch')
    if (this.count === 5) {
      alert('常連になりました。')
    }
  }

  public onMyButtonClick(count: number) {
    // ← 引数で受け取る
    this.count = count
    if (this.count >= 5) {
      this.isRegulars = true
    }
    this.greetText = 'こんにちは'
  }
}
</script>
