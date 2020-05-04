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
    <template>
      <div>{{ Items }}</div>
    </template>
    <div @click="textClick">null:{{ text }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import MyButton from '@/components/MyButton.vue'
import ResetButton from '@/components/ResetButton.vue'

@Component({
  components: {
    ResetButton,
    MyButton,
  },
  watch: {
    count: function() {
      console.log('countをウォッチ')
    },
  },
})
export default class Home extends Vue {
  private count: number = 0
  private isRegulars: boolean = false
  public greetText: string = 'Hello'

  private text = null as string | null

  textClick() {
    this.text = 'text'
  }
  public countChanged() {
    if (this.count === 5) {
      alert('常連になりました。')
    }
  }

  get Items() {
    return [{ id: 100, name: 'Taro' }, { id: 101, name: 'Hanako' }]
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
