# room

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Vue スタイルガイド
#### コンポーネント/インスタンス オプション順序
1. 副作用 (コンポーネント外への影響)
  + el

2. グローバルな認識 (コンポーネントを超えた知識が必要)
  + name
  + parent

3. コンポーネントの種類 (コンポーネントの種類を変更)
  + functional

4. テンプレートの修飾子 (テンプレートのコンパイル方法を変更)
  + delimiters
  + comments

5. テンプレートの依存関係 (テンプレートで使用されるアセット)
  + components
  + directives
  + filters

6. 合成 (プロパティをオプションにマージ)
  + extends
  + mixins

7. インタフェース (コンポーネントへのインタフェース)
  + inheritAttrs
  + model
  + props/propsData

8. hローカルの状態 (ローカル リアクティブ プロパティ)
  + data
  + computed

9. イベント (リアクティブなイベントによって引き起こされたコールバック)
  + watch

10. ライフサイクルイベント (呼び出される順)
  + beforeCreate
  + created
  + beforeMount
  + mounted
  + beforeUpdate
  + updated
  + activated
  + deactivated
  + beforeDestroy
  + destroyed

11. リアクティブではないプロパティ (リアクティブシステムから独立したインスタンス プロパティ)
  + methods

12. レンダリング (コンポーネント出力の宣言的な記述)
  + template/render
  + renderError

#### 要素の属性の順序
1. 定義 (コンポーネントオプションを提供)
  + is

2. リスト描画 (同じ要素の複数のバリエーションを作成する)
  + v-for

3. 条件 (要素が描画/表示されているかどうか)
  + v-if
  + v-else-if
  + v-else
  + v-show
  + v-cloak

4. 描画修飾子 (要素の描画方法を変更)
  + v-pre
  + v-once

5. グローバルな認識 (コンポーネントを超えた知識が必要)
  + id

6. 一意の属性 (一意の値を必要とする属性)
  + ref
  + key

7. 双方向バインディング (バインディングとイベントの結合)
  + v-model
  
8. その他の属性 (すべての指定されていないバインドされた属性とバインドされていない属性)

9. イベント (コンポーネントのイベントリスナ)
  + v-on

10. コンテンツ (要素のコンテンツを上書きする)
  + v-html
  + v-text
