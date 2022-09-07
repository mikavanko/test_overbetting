<template>
  <div class="cards-view">
    <div
      v-if="cards"
      class="cards"
    >
      <v-card
        v-for="item in cards"
        :key="item.id"
        v-bind="item"
        @remove-item-id="removeCardById"
      />
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import VCard from '../components/VCard.vue';
import Loading from '../components/VLoading.vue';

export default {
  components: {
    VCard,
    Loading,
  },
  computed: {
    cards() {
      return this.$store.getters.getFilteredCards;
    },
  },
  mounted() {
  },
  methods: {
    removeCardById(id) {
      this.$store.dispatch('removeCardById', id);
    },
  },
};
</script>

<style lang="scss">
.cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
@media all and (max-width: 1024px) {
  .cards{
    grid-template-columns: 1fr 1fr;
  }
}
@media all and (max-width: 620px) {
  .cards{
    grid-template-columns: 1fr;
  }
}
</style>
