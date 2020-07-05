<template>
    <div class="banner">
        <Slick
            ref="slick"
            :options="slickOptions">
            <div class="banner__item" :key="idx" v-for="(slide, idx) in slides">
                <div class="banner__item__bg"><img :src="slide.img" alt="slide_1"></div>
                <div class="container">
                    <div class="banner__item__label" v-html="slide.label"></div>
                    <h2 class="banner__item__title" v-html="slide.title"></h2>
                    <h2 class="banner__item__text" v-html="slide.text"></h2>
                </div>
            </div>
        </Slick>
        <div class="banner__arrows">
            <div class="banner__arrow banner__arrow--left" ref="arrowLeft"><img src="@/assets/img/left-arrow.svg" alt="left-arrow"></div>
            <div class="banner__arrow banner__arrow--right" ref="arrowRight"><img src="@/assets/img/left-arrow.svg" alt="left-arrow"></div>
        </div>
    </div>
</template>

<script>
var slide_1 = require('@/assets/img/slide_1.jpg')
var slide_2 = require('@/assets/img/slide_2.jpg')
var slide_3 = require('@/assets/img/slide_3.jpg')

import Slick from 'vue-slick'

export default {
    name: 'Banner',
    components: {
        Slick
    },
    data: function(){
        return {
            slickOptions: {
                slidesToShow: 1,
                dots: true,
                prevArrow: '.banner__arrow--left',
                nextArrow: '.banner__arrow--right',
            },
            slides: [
                {
                    img: slide_1,
                    label: 'анимация',
                    title: 'Подготовка спрайтов для <br>анимации в Unity',
                    text: 'Спрайты должны немного отличаться друг от друга, <br>чтобы было заметно движение.'
                },
                {
                    img: slide_2,
                    label: 'анимация 2',
                    title: 'Подготовка спрайтов для <br>анимации в Unity 2',
                    text: 'Спрайты должны немного отличаться друг от друга, <br>чтобы было заметно движение. 2'
                },
                {
                    img: slide_3,
                    label: 'анимация 3',
                    title: 'Подготовка спрайтов для <br>анимации в Unity 3',
                    text: 'Спрайты должны немного отличаться друг от друга, <br>чтобы было заметно движение. 3'
                },
            ]
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
@import "../../node_modules/slick-carousel/slick/slick.css";
</style>
