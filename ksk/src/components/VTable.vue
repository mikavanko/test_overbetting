<template>
  <div class="table-wrapper">
    <table class="table">
      <thead class="thead">
        <tr class="thead-tr">
          <td class="thead-td">
            ID
          </td>
          <td class="thead-td">
            Номер накладной
          </td>
          <td class="thead-td">
            Тип заказа
          </td>
          <td class="thead-td">
            Дата создания
          </td>
          <td class="thead-td" />
        </tr>
      </thead>
      <tbody class="tbody">
        <v-table-row
          v-for="item in data"
          :key="item.id"
          v-bind="item"
        >
          <div
            :class="['more', {active: item.id === activeItem?.id}]"
            @click="showModal($event, item)"
          >
            <more-icon class="more-icon" />
          </div>
        </v-table-row>
      </tbody>
    </table>
    <v-modal
      v-model="isModalVisible"
      @input="modalVisibleHandler"
      @remove="removeItem"
    />
  </div>
</template>

<script>
import VTableRow from './VTableRow.vue';
import VModal from './VModal.vue';
import MoreIcon from '../assets/icons/more.svg';

export default {
  name: 'VTable',
  components: {
    VTableRow,
    MoreIcon,
    VModal,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isModalVisible: false,
      activeItem: null,
    };
  },
  methods: {
    removeItem() {
      this.$emit('remove-item', this.activeItem);
    },
    showModal(e, item) {
      this.isModalVisible = true;
      this.activeItem = item;
    },
    modalVisibleHandler(val) {
      if (!val) {
        this.activeItem = null;
      }
    },
  },
};
</script>

<style lang="scss">
.table-wrapper{
  position: relative;
  overflow: auto;
}
.table {
  width: 100%;
  border: 1px solid $border-color-style-3;
}

.thead {
  &-td {
    background-color: $border-color-style-3;
    color: $color-text-dark;
    padding: 13px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    &:not(:last-child) {
      border-right: 3px solid $color-bg-light;
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
