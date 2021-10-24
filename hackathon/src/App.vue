<template>
  <div id="app">
    <div class="header">
      <div class="wrapper">
        <div class="header__logo">
          <img src="@/assets/img/logo.svg" alt="logo">
        </div>
        <div class="header__title">Сервис распознавания аудио</div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Default Title',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp'
  }
}
</script>

<style lang="scss">
html, body{
  height: 100%;
}
#app {
  background-color: $body-color;
  font: 400 14px/1.5 $font-family;
  color: $text-color;
  height: 100%;
}
.header{
  height: 54px;
  background-color: $main-color;
  width: 100%;
  position: relative;

  & .wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__logo{
    position: absolute;
    left: 20px;
    top: 6px;
  }
  
  &__title{
    font-family: $font-family;
    color: $body-color;
    font-size: 16px;
    line-height: 19px;
  }
}
</style>
