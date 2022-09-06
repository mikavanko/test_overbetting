<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header__title">
        {{ id }}
      </div>
      <div
        :class="['more', {active: isModalVisible}]"
        @click="showModal"
      >
        <more-icon class="more-icon" />
      </div>
    </div>
    <div
      class="card-body"
    >
      <div
        v-for="(item, idx) in cardData"
        :key="idx"
        class="card-body__row"
      >
        <div class="card-body__title">
          {{ item.title }}
        </div>
        <div class="card-body__text">
          {{ item.text }}
        </div>
      </div>
    </div>
    <v-modal
      v-model="isModalVisible"
      @remove="removeItem"
    />
  </div>
</template>

<script>
import VModal from './VModal.vue';
import MoreIcon from '../assets/icons/more.svg';
import CardDeliveryNames from '../enums/CardDeliveryNames';

export default {
  name: 'VCard',
  components: {
    MoreIcon,
    VModal,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    number: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    creationDate: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isModalVisible: false,
      isActive: false,
      cardData: [
        {
          title: 'Номер накладной:',
          text: this.$props.number,
        },
        {
          title: 'Тип заказа:',
          text: CardDeliveryNames[this.$props.type],
        },
        {
          title: 'Дата создания:',
          text: this.$props.creationDate,
        },
      ],
    };
  },
  methods: {
    removeItem() {
      this.$emit('remove-item-id', this.$props.id);
    },
    showModal() {
      this.isModalVisible = true;
    },
  },
};
</script>

<style lang="scss">
.card{
  background: $color-card-bg-body;
  box-shadow: 0px 4px 12px #EBEBEB;
  border-radius: 3px;
  overflow: hidden;
  &-header{
    background-color: $color-card-bg-header;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: $color-text-dark;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-body{
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;

    &__row{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      min-height: 32px;
    }

    &__title{
      min-width: 125px;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: $border-color-style-4;
    }

    &__text{
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: $color-text-dark;
    }
  }
}

.more {
  cursor: pointer;
  color: $border-color-style-4;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s ease;

  &:hover,
  &.active{
    color: $color-text-active;
  }
}
</style>
