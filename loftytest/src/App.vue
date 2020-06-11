<template>
  <v-app>
    <v-content>
      <Popup />
      <Table />
    </v-content>
  </v-app>
</template>

<script>
import Table from '@/components/Table';
import Popup from '@/components/Popup';

export default {
  name: 'App',

  components: {
    Table,
    Popup
  },
};
</script>
