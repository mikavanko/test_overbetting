<template>
  <div class="editor">
    <editor
      api-key="no-api-key"
      :init="{
        height: 500,
        plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools'
        ],
        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor emoticons',
        image_advtab: true,
        templates: [
          { title: 'Test template 1', content: 'Test 1' },
          { title: 'Test template 2', content: 'Test 2' },
        ],
        extended_valid_elements : 'word[time]',
        custom_elements: '~word',
        init_instance_callback: initInstanceCallback
      }"
      v-model="content"
     />
     <br>

    <button @click="onClick">Load docx</button>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
// import HTMLtoDOCX from 'html-to-docx'
export default {
  name: 'Editor',
  components: {
    'editor': Editor
  },
  props: {
    contentArr: {
      type: Array,
      default: () => null
    }
  },
  data() {
    return {
      content: '',
    }
  },
  watch: {
    contentArr(val) {
      this.content = val.map(el => {
        if(el.confidence < 0.6){
          return `<span style="background-color: red;"><word time="${el.startTime}">${el.word}</word></span>`
        }
        return `<word time="${el.startTime}">${el.word}</word>`
      }).join(' ')
    }
  },
  mounted() {},
  methods: {
    initInstanceCallback: function(editor) {
      editor.on('click', function () {
        // console.log('Element clicked:', e.target);
      });
    },
    downloadBlob(blob, name = 'file.docx') {
      // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
      const blobUrl = URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement('a');

      // Set link's href to point to the Blob URL
      link.href = blobUrl;
      link.download = name;

      // Append link to the body
      document.body.appendChild(link);

      // Dispatch click event on the link
      // This is necessary as link.click() does not work on the latest firefox
      link.dispatchEvent(
        new MouseEvent('click', { 
          bubbles: true, 
          cancelable: true, 
          view: window 
        })
      );

      // Remove link from body
      document.body.removeChild(link);
    },
    async onClick() {
      // console.log(this.content)
      // const res = await HTMLtoDOCX(this.content)
      // console.log('res',res) 
      // this.downloadBlob(res)
    }
  },
}
</script>

<style lang="scss">
.tox-notifications-container {
    display: none;
}
</style>