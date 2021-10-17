<template>
  <div class="list">
    Распознанные аудио:

    <div v-for="(item,idx) in listAdapter"
         :key="idx"
         class="list-row">
      <div class="list-row__name">
        {{item.name}}
      </div>
      <router-link :to="`/${item.name}`"
                   class="list-row__link">
        Перейти
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadedList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    listAdapter() {
      return this.list.map(el => ({name: el.name}))
    },
  },
}
</script>

<style lang="scss" scoped>
.list{
  &-row{
    display: flex;
    justify-content: space-between;
  }
}
</style>
