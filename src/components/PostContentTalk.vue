<template lang="pug">
  div.item
    div.item_head
      div.item_head_thum
        img(
          src="@/assets/img/thum.jpg"
        )
      p.item_head_name hisato
      p.item_head_skill beginner
    div.item_asset
      video(
        src="@/assets/post/post_1.mp4"
        muted
        autoplay
        loop
      )
    p.item_lead 宮崎ちゅーぶううう
</template>

<script>
  export default {
    name: 'PostContentTalk'
  }
</script>

<style lang="scss" scoped>
  .item {
    max-width: 200px;
    background: #07597c;
    border-radius: 6px;
    padding: 5px 10px;
    &:nth-child(n+2) {
      margin-top: 15px;
    }
    &_head {
      display: flex;
      align-items: center;
      &_thum {
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
        img {
          display: block;
          height: 100%;
        }
      }
      &_name {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
      }
      &_skill {
        background: skyblue;
        border-radius: 4px;
        color: #fff;
        font-size: 12px;
        padding: 2px 5px;
        margin-left: auto;
      }
    }
    &_asset {
      width: 125px;
      height: 125px;
      overflow: hidden;
      position: relative;
      margin: 10px 0 0;
      video {
        display: block;
        position: absolute;
        top: 40%;
        left: 90%;
        transform: translate(-50%,-50%);
      }
    }
    &_lead {
      margin-top: 10px;
      font-size: 14px;
      color: #fff;
      font-weight: bold;
      padding-left: 5px;
    }
  }
</style>
