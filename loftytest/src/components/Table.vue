<template>
    <v-container fluid class="pl-0 pr-0">
        <v-btn color="teal" dark class="mb-5 ml-5" @click="editRow">
            <v-icon dark>mdi-plus</v-icon>
            <span>Создать новый товар</span>
        </v-btn>

        <v-data-table
            :headers="headers"
            :items="getData"
            :items-per-page="10"
            class="elevation-1"
        >
            <template v-slot:item.controls="props">
                <v-btn class="mr-2" icon small @click="editRow(props.item)">
                    <v-icon dark>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon small @click="deleteRow(props.item)">
                    <v-icon dark>mdi-delete</v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Table',
    components: {
    },
    data: () => ({
        headers: [
            {
                text: 'Артикул',
                sortable: false,
                value: 'artnumber',
            },
            {
                text: 'Название товара',
                value: 'name',
            },
            {
                text: 'Бренд',
                value: 'brand',
            },
            {
                text: 'Вес',
                value: 'weight',
            },
            {
                text: 'Фасовка',
                value: 'quantity',
            },
            {
                text: 'Цена',
                value: 'price',
            },
            {
                text: 'Наличие',
                value: 'stock',
            },
            {
                text: "",
                value: "controls",
                sortable: false}
        ]
    }),
    created() {
        this.$store.dispatch('initData');
    },
    computed: {
        ...mapGetters(['getData'])
    },
    methods: {
        editRow(item){
            const idx = this.getData.indexOf(item);

            if(idx > -1){
                this.$store.dispatch('setEditedIdx', idx);
                this.$store.dispatch('setEditedRow', item);
            }
            this.$store.dispatch('togglePopup');
        },
        deleteRow(item){
            const idx = this.getData.indexOf(item)
            confirm('Вы уверены что хотите удалить этот товар?') && this.$store.dispatch('deleteDataRow', idx)
        }
    }
}
</script>

<style lang="scss">
@media all and (max-width: 600px){
    .v-data-table{
        & &__mobile-row{
            min-height: 35px !important;
        }
    }
}

</style>