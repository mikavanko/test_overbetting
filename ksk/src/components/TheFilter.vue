<template>
  <div class="filter">
    <div class="filter-header">
      Фильтр
    </div>
    <div class="filter-body">
      <div class="filter-group">
        <form class="filter-form">
          <div class="filter-form__title">
            Номер накладной:
          </div>
          <div class="filter-form__item">
            <input
              v-model="numberFilter"
              type="text"
              class="filter-form__input"
              placeholder="Введите фрагмент"
              @input="filterByNumber"
            >
          </div>
        </form>
      </div>
      <div class="filter-group">
        <form class="filter-form">
          <div class="filter-form__title">
            Тип заказа:
          </div>
          <div class="filter-form__item">
            <v-select
              v-model="selectedType"
              :data="typeData"
              @input="selectType"
            >
              <template #default="{ item }">
                {{ item.title }}
              </template>
              <template #selected="{ value }">
                {{ value?.title ?? '' }}
              </template>
            </v-select>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import CardDeliveryNames from '../enums/CardDeliveryNames';
import VSelect from './VSelect.vue';

export default {
  name: 'TheFilter',
  components: {
    VSelect,
  },
  data() {
    return {
      numberFilter: '',
      selectedType: null,
    };
  },
  computed: {
    typeData() {
      return Object.keys(CardDeliveryNames).map((el) => ({
        title: CardDeliveryNames[el],
        value: el === 'null' ? '' : el,
      }));
    },
  },
  methods: {
    filterByNumber: debounce(function debounceHandler() {
      this.$store.dispatch('filterByNumber', this.numberFilter);
    }, 300),
    selectType(type) {
      this.$store.dispatch('filterByType', type.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  width: 280px;
  background-color: $color-text-light;
  filter: drop-shadow(0px 4px 8px rgba(179, 178, 178, 0.25));

  &-header {
    padding: 8px 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: $color-heading-dark;
    border-bottom: 1px solid $border-color-style-1;
  }

  &-body {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.filter-form{
  &__title{
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: $color-text-dark;
    margin-bottom: 4px;
  }

  &__input{
    border: 1px solid $border-color-style-2;
    border-radius: 2px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: $color-text-dark;
    padding: 8px 12px;
    outline: none;
    width: 100%;

    &::placeholder{
      color: $color-placeholder;
    }
  }
}
</style>
