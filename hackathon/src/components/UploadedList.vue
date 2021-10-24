<template>
  <table class="list">
    <tr>
      <th>Размер файла</th>
      <th>Названия файла</th>
      <th>Статус</th>
      <th>Результат</th>
    </tr>

    <UploadedListRow v-for="(file, idx) in files"
                     :key="'row-' + idx"
                     :file="file"
                     @update-storage="$emit('update-storage', $event)"
                     @recognition-finished="$emit('recognition-finished', $event)" 
                     @recognition-started="$emit('recognition-started', $event)"
                     @remove-from-files="$emit('remove-from-files', { idx, operationId: $event })" />

  </table>
</template>

<script>
import UploadedListRow from './UploadedListRow'
export default {
  name: 'UploadedList',
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
  components: { UploadedListRow },
}
</script>

<style lang="scss" scoped>
.list{
  width: 100%;

  th{
    font-family: $font-family;
    font-size: 12px;
    line-height: 14px;
    color: $text-color;
    opacity: .3;
    text-align: left;
    padding: 7px 5px;
  }
}
</style>
