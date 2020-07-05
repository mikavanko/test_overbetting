<template>
  <header class="header" :class="{opened :hoverIndex > -1}">
    <div class="header__top">
      <div class="container">
        <a href="#" class="header__top__item">Режим работы</a>
        <a href="#" class="header__top__item">Правила посещения</a>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container" :class="{opened :hoverIndex > -1}">
        <div class="header__bottom__item">
          <a href="#" class="header__logo">LOGOTYPE</a>
        </div>
        <div class="header__bottom__item">
          <ul class="header__menu">
            <li class="header__menu__item" 
                @mouseover="setHover(idx)"
                @mouseleave="setHover(-1)"
                v-for="(item, idx) in menu"
                :key="idx"
                >
              <a href="#" class="header__menu__link">{{item.name}}</a>

              <ul class="header__menu__sub" v-if="item.sub && hoverIndex === idx">
                <li class="header__menu__sub__item" 
                    v-for="(subItem, iidx) in item.sub"
                    :key="iidx"
                    >
                  <a href="#" class="header__menu__sub__link">{{subItem.name}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="header__bottom__item">
          <div class="header__auth">
            <a href="#" class="header__auth__link">Регистрация</a>
            <a href="#" class="header__auth__link">Вход</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: function(){
    return {
      hoverIndex: -1,
      menu:[
        {
          name: 'Меню',
          sub: [
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
          ]
        },
        {
          name: 'Меню',
          sub: [
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
          ]
        },
        {
          name: 'Меню',
          sub: [
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
          ]
        },
        {
          name: 'Меню',
          sub: [
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
          ]
        },
        {
          name: 'Меню',
          sub: [
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
          ]
        },
        {
          name: 'Меню',
          sub: [
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
            {
              name: 'Меню'
            },
          ]
        },
      ]
    }
  },
  methods:{
    setHover(idx){
      this.hoverIndex = idx;
    }
  }
}
</script>

<style lang="scss">
</style>
