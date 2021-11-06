<template>
  <div class="home">
    <div class="wrapper">
      <div class="form__wrapper">
        <img class="form__img" src="@/assets/img/voice.jpg" alt="voice">
        <Form @submit="submitForm" class="form" />
      </div>
      <UploadedList v-if="files.length"
                    :files="files"
                    @update-storage="updateStorage"
                    @recognition-finished="recognitionFinished"
                    @recognition-started="recognitionStarted"
                    @remove-from-files="removeFromFiles" />
    </div>
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
    }
  },
  mounted() {
    this.files = JSON.parse(localStorage.getItem('recData')) || []
    console.log(this.files)
  },
  methods: {
    removeFromStorage(operationId, key) {
      const recData = JSON.parse(localStorage.getItem(key))
      
      if(recData && recData.length) {
        const idx = recData.findIndex(el => el.operationId === operationId)
        recData.splice(idx, 1)

        // update 
        this.recData = recData
        localStorage.setItem(key, JSON.stringify(recData))
      }
    },
    removeFromFiles({ idx, operationId }) {
      if(this.files && this.files.length) {
        this.files.splice(idx, 1)

        this.removeFromStorage(operationId, 'recData')
        this.removeFromStorage(operationId, 'recognizedItems')
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

      const recognizedItems = JSON.parse(localStorage.getItem('recognizedItems')) || []
      const isExist = recognizedItems.find(el => el.operationId === recData.operationId)
      if(!isExist){
        recognizedItems.push(recData)
        localStorage.setItem('recognizedItems', JSON.stringify(recognizedItems))
      }
    },
    updateStorage(data){
        const recData = JSON.parse(localStorage.getItem('recData')) || []
        const idxItemToUpdate = recData.findIndex(el => el.operationId === data.operationId)

        recData[idxItemToUpdate].finished = true
        recData[idxItemToUpdate].docxUrl = data.docxUrl

        console.log('updateStorage',recData)

        localStorage.setItem('recData', JSON.stringify(recData))
    },
    async submitForm(filesRaw) {
      console.log('submitForm')
      const files = []
      for(const file of filesRaw){
        files.push({
          name: file.name,
          size: file.size,
          file: file,
          operationId: null,
        })
      }
      this.files = [...this.files, ...files]
    },
  },
}
</script>

<style lang="scss" scoped>
.home{
  padding: 50px 40px;

  @media (max-width: 767px){
    padding: 30px 0;
  }
}
.form{
  z-index: 2;
  position: relative;

  &__wrapper{
    position: relative;
    margin-bottom: 50px;

    @media (max-width: 767px){
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
  }
  &__img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @media (max-width: 1024px){
      left: auto;
      right: 15px;
      transform: translate(0, -50%);
    }
    @media (max-width: 767px){
      display: none;
    }
  }
}
</style>
