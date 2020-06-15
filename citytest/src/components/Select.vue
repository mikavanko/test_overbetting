<template>
    <v-card color="blue lighten-2" outlined dark>
      <v-card-title class="headline blue lighten-3 ml-n3 mr-n3">Search for Cities</v-card-title>
      <v-row no-gutter>
        <v-col md="6" sm="12">
            <v-autocomplete
                v-model="cities"
                :items="items"
                :loading="getLoading"
                :search-input.sync="search"
                color="white"
                item-text="matching_full_name"
                placeholder="Start typing to Search"
                prepend-icon="mdi-city-variant-outline"
                return-object
                multiple
            >
                <template v-slot:selection="">
                    <!-- <v-chip
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)"
                    >{{ data.item.matching_full_name }}</v-chip> -->
                </template>
            </v-autocomplete>
        </v-col>
        <v-col>
            <v-chip
                class="mr-2 mb-2"
                close
                @click:close="remove(city)"
                :key="idx"
                v-for="(city,idx) in cities"
                >{{ city.matching_full_name }}</v-chip>
        </v-col>
      </v-row>
      <!-- <v-expand-transition>
        <v-list v-if="model" class="red lighten-3">
          <v-list-item v-for="(field, i) in fields" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="field.value"></v-list-item-title>
              <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-expand-transition> -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!cities.length" color="grey darken-2" @click="removeAll">
          Clear
          <v-icon right>mdi-close-circle</v-icon>
        </v-btn>
        <v-btn :disabled="!cities.length" color="success darken-1" @click="getInfo">
          Show cities info
          <v-icon right>mdi-eye</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Select",
  components: {},
  data: () => ({
    lengthLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null
  }),

  computed: {
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || "n/a"
        };
      });
    },
    items() {
      return this.$store.getters.getEntries.map(entry => {
        const matching_full_name =
          entry.matching_full_name.length > this.lengthLimit
            ? entry.matching_full_name.slice(0, this.lengthLimit) + "..."
            : entry.matching_full_name;
        return Object.assign({}, entry, { matching_full_name });
      });
    },
    cities: {
        get(){
            return this.$store.getters.getCities;
        },
        set(val){
            this.$store.dispatch('SET_CITIES',val)
        }
    },
    ...mapGetters(['getLoading'])
  },

  watch: {
    search(val) {

        if(val === null || val === ''){
            this.$store.dispatch('REMOVE_ENTRIES');
        }else if(val.length){
            this.$store.dispatch('GET_ENTRIES',val)
            console.log(val)
        }
    }
  },
  methods: {
    remove (item) {
        this.$store.dispatch('REMOVE_CITY',item)
    },
    removeAll (){
        this.$store.dispatch('REMOVE_CITY')
    },
    getInfo(){
        this.$store.dispatch('GET_CITIES_INFO')
    }
  }
};
</script>

<style lang="scss">
</style>