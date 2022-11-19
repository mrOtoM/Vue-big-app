<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

:root {
  --main-gradient: linear-gradient(25deg, #ab335f, #e23445 50%);
  --main-color: #f9d5e5;
  --border-color: 1px solid #f9d5e5;
  --white: rgb(255, 255, 255);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}
</style>
