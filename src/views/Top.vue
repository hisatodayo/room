<template lang="pug">
div
  Header
  .contents
    h2.ttl room一覧
    ul.chatList
      li.chatList_item(
        v-for="(area, areaIndex) in areaArray"
        :key="area.areaName"
        @click="toggleChatList(area.areaName)"
      ) {{area.areaName}}
        ul.chatList_item_toggle(
          v-if="area.pointArray.length !== 0 && activeArea[area.areaName].active"
        )
          li.chatList_item_toggle_item(
            v-for="(point, pointIndex) in area.pointArray"
            :key="point"
          )
            router-link.anchor(:to="'/post'") {{point}}
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'Top',
  components: {
    Header
  },
  data() {
    return {
      areaArray: [
        {
          areaName: '千葉北',
          pointArray: [
            '飯岡マンション下',
            '飯岡信号下',
            '椎名安太郎',
            'かんぽ前',
            '吉崎浜',
            '野手浜',
            '今泉',
            '堀川浜',
            '本須賀',
            '作田',
            '片貝漁港',
            '片貝新堤',
            '豊海',
            '白子',
            '中里',
            '一宮',
            'サンライズ周辺',
            '東浪見',
            '志田下',
            '太東',
            '夷隅',
            '大原'
          ]
        }
      ],
      activeArea: {}
    }
  },
  created: function () {
    this.areaArray.forEach(area => {
      this.$set(this.activeArea, area.areaName, {'active': false})
    })
  },
  methods: {
    toggleChatList: function(area) {
      this.activeArea[area].active = !this.activeArea[area].active
    }
  }
}
</script>

<style lang="scss" scoped>
.ttl {
  text-align: center;
  color: $text-color;
}
.contents {
  width: 95vw;
  margin: 10px auto 0;
  padding: 10px;
  background: $main-color;
}
.chatList {
  margin-top: 15px;
  &_item {
    display: block;
    padding: 5px;
    background: $sub-color;
    color: $text-color;
    &_toggle {
      margin-top: 10px;
      padding: 5px;
      background: $light-color;
    }
  }
}
.anchor {
  color: $dark-color;
  text-decoration: underline;
  display: block;
}
</style>
