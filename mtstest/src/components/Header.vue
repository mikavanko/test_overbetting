<template>
    <div class="header">
        <div class="container d-flex justify-fs align-center">
            <div class="header__item header__logo">
                <img src="@/assets/logo.svg" alt="logo">
            </div>
            <div class="header__item">
                <ul class="header__menu d-flex align-center">
                    <li class="header__menu__item">
                        <a href="#" class="header__menu__link header__menu__link--current">Истории успеха</a>
                    </li>
                    <li class="header__menu__item">
                        <a href="#" class="header__menu__link">Истории неуспеха</a>
                    </li>
                </ul>
            </div>
            <div class="header__item header__item--right ml-auto">
                <div class="header__user d-flex justify-fe align-center">
                    <span class="header__user__item header__user__name">Захарченко Антон</span>
                    <a href="#" class="header__user__item header__user__bell"><i class="icon"><img src="@/assets/bell_notify.png" alt="bell_notify"></i></a>
                    <a class="header__user__item header__user__avatar"><img src="@/assets/photo.jpg" alt=""></a>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    mounted(){
        this.$store.dispatch('LOGIN', {
                                        "username": "mishaivanko",
                                        "password": "bijgaj-vaMbe0-huszyw"
                                    })
    }
}
</script>

<style lang="scss">
    @import '@/styles/styles.scss';
    
    .header{
        background-color: $headerBg;

        &__logo{
            margin-right: 40px;
        }

        &__menu{

            &__item{
                &:not(:last-child){
                    margin-right: 15px;
                }
            }

            &__link{
                font-size: 16px;
                color: $textColor;
                text-decoration: none;
                font-family: 'Roboto';
                font-weight: bold;
                padding: 25px 0;
                display: block;
                
                &--current,
                &:hover{
                    position: relative;
                    
                    &:before{
                        content: '';
                        display: block;
                        position: absolute;
                        height: 2px;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: $menuActive;
                    }
                }
            }
        }

        &__user{
            &__item{
                &:not(:first-child){
                    margin-left: 15px;
                }
            }
            &__avatar{
                height: 40px;
                width: 40px;
                border-radius: 100%;
                overflow: hidden;
                cursor: pointer;
            }
        }
    }
</style>