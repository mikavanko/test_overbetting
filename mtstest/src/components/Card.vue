<template>
    <div class="card">
        <div class="card-main">
            <h3 class="card-main-title">{{ps.client.name}}</h3>
        </div>
        <div class="card-log"></div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['ps'],
    mounted(){
        console.log(this.ps)
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
    }
</style>