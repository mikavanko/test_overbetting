<template>
  <div class="home">
    <div class="form__wrapper">
      <img class="form__img" src="@/assets/img/voice.jpg" alt="voice">
      <Form @submit="submitForm" class="form" />
    </div>
    <UploadedList v-if="files.length"
                  :files="files"
                  @recognition-finished="recognitionFinished" />
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import UploadedList from '@/components/UploadedList.vue'

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
    const file = this.getFile()
    console.log(file)
  },
  methods: {
    recognitionFinished(recData) {
      console.log('recData',recData)
      this.$store.dispatch('setRecognizedList', recData)
    },
    async submitForm(files) {
      console.log(files[0])
      this.files = [...this.files, ...files]
      this.gotFile(files[0])
    },
    gotFile(file) {
      var reader = new FileReader()
      reader.onload = function(base64) {
          localStorage["file"] = base64;
      }
      reader.readAsDataURL(file);
    },
    getFile() {
      let file = null
      if(localStorage["file"]){
        var base64 = localStorage["file"];
        var base64Parts = base64.split(",");
        var fileFormat = base64Parts[0].split(";")[1];
        var fileContent = base64Parts[1];
        file = new File([fileContent], "file name here", {type: fileFormat});
      }
      return file;
    }
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
