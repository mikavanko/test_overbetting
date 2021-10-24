<template>
  <div class="player">
    <!-- <mini-audio
      ref="player"
      :audio-source="url"
      :seek="seek"
  ></mini-audio> -->
    <audio
        ref="player"
        controls
        :src="url">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
  <button @click="play">play</button>
  <button @click="setSeek">seek</button>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    url: {
      type: String,
      default: '',
    },
    timeStart: {
      type: Number,
      default: 0,
    },
    timeEnd: {
      type: Number,
      default: 0,
    },
    isPlay: {
      type: Boolean,
      default: false,
    },
  },
  data (){
    return {
      seek: 0,
    }
  },
  methods: {
    play() {
      this.$refs.player.play()
    },
    setSeek() {
      this.$refs.player.currentTime = 3
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
</style>