<template>
  <v-card-media
    v-if="hintNotSelf"
    class="cursor-pointer"
    :src="getPreviewImageUrl"
    @click="onImageClick"
    height="300px"
  />
</template>

<script>
  export default {
    props: {
      onImageClick:{
        type: Function,
        default () {
          return false
        }
      },
      data: {
        type: Object,
        default () {
          return {
            preview: '',
            post_hint: 'self'
          }
        }
      }
    },
    computed: {
      hintNotSelf () {
        return typeof this.data.preview !== 'undefined' && this.data.post_hint !== 'self'
      },
      getPreviewImageUrl () {
        return this.data.preview.images[0].source.url
      }
    }
  }
</script>
