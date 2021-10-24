<template>
  <div class="edit-page">
    <div class="wrapper">
      <h2 class="h2">{{title}}</h2>
      
      <player v-if="audioUrl"
              :url="audioUrl"
              :timeStart="timeStart"
              :timeEnd="timeEnd"
              :isPlay="isPlay"/>
      <editor :content-arr="content"
              :play="onPlay" />
    </div>
  </div>
</template>

<script>
import Player from '@/components/Player'
import Editor from '@/components/Editor'

export default {
  name: 'Edit',
  components: { Editor, Player },
  data() {
    return {
      isPlay: false,
      item: null,
      timeStart: null,
      timeEnd: null,
    }
  },
  async mounted() {
    const recognizedItems = JSON.parse(localStorage.getItem('recognizedItems')) || []
    const id = this.$route.params.id

    if(!recognizedItems.length) {
      this.item = this.$store.getters.getRecognizedItem(id)
    }else{
      this.item = recognizedItems.find(el => el.name === id)
    }
  },
  methods: {
    onPlay(e) {
      console.log('onPlay')
      console.log(e)
    },
  },
  computed: {
    title() {
      return this.item?.name ?? ''
    },
    audioUrl() {
      return this.item ? `https://storage.googleapis.com/hakathon/${this.item.name}` : ''
    },
    content() {
      return this.item?.data ?? []
    },
  },
}
</script>

<style lang="scss" scoped>
.h2{
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: $body-color;
  margin-bottom: 13px;
}
.player{
  width: 100%;
  margin-bottom: 18px;
}
.edit-page{
  padding: 30px 100px;
  background: linear-gradient(to bottom, $main-color 0, $main-color 345px, $body-color 345px);
  position: relative;

  &:before{
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background: linear-gradient(90deg, rgba(232, 232, 232, 0) 0%, #E8E8E8 51.35%, rgba(232, 232, 232, 0) 100%)
  }
}
</style>
