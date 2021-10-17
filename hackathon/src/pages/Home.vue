<template>
  <div>
      <div>
        {{progressText}}
        <span v-if="isLoading">
          : {{progress}}
        </span>
      </div>
      <br>
      <Form @submit="submitForm" />
      <br>
      <UploadedList :list="recognizedList" />

  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import UploadedList from '@/components/UploadedList.vue'
import { uploadToGoogle, recognizeFile, checkProgress, getRecognitionResult } from '@/assets/js/api/api'

const INTERVAL = 1000

export default {
  name: 'Home',
  components: {
      Form,
      UploadedList,
  },
  data() {
    return {
      polling: null,
      percent: 0,
      operationId: null,
      isLoading: false,
      progressText: ''
    }
  },
  computed: {
    recognizedList() {
      return this.$store.getters.getRecognizedList
    },
    progress() {
      return `${this.percent}%`
    },
  },
  methods: {
    pollData (f, callback) {
      this.polling = setInterval(() => {
        f()
          .then(res=>{
            this.percent = res.percent

            if(res.done){
              callback(res)
              clearInterval(this.polling)
            }
          })
      }, INTERVAL)
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
        })
        .catch(err=>{
          console.log(err)
        })
    },
    checkProgress() {
      const params = {
        action: 'check',
        operationId: this.operationId
      }
      
      // check progress of recognition
      return checkProgress(this, { params })
        .catch(err=>{
          console.log(err)
        })
    },
    async submitForm(formData) {
      this.progressText = 'Загрузка на сервер...'
      await uploadToGoogle(this,{params: formData})
      
      await this.recognizeFile(formData)

      this.progressText = 'Загрузка'
      this.isLoading = true
      
      this.pollData(this.checkProgress, async (res) => {
        const recognitionData = await getRecognitionResult(this, { url: res.resultUrl})
        this.$store.dispatch('setRecognizedList', { name: formData.get('key'), data: recognitionData})
      })
    },
  },
  beforeDestroy() {
    clearInterval(this.polling)
  },
}
</script>

<style>
</style>
