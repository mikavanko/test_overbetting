<template>
  <div class="edit-page">
    <editor :content-arr="content" />
  </div>
</template>

<script>
import Editor from '@/components/Editor'
export default {
  name: 'Edit',
  components: { Editor },
  data() {
    return {
      content: null
    }
  },
  mounted() {
    const id = this.$route.params.id
    this.content = this.$store.getters.getRecognizedItem(id)
  },
}
</script>

<style>
</style>
