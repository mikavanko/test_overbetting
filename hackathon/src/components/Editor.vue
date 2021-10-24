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
      contextMenuElemClicked: null,
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
  computed: {
    options() {
      return {
        selector: 'textarea#contextmenu-section',
        height: 500,
        plugins: [
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
  methods: {
    updateContextMenu(ctx,editor) {
      const _this = this
      editor.ui.registry.addIcon('fuck', `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7.5" cy="7.5" r="7.5" fill="#075050"/>
                                            <path d="M9.75 7.06699C10.0833 7.25944 10.0833 7.74056 9.75 7.93301L6.75 9.66506C6.41667 9.85751 6 9.61695 6 9.23205V5.76795C6 5.38305 6.41667 5.14249 6.75 5.33494L9.75 7.06699Z" fill="white"/>
                                            </svg>
                                          `);

      editor.ui.registry.addMenuItem('customItem1', {
          icon: 'fuck',
          text: 'Проиграть',
          onAction: function () {
            const htmlString = editor.selection.getContent()
            const wrapper= document.createElement('div');
            wrapper.innerHTML= htmlString
            
            console.log('SELECTED', wrapper.children)
            console.log('vue',ctx)
            if(wrapper.children.length){
              ctx.$emit('play', {
                timeStart: wrapper.children[0].getAttribute('time'),
                timeEnd: wrapper.children[wrapper.children.length-1].getAttribute('time'),
              })
            }else{
              ctx.$emit('play', {
                timeStart: _this.contextMenuElemClicked,
                timeEnd: _this.contextMenuElemClicked,
              })
            }
          }
      });
    },
    init: function (editor) { // wait till editor initialize
      const _this = this
      editor.on('init', function () {
        this.editor = editor
        // eslint-disable-next-line
        this.tinymce = tinymce

        _this.updateContextMenu(_this, this.editor)
      });
    },
    initInstanceCallback: function (editor) {
      const _this = this
      editor.on('click', function (e) {
        console.log('Element clicked:', e.target);
      });
      editor.on('ContextMenu', function (e) {
        _this.contextMenuElemClicked = e.target
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