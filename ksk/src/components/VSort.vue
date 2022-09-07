<template>
  <v-select
    v-model="selectedSort"
    :data="sortData"
    initial-value="Сортировка"
    class="select-sort"
    @input="selectSort"
  >
    <template #default="{ item }">
      <div class="select-sort-item">
        <div class="select-sort-item__text">
          {{ item.title }}
        </div>
        <div class="select-sort-item__icon">
          <component :is="item.icon" />
        </div>
      </div>
    </template>
    <template #selected="{ value }">
      {{ value?.title }}
      <component
        :is="value.icon"
        v-if="value?.value"
      />
    </template>
  </v-select>
</template>

<script>
import VSelect from './VSelect.vue';
import SortUpIcon from '../assets/icons/arrow-sort-up.svg';
import SortDownIcon from '../assets/icons/arrow-sort-down.svg';
import Sort from '../enums/Sort';

export default {
  name: 'HomeView',
  components: {
    VSelect,
    SortUpIcon,
    SortDownIcon,
  },
  data() {
    return {
      sortData: [
        {
          title: 'Номер накладной',
          icon: 'sort-up-icon',
          value: Sort.asc,
        },
        {
          title: 'Номер накладной',
          icon: 'sort-down-icon',
          value: Sort.desc,
        },
      ],
      selectedSort: null,
    };
  },
  methods: {
    selectSort(val) {
      this.$store.dispatch('sortCards', val.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .select-sort{
    width: 232px;
  }
  .select-sort{
    &-item{
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__icon{
        font-size: 16px;
      }
    }
  }

  @media all and (max-width: 600px) {
    .select-sort{
      width: 100%;
    }
  }
</style>
