<template>
  <div class="edit-page">
    <div class="wrapper">
      <template v-if="!hasError">
        <h2 class="h2">{{title}}</h2>
        
        <div class="player">
          <audio
              ref="player"
              controls
              :src="audioUrl">
                  Your browser does not support the
                  <code>audio</code> element.
          </audio>
        </div>

        <h3 class="h3">Проигрываемый текст:</h3>
        <div class="text-block">
          <textarea class="textarea" v-model="text" />
          <div class="text-block__item">
            <button v-if="!isPlaying"
                    class="btn"
                    @click="play">Проиграть</button>
            <button v-else
                    class="btn"
                    @click="pause">Стоп</button>
            <button v-if="!copyDone"
                    class="btn"
                    @click="copy">Копировать текст</button>
            <button v-else
                    class="btn btn_copy"
                    disabled
                    @click="copy">Скопировано</button>
          </div>
        </div>
      </template>
      <template v-else>
        <center>
          <br>
          <br>
          <br>
          <br>
          <br>
          <h2 class="h2">{{errorText}}</h2>
        </center>
      </template>
    </div>
  </div>
</template>

<script>
let clearId = null

export default {
  name: 'PlayerPage',
  data() {
    return {
      file: null,
      start: null,
      end: null,
      text: null,
      period: null,
      player: null,
      isPlaying: false,
      copyDone: false,
      errorText: 'Неверный url',
      hasError: false
    }
  },
  mounted() {
    this.file = this.$route.query.file
    this.text = this.$route.query.text
    this.start = parseInt(this.$route.query.start)
    this.end = parseInt(this.$route.query.end)
    
    this.hasError = !this.file || !this.text || !this.start || !this.end

    if(!this.hasError) {
      this.period = +(this.end - this.start).toFixed(2)

      this.player = this.$refs.player
      this.player.currentTime = this.start

      this.player.onplay = (event) => {
        this.isPlaying = true
        if(this.period > 0)
        clearId = setTimeout(() => {
          this.player.pause()
        }, this.period * 1000)
      }
      this.player.onpause = (event) => {
        this.isPlaying = false
        this.player.currentTime = this.start
        clearInterval(clearId)
      }
    }
  },
  methods: {
    play() {
      this.player && this.player.play()
    },
    pause() {
      this.player && this.player.pause()
    },
    copy() {
      const copyTextarea = document.querySelector('.textarea')
      copyTextarea.focus()
      copyTextarea.select()

      try {
        this.copyDone = document.execCommand('copy')
        if(this.copyDone){
          setTimeout(()=>{
            this.copyDone = false
          }, 1000)
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    title() {
      return this.file?.replace(/\.[^/.]+$/, "") ?? ''
    },
    audioUrl() {
      return this.file ? `https://storage.googleapis.com/hakathon/${this.file}` : null
    },
  },
}
</script>

<style lang="scss" scoped>
.player{
  background-color: $player-bg-color;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.25);
  height: 54px;

  audio::-webkit-media-controls-panel{
    background-color: $player-bg-color;
    height: 54px;
  }
}
.text-block{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &__item{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
.btn{
  @include clear-btn();

  height: 30px;
  border-radius: 5px;
  background-color: $player-bg-color;
  color: $main-color;
  border: 1px solid $main-color;
  padding: 0 15px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.25);

  &_copy{
    color: rgba(green, .5)
  }

  &:not([disabled]):hover{
    background-color: $hover-color;
    color: $body-color;
    border-color: $hover-color;
  }
}
.edit-page{
  font-family: $font-family;
}
.textarea{
  font-family: $font-family;
  font-size: 14px;
  width: 300px;
  height: 100px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: $player-bg-color;
  box-shadow: 0px 0px 10px rgba(37, 37, 37, 0.25);
}
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
.h3{
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
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
