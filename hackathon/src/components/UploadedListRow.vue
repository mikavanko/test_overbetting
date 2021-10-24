<template>
  <tr class="row">
    <td class="row__item size">
      {{bytesToSize(file.size)}}
    </td>
    <td class="row__item name">
      {{file.name}}
    </td>
    <td class="row__item status">
      <template v-if="!isError">
        <template v-if="!isLoading && !isError">
          <div class="status__loading">Загрузка...</div>
        </template>
        <template v-else-if="!isRecognized && !isError">
          <div class="progress">
            <div class="progress__text">
              Распознавание {{percent}}%
            </div>
            <div class="progress__bar">
              <div class="progress__value"
                  :style="`width: ${percent}%`"/>
            </div>
          </div>
        </template>
        <template v-else-if="!isError">
          <div class="status__recognized">
            <img src="@/assets/img/check.svg" alt="check" /> Распознано
          </div>
        </template>
      </template>
      <template v-else>
        <div class="status__error">
          <img src="@/assets/img/error.svg" alt="error" /> Ошибка
        </div>
      </template>
      
    </td>
    <td class="row__item result">
      <button v-if="!isError && operationId"
              class="result__btn result__btn_open"
              @click="open"
              :disabled="!isOpen">
        Скачать docx
      </button>
      <button v-if="operationId"
              class="result__btn result__btn_remove"
              @click="remove">
        Удалить
      </button>
    </td>
  </tr>
</template>

<script>
import { uploadToGoogle, recognizeFile, checkProgress, getRecognitionResult } from '@/assets/js/api/api'

const INTERVAL = 1000

export default {
  name: 'UploadedListRow',
  props: {
    file: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isOpen: false,
      isLoading: false,
      isRecognized: false,
      percent: 0,
      isError: false,
      operationId: null,
      flag: false,
      docxUrl: '',
    }
  },
  computed: {
    // listAdapter() {
    //   return this.list.map((el) => ({name: el.name}))
    // },
  },
  async mounted() {
    this.operationId = this.file.operationId || null
    
    if(!this.file.finished){
      const formData = new FormData()

      if(!this.operationId){
        this.isLoading = false

        formData.append('key', this.file.name)
        console.log('this.file',this.file)
        formData.append('file',this.file.file)

        await uploadToGoogle(this,{params: formData})
          .catch(err => {
            this.isError = true
            console.log(err)
          })
        
        const res = await this.recognizeFile(formData)
          .catch(err => {
            this.isError = true
            console.log(err)
          })
        console.log('recognizeFile Error',res)
      }

      this.isLoading = true
      if(!this.isError){
        this.pollData(this.checkProgress, async (res) => {
          // Это нужно чтобы работал редактор

          // const recognitionData = await getRecognitionResult(this, { url: res.resultUrl})
          //   .catch(err => {
          //     this.isError = true
          //     console.log(err)
          //   })
          
          // const name = this.file.name
          // console.log('name',name)
          // this.$emit('recognition-finished', { name, data: recognitionData, operationId: this.operationId })
          this.$emit('update-storage', { docxUrl: res.docxUrl, operationId: this.operationId })

          this.docxUrl = res.docxUrl
          this.isRecognized = true
          this.isOpen = true
        })
      }
    } else {
      this.isLoading = true
      this.isRecognized = true
      this.isOpen = true
      this.docxUrl = this.file.docxUrl
    }
  },
  methods: {
    remove(e){
      e.preventDefault()
      this.$store.getters.getController.abort()
      this.flag = false,
      this.$emit('remove-from-files', this.operationId)
    },
    open(){
      if(this.isOpen) {
        // window.open(`https://storage.googleapis.com/hakathon/${this.file.name.replace(/\.[^/.]+$/, '')}.docx`)
        window.open(this.docxUrl)
        // this.$router.push(this.file.name)
      }
    },
    bytesToSize(bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
      if (bytes == 0) return '0 Byte'
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
    },
    recognizeFile(formData) {
      const params = {
        action: 'recognize',
        file: formData.get('key')
      }
      
      // check if file was loaded
      return recognizeFile(this, { params })
        .then(res=>{
          this.operationId = res.operationId
          if(res.operationId){
            this.$emit('recognition-started', { name: this.file.name, size: this.file.size, operationId: res.operationId })
          }else{
            this.isError = true
            this.flag = false
          }
        })
        .catch(err=>{
          this.isError = true
          console.log(err)
        })
    },
    sleep: ms => new Promise(r => setTimeout(r, ms)),
    async pollData (f, callback) {
      this.flag = true
      while(this.flag){
        const res = await f()
        this.percent = res.percent

        if(res.done){
          this.flag = false
          callback(res)
        }
        await this.sleep(INTERVAL)
      }
    },
    checkProgress() {
      const params = {
        action: 'check',
        operationId: this.operationId
      }
      
      // check progress of recognition
      return checkProgress(this, { params })
        .catch(err=>{
          console.log('checkProgress Error')
          this.isError = true
          this.flag = false
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.row{
  border-top: 1px solid rgba($row-border-color, 0.5);

  &__item{
    text-align: left;
    padding: 15px 5px;
    width: 25%;
    vertical-align: middle;
  }
}
.status{
  &__loading{
    font-family: $font-family;
    font-size: 10px;
    line-height: 12px;
    opacity: .5;
  }

  &__recognized{
    color: $success-color;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img{
      margin-right: 8px;
    }
  }

  &__error{
    color: $error-color;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img{
      margin-right: 8px;
    }
  }
}
.result{
  white-space: nowrap;
  text-align: right;

  &__btn{
    @include clear-btn();

    width: 108px;
    height: 30px;
    border-radius: 5px;

    &:hover{
      background-color: $hover-color;
      color: $body-color;
      border-color: $hover-color;
    }

    &_open{
      background-color: $main-color;
      color: $body-color;
      margin-right: 20px;

      &[disabled]{
        background-color: $disable-color;
        cursor: wait;
      }
    }
    &_remove{
      background-color: $body-color;
      color: $main-color;
      border: 1px solid $main-color;
    }
  }
}
.progress{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &__text{
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 2px;
    opacity: 0.5;
  }

  &__bar{
    width: 108px;
    height: 10px;
    box-shadow: inset 0px 0px 5px rgba(37, 37, 37, 0.1);
    border-radius: 20px;
  }
  &__value{
    border-radius: 20px;
    background-color: $main-color;
    width: 0%;
    height: 100%;
  }
}
</style>
