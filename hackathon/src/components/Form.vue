<template>
  <form action="https://storage.googleapis.com/hakathon" 
        @submit="submit"
        enctype="multipart/form-data"
        class="form">
    <label class="form__upload">
      <input @change="handleFileUpload"
             name="file"
             type="file"
             class="form__upload__hide"
             accept=".mp3"
             multiple/>
      Загрузить файл в .mp3
    </label>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
  },
  data (){
    return {
      files: null,
    }
  },
  methods: {
    handleFileUpload( event ){
      this.files = event.target.files

      this.submit()
    },
    submit(){
      // e.preventDefault()
      // const formDataArr =  []
      // for(const file of this.files) {
      //   let formData = new FormData()
      //   formData.append('key', file.name)
      //   formData.append('file',file)
      //   formDataArr.push(formData)
      // }
      this.$emit('submit', this.files)
    }
  },
}
</script>

<style lang="scss" scoped>
.form{

  &__upload{
    @include clear-btn();

    padding: 16px 26px;
    border-radius: 5px;
    background-color: $main-color;
    color: $body-color;
    font-size: 14px;
    line-height: 17px;
    font-family: $font-family;

    &:hover{
      background-color: $hover-color;
    }

    &__hide{
      display: none;
    }
  }
}
</style>