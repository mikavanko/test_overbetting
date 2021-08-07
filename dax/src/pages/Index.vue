<template>
    <div id="scrollbar">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Footer from '@/components/Footer'

import 'aos/dist/aos.css'; // You can also use <link> for styles

import AOS from 'aos';

export default {
    name: 'Index',
    components:{
        Header,
        Section1,
        Section2,
        Section3,
        Section4,
        Footer
    },
    mounted: function(){
        AOS.init({
            duration: 1000
        });
    }
}
</script>
