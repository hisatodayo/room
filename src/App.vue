<template lang="pug">
#app
  router-view
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  html, body, div, span, iframe,
  h1, h2, h3, h4, h5, h6, p, a, img,
  dl, dt, dd, ol, ul, li, form, article, 
  aside, footer, header, nav, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  ol, ul {
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
  input, button, textarea, select {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  img {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
</style>
