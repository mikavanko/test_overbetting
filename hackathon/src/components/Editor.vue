<template>
  <div class="editor">
    <editor
      ref="editor"
      api-key="no-api-key"
      :init="options"
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
      tinymce: null,
      editor: null,
      content: '',
      options: {
        selector: 'textarea#contextmenu-section',
        height: 500,
        plugins: [
        'my-example-plugin',
        'contextmenu'
        // 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        // 'searchreplace wordcount visualblocks visualchars code fullscreen',
        // 'insertdatetime media nonbreaking save table contextmenu directionality',
        // 'emoticons template paste textcolor colorpicker textpattern imagetools',
        ],
        contextmenu: 'customItem1',
        contextmenu_never_use_native: true,
        // toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        // toolbar2: 'print preview media | forecolor backcolor emoticons',
        // image_advtab: true,
        // templates: [
        //   { title: 'Test template 1', content: 'Test 1' },
        //   { title: 'Test template 2', content: 'Test 2' },
        // ],
        extended_valid_elements : 'word[time]',
        custom_elements: '~word',
        init_instance_callback: this.initInstanceCallback,
        setup: this.init
      }
    }
  },
  watch: {
    contentArr(val) {
      this.content = val.map(el => {
        const seconds = +el.startTime.seconds || 0
        const nanos = +el.startTime.nanos || 0
        const time = seconds + nanos.toString()[0] / 10

        if(el.confidence < 0.6){
          return `<span style="background-color: red;"><word time="${time}">${el.word}</word></span>`
        }
        return `<word time="${time}">${el.word}</word>`
      }).join(' ')
    }
  },
  mounted() {
  },
  methods: {
    updateContextMenu(editor) {
      editor.ui.registry.addIcon('fuck', '<svg height="24" width="24"><path d="M12 0 L24 24 L0 24 Z" /></svg>' );

      editor.ui.registry.addMenuItem('customItem1', {
          icon: 'fuck',
          text: 'Проиграть',
          onAction: function () {
            const htmlString = editor.selection.getContent()
            const wrapper= document.createElement('div');
            wrapper.innerHTML= htmlString

            console.log('SELECTED', wrapper)
          }
      });
    },
    init: function (editor) { // wait till editor initialize
      const _this = this
      editor.on('init', function () {
        _this.editor = editor
        // eslint-disable-next-line
        _this.tinymce = tinymce

        _this.updateContextMenu(_this.editor)
      });
    },
    initInstanceCallback: function (editor) {
      editor.on('click', function (e) {
        console.log('Element clicked:', e.target);
      });
      editor.on('ContextMenu', function (e) {
        console.log('ContextMenu Element clicked:', e.target);
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


      console.log(this.editor, this.tinymce)
    }
  },
}
</script>

<style lang="scss">
.tox-notifications-container {
    display: none;
}
</style>