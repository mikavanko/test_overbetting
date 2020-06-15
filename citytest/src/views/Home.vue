<template>
  <v-container fluid class="pt-0">
    <Select />
    <CittiesInfo />
  </v-container>
</template>

<script>
import Select from '@/components/Select.vue'
import CittiesInfo from '@/components/CittiesInfo.vue'

export default {
  name: 'Home',
  components: {
    Select,
    CittiesInfo
  }
}
</script>
