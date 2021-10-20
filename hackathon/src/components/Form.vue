<template>
  <form action="https://storage.googleapis.com/hakathon" 
        @submit="submit"
        enctype="multipart/form-data">
    <input @change="handleFileUpload" name="file" type="file">
    <input type="submit" value="Upload">
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
  },
  data (){
    return {
      form: {},
      file: '',
    }
  },
  methods: {
    handleFileUpload( event ){
      this.file = event.target.files[0]
    },
    submit(e){
      e.preventDefault()
      
      let formData = new FormData()
      formData.append('key', this.file.name)
      formData.append('file', this.file)

      this.$emit('submit', formData)
    }
  },
}
</script>
