<template>
  <table class="list">
    <tr>
      <th>Размер файла</th>
      <th>Названия файла</th>
      <th>Статус</th>
      <th>Результат</th>
    </tr>
    <UploadedListRow v-for="(file, idx) in files"
                     :key="'row' + idx"
                     :file="file"
                     @recognition-finished="$emit('recognition-finished', $event)" />

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
  computed: {
    // listAdapter() {
    //   return this.list.map((el) => ({name: el.name}))
    // },
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
