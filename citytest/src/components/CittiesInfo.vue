<template>
  <v-card color="blue lighten-2" dark outlined>
    <v-card-title class="headline blue lighten-3 d-flex justify-space-between ml-n3 mr-n3">Detailed City Information 
        <v-card-actions>
            <v-btn :disabled="!getCitiesInfo.length" color="blue darken-1" @click="removeAll">
            Clear
            <v-icon right>mdi-close-circle</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card-title>
    <v-card :loading="getLoadingInfo" color="cities-card blue lighten-2 ml-n3 mr-n3" dark outlined>
        <span v-if="!getCitiesInfo.length" class="d-inline-block pt-5 pl-4 pr-4">No data available</span>
        <v-expand-transition v-else>
        <v-row no-gutters>
            <v-col class="pa-2" xs="12" sm="6" md="4" lg="3" xl="2" v-for="(city, i) in getCitiesInfo" :key="i">
            <v-card class="pa-5 blue darken-1" outlined>
                    <v-card-title class="headline pa-0">City</v-card-title>
                    <v-card-text class="headline pa-0">{{city.name}}</v-card-text>
                    <v-spacer class="pa-2"></v-spacer>
                    <v-card-title class="headline pa-0">Country</v-card-title>
                    <v-card-text class="headline pa-0">{{city._links['city:country'].name}}</v-card-text>
                    <v-spacer class="pa-2"></v-spacer>
                    <v-card-title class="headline pa-0">Population</v-card-title>
                    <v-card-text class="headline pa-0">{{city.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}}</v-card-text>
                    <v-spacer class="pa-2"></v-spacer>
                    <v-card-title class="headline pa-0">Timezone</v-card-title>
                    <v-card-text class="headline pa-0">{{city._links['city:timezone'].name}}</v-card-text>
                    <v-spacer class="pa-2"></v-spacer>
                    <v-card-title class="headline pa-0">Location</v-card-title>
                    <v-card-text class="headline pa-0">latitude: {{city.location.latlon.latitude}}</v-card-text>
                    <v-card-text class="headline pa-0">longitude {{city.location.latlon.longitude}}</v-card-text>
            </v-card>
            </v-col>
        </v-row>
        </v-expand-transition>
    </v-card>
    <!-- <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!model" color="grey darken-3" @click="model = null">
          Clear
          <v-icon right>mdi-close-circle</v-icon>
        </v-btn>
    </v-card-actions>-->
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CittiesInfo",
  components: {},
  data: () => ({}),
  computed: {
    ...mapGetters(['getCities', 'getCitiesInfo', 'getLoadingInfo'])
  },
  methods:{
      removeAll(){
          this.$store.dispatch('REMOVE_CITIES_INFO');
      }
  }
};
</script>

<style lang="scss">
.cities-card{
    max-width: none;
}
</style>