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
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  background-color: $body-color;
  font: 400 14px/1.5 $font-family;
  color: $text-color;
}
.wrapper{
  max-width: 1280px;
  width: 100%;
  padding: 0 15px;
  margin:  0 auto;
  position: relative;
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
