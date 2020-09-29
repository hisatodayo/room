<template lang="pug">
div
  Header
  .contents
    h2.ttl room list
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
        },
        {
          areaName: '千葉南',
          pointArray: [
            'マルキ',
            'J’s前',
            '白渚',
            '花篭前',
            '千歳',
            '千倉',
            '平砂浦ファミリーパーク下'
          ]
        },
        {
          areaName: '湘南',
          pointArray: [
            '由比ガ浜',
            '七里ガ浜正面',
            '鎌高前',
            '鵠沼',
            '水族館前',
            '地下道前',
            '辻堂正面',
            '辻堂第2駐車場前',
            'チサン',
            'パーク',
            '平塚生コン前',
            '大磯',
            '大磯源二',
            '湯河原吉浜'
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
  line-height: 30px;
  span {
    display: inline-block;
  }
}
.contents {
  width: 95vw;
  margin: 10px auto 0;
  padding: 10px;
  background: $main-color;
  border-radius: 6px;
}
.chatList {
  margin-top: 5px;
  &_item {
    display: block;
    padding: 15px 10px 10px;
    background: $sub-color;
    color: $forth-color;
    border-radius: 6px;
    &:nth-child(n+2) {
      margin-top: 10px;
    }
    &_toggle {
      margin-top: 5px;
      padding: 10px;
      background: $light-color;
      border-radius: 6px;
      &_item {
        padding: 5px 0;
      }
    }
  }
}
.anchor {
  color: $forth-color;
  text-decoration: underline;
  display: block;
}
</style>
