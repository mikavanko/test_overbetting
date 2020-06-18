<template>
    <div class="wrapper">
        <div class="container">
            <h1 class="h1">Истории успеха</h1>
            <Search />

            <div class="histories-wrapper" v-if="GET_HISTORIES.length">
                <Card :key="idx" v-for="(history, idx) in GET_HISTORIES" :ps="{...history}" />
            </div>
                <div class="more__wrapper" v-if="GET_NEXT">
                    <button class="more" @click="more"><span>{{GET_HISTORIES_LOADING?'Загрузка...':'Загрузить еще'}}</span></button>
                </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Search from '@/components/Search.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'Content',
    components: {
        Card,
        Search
    },
    mounted(){
        this.$store.dispatch('LOGIN', {
                                        "username": "mishaivanko",
                                        "password": "bijgaj-vaMbe0-huszyw"
                                    })
    },
    methods:{
        more(){
            this.$store.dispatch('GET_HISTORIES')
        }
    },
    computed:{
        ...mapGetters(['GET_HISTORIES', 'GET_HISTORIES_LOADING', 'GET_NEXT'])
    }
}
</script>

<style lang="scss" scoped>
    @import '@/styles/styles.scss';

    .loading{
        font-size: 24px;
        text-align: center;
    }
    
    .more{
        font-family: 'Roboto';
        font-size: 18px;
        background-color: $btnBg;
        color: $headerBg;
        border-radius: 8px;
        padding: 15px 45px;
        margin: 0;
        outline: none;
        border: none;
        cursor: pointer;
        display: inline-block;

        &:hover{
            background-color: darken($btnBg,1);
        }
        &:active{
            background-color: darken($btnBg,3);

            span{
                position: relative;
                top: 1px;
            }
        }

        &__wrapper{
            text-align: center;
        }
    }

</style>