<template>
  <div class="home">
    <div class="form__wrapper">
      <img class="form__img" src="@/assets/img/voice.jpg" alt="voice">
      <Form @submit="submitForm" class="form" />
    </div>
    <UploadedList v-if="files.length || recData.length"
                  :files="files"
                  :storage-data="recData"
                  @recognition-finished="recognitionFinished"
                  @recognition-started="recognitionStarted"
                  @remove-from-storage="removeFromStorage"
                  @remove-from-files="removeFromFiles" />
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import UploadedList from '@/components/UploadedList.vue'
import { checkProgress } from '@/assets/js/api/api'

export default {
  name: 'Home',
  components: {
      Form,
      UploadedList,
  },
  data() {
    return {
      files: [],
      recData: []
    }
  },
  mounted() {
    // checkProgress()
    this.recData = JSON.parse(localStorage.getItem('recData')) || [];

    console.log(this.recData)
  },
  methods: {
    removeFromStorage(operationId) {
      const recData = JSON.parse(localStorage.getItem('recData'))
      console.log(operationId)
      console.log(recData)
      if(recData && recData.length) {
        const idx = recData.findIndex(el => el.operationId === operationId)
        recData.splice(idx, 1)

        // update 
        this.recData = recData
        localStorage.setItem('recData', JSON.stringify(recData))
      }
    },
    removeFromFiles(operationId) {
      if(this.files && this.files.length) {
        const idx = this.files.findIndex(el => el.operationId === operationId)
        this.files.splice(idx, 1)

        this.removeFromStorage(operationId)
      }
    },
    recognitionStarted(data) {
      console.log('recognitionStarted',data)
      const recData = JSON.parse(localStorage.getItem('recData')) || []
      recData.push(data)
      localStorage.setItem('recData', JSON.stringify(recData))
    },
    recognitionFinished(recData) {
      console.log('recData',recData)
      this.$store.dispatch('setRecognizedList', recData)
    },
    async submitForm(files) {
      this.files = [...this.files, ...files]
    },
  },
}
</script>

<style lang="scss" scoped>
.home{
  padding: 50px 40px;
}
.form{
  z-index: 2;
  position: relative;

  &__wrapper{
    position: relative;
    margin-bottom: 50px;
  }
  &__img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
}
</style>
