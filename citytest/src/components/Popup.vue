<template>
    <v-dialog v-model="getPopup" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">{{popupTitle}}</span>
            </v-card-title>

        <v-card-text>
            <v-container>
                <v-row>
                    <v-col class="popup-col" cols="12" sm="6" md="4">
                        <v-text-field v-model="getEditedRow.name" label="Название тотвара"></v-text-field>
                    </v-col>
                    <v-col class="popup-col" cols="12" sm="6" md="4">
                        <v-text-field v-model="getEditedRow.brand" label="Бренд"></v-text-field>
                    </v-col>
                    <v-col class="popup-col" cols="12" sm="6" md="4">
                        <v-text-field v-model="getEditedRow.weight" label="Вес"></v-text-field>
                    </v-col>
                    <v-col class="popup-col" cols="12" sm="6" md="4">
                        <v-text-field v-model="getEditedRow.quantity" label="Фасовка"></v-text-field>
                    </v-col>
                    <v-col class="popup-col" cols="12" sm="6" md="4">
                        <v-text-field v-model="getEditedRow.price" label="Цена"></v-text-field>
                    </v-col>
                    <v-col class="popup-col" cols="12" sm="6" md="4">
                        <v-text-field v-model="getEditedRow.stock" label="Наличие"></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="teal darken-2" text @click="close">Отмена</v-btn>
            <v-btn color="teal darken-2" text @click="save">Сохранить</v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Popup",
    computed: {
        popupTitle(){
            return this.getEditedIdx === -1 ? 'Новый товар':'Редактирование товара'
        },
        getPopup: {
            get(){
                return this.$store.getters.getPopup
            },
            set(){
                this.close()
            }
        },
        ...mapGetters(['getData','getEditedRow', 'getEditedIdx'])
    },
    methods: {
        save(){
            this.$store.dispatch('setData')
            this.close()
        },
        close(){
            this.$store.dispatch('togglePopup')

            this.$nextTick(() => {
                console.log('close')
                this.$store.dispatch('resetToDefaultRow')
            })
        }
    }
};
</script>

<style lang="scss" scoped>
@media all and (max-width: 600px){
    .popup-col{
        padding: 0;
    }
}
</style>