<template>
  <div class="edit-page">
    <div class="wrapper">
      <template v-if="file && time">
        <h2 class="h2">{{title}}</h2>
        
        <div v-if="audioUrl"
            class="player">
          <audio
              ref="player"
              controls
              :src="audioUrl">
                  Your browser does not support the
                  <code>audio</code> element.
          </audio>
        </div>
      </template>
      <template v-else>
        <center>
          <br>
          <br>
          <br>
          <br>
          <br>
          <h2 class="h2">Неверный url</h2>
        </center>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerPage',
  data() {
    return {
      isPlay: false,
      item: null,
      file: null,
      time: null,
    }
  },
  mounted() {
    this.file = this.$route.query.file
    this.time = parseInt(this.$route.query.t)
    const _this = this

    setTimeout(function(){
      _this.$refs.player.currentTime = _this.time
      // _this.$refs.player.play()
    }, 300)
  },
  computed: {
    title() {
      return this.file?.replace(/\.[^/.]+$/, "") ?? ''
    },
    audioUrl: {
      get(){
        return this.file ? `https://storage.googleapis.com/hakathon/${this.file}` : null
      }
    },
    content() {
      return this.item?.data ?? []
    },
  },
}
</script>

<style lang="scss" scoped>
.player{
  audio{
    width: 100%;
  }
}
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
  height: 100%;

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
