<template>
  <div class="player">
    <audio
        ref="player"
        controls
        :src="url">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
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
    // timeStart: {
    //   type: Number,
    //   default: 0,
    // },
    // timeEnd: {
    //   type: Number,
    //   default: 0,
    // },
    isPlay: {
      type: Boolean,
      default: false,
    },
  },
  data (){
    return {
    }
  },
  methods: {
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