<template>
    <div class="card">
        <div class="card__main">
            <h3 class="h3 card__title">{{ps.client.name}}</h3>
            <div class="card__client">
                <div class="card__client__item">{{formatDate(ps.created_at)}}</div>
                <div class="card__client__item">{{`${ps.sales.first_name} ${ps.sales.last_name}`}}</div>
                <div class="card__client__item">{{ps.region}}</div>
                <div class="card__client__item">{{formatPrice(ps.amount)}}</div>
            </div>
            <div class="card__text">
                {{ps.text}}
            </div>
            <div class="card__service">
                <span class="card__service__item" v-for="(s,idx) in shortServices" :key="idx">{{s.name}}</span>
            </div>
        </div>
        <div class="card__logo">
            <img src="@/assets/no-image.png" alt="no-image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['ps'],
    mounted(){
    },
    computed:{
        shortServices(){
            const s = this.ps.services
            if(s.length > 3){
                const shortS = s.slice(0,3)
                shortS.push({name: `+${s.length - 3}`})

                return shortS
            }else{
                return s
            }
        }
    },
    methods:{
        formatDate(dateStr){
            const d = new Date(dateStr)
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
            const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

            return `${da}.${mo}.${ye}`
        },
        formatPrice(price){
            return `${parseInt(price).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} руб./мес.`
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '@/styles/styles.scss';
    
    .card{
        padding: 25px 15px;
        background-color: $headerBg;
        border-radius: 8px;
        margin-bottom: 25px;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;

        @media all and (max-width: $mediaMD){
            align-items: flex-start;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }

        &__main{
            flex: 1;
            min-width: 0;
        }

        &__logo{
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 190px;
            width: 190px;

            img{
                max-width: 100%;
            }

            @media all and (max-width: $mediaMD){
                width: 50px;
                min-width: 50px;
            }
        }

        &__title{
            text-transform: uppercase;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            @media all and (max-width: $mediaMD){
                white-space: unset;
                padding-right: 20px;
            }
        }

        &__client{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 15px;
            
            @media all and (max-width: $mediaMD){
                margin-bottom: 0;
            }

            &__item{
                white-space: nowrap;
            
                &:not(:last-child){
                    padding-right: 18px;
                    margin-right: 18px;
                    border-right: 1px solid $cardColor1;
                }

                @media all and (max-width: $mediaMD){
                    padding-right: 10px;
                    margin-right: 10px;
                    display: inline-block;
                    vertical-align: middle;
                    margin-bottom: 10px;
                    font-weight: 500;
                }
            }

            @media all and (max-width: $mediaMD){
                display: block;
            }
        }

        &__text{
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 38px;
            margin-bottom: 15px;
        }

        &__service{
            display: flex;
            justify-content: flex-start;
            align-items: center;

            @media all and (max-width: $mediaMD){
                display: block;
            }

            &__item{
                font-size: 12px;
                background-color: $cardColor2;
                border-radius: 50px;
                display: block;
                padding: 8px 12px;
                white-space: nowrap;

                &:not(:last-child){
                    margin-right: 10px;
                }

                @media all and (max-width: $mediaMD){
                    display: inline-block;
                    vertical-align: middle;
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>