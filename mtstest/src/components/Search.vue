<template>
    <div class="search">
        <input class="search__input" type="text" placeholder="Название компании" name="name">
        <button class="search__btn" type="submit"><img src="@/assets/search.svg" alt="search"></button>
    </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>

<style lang="scss" scoped>
    @import '@/styles/styles.scss';

    .search{
        width: 100%;
        height: 72px;
        overflow: hidden;
        position: relative;
        border-radius: 8px;
        margin-bottom: 50px;
    
        @media all and (max-width: $mediaMD){
            margin-bottom: 15px;
            height: 52px;
        }
        
        $search: &;
        
        &__input{
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background: transparent;
            font-size: 18px;
            padding: 0 102px 0 40px;
            font-weight: 400;
            transition: all .3s ease;
            border: 1px solid $searchBorder;
            border-radius: 8px;
            background-color: $headerBg;

            &::placeholder{
                color: $searchPlacehloder;
            }

            &:focus{
                border: 1px solid darken($searchBorder,10);

                & + #{$search}__btn{
                    border: 1px solid darken($searchBorder,10);
                }
            }
        }

        &__btn{
            width: 72px;
            height: 100%;
            border: none;
            outline: none;
            background: transparent;
            position: absolute;
            right: 0;
            top: 0;
            border: 1px solid $searchBorder;
            padding: 0;
            cursor: pointer;
            transition: background,border .3s ease;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            
            @media all and (max-width: $mediaMD){
                width: 52px;
            }

            &:hover{
                background: $searchBorder;
            }
            &:active{
                padding-top: 2px;
                background: darken($searchBorder, 3);
            }

            img{
                width: 40%;
            }
        }
    }
</style>