<template lang="pug">
div.wrap
  //- ヘッダ
  h1.main [チャットルーム選択画面]
  ul.list
    li.item
    div.itemHead 千葉県北側
      div.itemContent
        p ポイント
        p ポイント
        p ポイント
        p ポイント
    div.itemHead 千葉県南側
      div.itemContent
        p ポイント
        p ポイント
        p ポイント
        p ポイント
    div.itemHead 神奈川県
      div.itemContent
        p ポイント
        p ポイント
        p ポイント
        p ポイント
    div.itemHead 茨城県
      div.itemContent
        p ポイント
        p ポイント
        p ポイント
        p ポイント
    div.itemHead 大阪府
      div.itemContent
        p ポイント
        p ポイント
        p ポイント
        p ポイント
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'Top',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color:  #07597c;
}
 .main {
   text-align: center;
   color: #f1a483;
 }
 .list{
   padding: 20px;
   list-style: none;
 }
 .itemHead {
    padding: 0.5em 1em;
    margin: 2em 0;
    color: #0a0a09;
    background: #f1a483;
    border-bottom: solid 6px #cdb1ec;
    border-radius: 9px;
   }
.itemContent {
  display: none;
}
</style>
