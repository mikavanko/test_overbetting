<template>
  <div class="select">
    <div
      class="select-selected"
      @click.stop="showDropdown"
    >
      <div
        class="select-selected__value"
        :data-placeholder="placeholder"
      >
        <slot
          v-if="value"
          name="selected"
          :value="value"
        />
        <template v-else-if="initialValue">
          {{ initialValue }}
        </template>
      </div>
      <arrow-down-icon
        v-if="!value?.icon"
        :class="['select-selected__icon', {open: show}]"
      />
    </div>
    <div
      v-if="show"
      ref="dropdown"
      class="select-dropdown"
    >
      <div
        v-for="(item, idx) in data"
        :key="idx"
        class="select-dropdown__item"
        @click="selectItem(item)"
      >
        <slot :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ArrowDownIcon from '../assets/icons/arrow.svg';

export default {
  name: 'VSelect',
  components: {
    ArrowDownIcon,
  },
  props: {
    initialValue: {
      type: [Object, String],
      default: () => null,
    },
    placeholder: {
      type: String,
      default: 'Выберите из списка',
    },
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [Object, String],
      default: () => null,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showDropdown() {
      if (this.show) {
        this.hideDropdown();
        return;
      }
      this.show = true;
      document.addEventListener('click', this.hideDropdown);
    },
    hideDropdown() {
      this.show = false;
      document.removeEventListener('click', this.hideDropdown);
    },
    selectItem(item) {
      this.$emit('input', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.select{
  width: 100%;
  background: $color-bg-light;
  color: $color-heading-dark;
  position: relative;
  z-index: 1;

  &-selected{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid $border-color-style-5;
    cursor: pointer;

    &__value{
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      border-radius: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      &:empty:not(:focus):before{
        content: attr(data-placeholder);
        font-weight: 400;
        color: $color-placeholder;
      }
    }

    &__icon{
      font-size: 10px;
      color: $color-text-dark;

      &.open{
        transform: rotate(180deg);
      }
    }
  }

  &-dropdown{
    border-bottom: 1px solid $border-color-style-5;
    border-left: 1px solid $border-color-style-5;
    border-right: 1px solid $border-color-style-5;
    background: $color-bg-light;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    &__item{
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      padding: 8px 12px;
      cursor: pointer;

      &:not(:last-child){
        border-bottom: 1px solid $border-color-style-5;
      }
    }
  }
}
</style>
