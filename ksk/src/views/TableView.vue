<template>
  <div class="table-view">
    <v-table
      v-if="cards"
      :data="cards"
      @remove-item="removeCard"
    />
    <Loading v-else />
  </div>
</template>

<script>
import VTable from '../components/VTable.vue';
import Loading from '../components/VLoading.vue';

export default {
  components: {
    VTable,
    Loading,
  },
  computed: {
    cards() {
      return this.$store.getters.getFilteredCards;
    },
  },
  methods: {
    removeCard(card) {
      this.$store.dispatch('removeCardById', card.id);
    },
  },
};
</script>

<style lang="scss">
</style>
