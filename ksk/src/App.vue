<template>
  <div id="app">
    <header class="header">
      <div class="container">
        Тестовое задание
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
.header{
  background: linear-gradient(267.21deg,
    #900793 0.16%,
    rgba(134, 4, 137, 0.785707) 0.16%,
    rgba(159, 12, 162, 0.762269) 43.22%,
    rgba(5, 1, 190, 0.734375) 98.12%,
    rgba(0, 28, 126, 0.619792) 100.15%,
    rgba(6, 77, 142, 0.447917) 102.03%,
    rgba(1, 0, 60, 0) 102.73%);
  color: $color-text-light;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 109px 0;
}
@media all and (max-width: 900px) {
  .header {
    padding: 16px 0;
    font-size: 24px;
    line-height: 1.5;
  }
}
</style>
