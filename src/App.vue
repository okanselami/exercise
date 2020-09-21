<template>
  <div id="app">
    <div id="nav">
      <router-link exact to="/">Event List</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue';
import { Plugin } from 'vue-fragment';

Vue.use(Plugin);
export default {};
</script>

<style lang="scss">
* {
  text-decoration: none;
  margin: 0;
  padding: 0;
  color: inherit;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $colorLightGrey;
  padding-inline-start: 0 !important;
}

#nav {
  padding: 30px;
  font-weight: $bolder;
  color: $color1;
  a {
    font-weight: $bolder;
    color: $color4;

    &.router-link-exact-active {
      color: $colorDark;
    }
  }
}
</style>
