本リポジトリは技術書典6で頒布された技術同人誌「jQuery to Vue.jsで学ぶ レガシーフロントエンド安全改善ガイド」向けのサンプルコードです。

ブランチについて
-----

 * `master` : Vue.js完了化後の状態です。章に沿って修正をコミットとして積んでいます。
 * `legacy_code` : レガシーコードの初期状態です。
 * `chapter7_vue_observable` : 「7章 Vue.jsと状態管理 - Vue.observable」の実装例です。
 * `chapter7_vuex` : 「7章 Vue.jsと状態管理 - Vuex」の実装例です。
 * `chapter7_without_eventbus` : 「7章 Vue.jsと状態管理 - Vue.observable をEventBus の代替とする」の実装例です。

各種コマンドについて
-----

パッケージのインストール

```
npm install
```

webpackビルド

```
npx webpack --mode development

# 変更を監視して自動ビルドする場合
npx webpack --mode development -w
```

テストの実行

```
# すべてを実行
npx jest

# E2Eテストのみ実行
npx jest ./spec/e2e.spec.js
# ビジュアルリグレッションテストのみ実行
npx jest ./spec/visual.spec.js
# HTMLベースのスナップショットテストのみ実行
npx jest ./spec/snapshot.spec.js

# スナップショットの更新
npx jest --updateSnapshot
```
