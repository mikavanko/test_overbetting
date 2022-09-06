<template>
  <div class="home">
    <div class="container grid">
      <div class="filter">
        <the-filter />
      </div>
      <div class="content-header">
        <v-sort />
      </div>
      <div class="content-nav">
        <router-link
          to="/cards"
          class="nav-link nav-link--table"
        >
          <cards-icon />
        </router-link>
        <router-link
          to="/table"
          class="nav-link nav-link--cards"
        >
          <table-icon />
        </router-link>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheFilter from '../components/TheFilter.vue';
import VSort from '../components/VSort.vue';
import TableIcon from '../assets/icons/table.svg';
import CardsIcon from '../assets/icons/cards.svg';
import cardsData from '../assets/cards.json';

export default {
  name: 'HomeView',
  components: {
    TheFilter,
    TableIcon,
    CardsIcon,
    VSort,
  },
  mounted() {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(cardsData);
      }, 300);
    }).then((res) => {
      this.$store.dispatch('loadCards', res);
    });
  },
};
</script>

<style lang="scss" scoped>
  .home{
    padding: 32px 0;
  }
  .grid{
    display: grid;
    grid-template-columns: 280px 1fr 80px;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
            "filter content-header content-nav"
            "filter content content";
    gap: 16px;
  }
  .filter{
    grid-area: filter;
  }
  .content{
    grid-area: content;
  }
  .content-header{
    grid-area: content-header;
    box-shadow: 0px 4px 12px #E7E7E7;
    border-radius: 3px;
    padding: 16px;
    background-color: $color-bg-light;
    z-index: 1;
  }
  .content-nav{
    grid-area: content-nav;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-link{
    background-color: $color-bg-light;
    border: 1px solid $border-color-style-4;
    width: 40px;
    height: 40px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-text-active;
    transition: .3s ease;

    &--cards{
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &--table{
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &.router-link-exact-active{
      background-color: $color-bg-active;
    }
  }
</style>
