<template>
  <tr class="tr">
    <td class="td">
      {{ id }}
    </td>
    <td class="td">
      {{ number }}
    </td>
    <td class="td">
      {{ CardDeliveryNames[type] }}
    </td>
    <td class="td">
      {{ creationDate }}
    </td>
    <td class="td">
      <slot />
    </td>
  </tr>
</template>

<script>
import CardDeliveryNames from '../enums/CardDeliveryNames';

export default {
  name: 'VTableRow',
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
      CardDeliveryNames,
    };
  },
};
</script>

<style lang="scss">
  .tr{
    background-color: $color-bg-light;
    border-bottom: 1px solid $border-color-style-3;
  }
  .td{
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: $color-text-dark;
  }
</style>
