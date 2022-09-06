<template>
  <loading-icon class="loading" />
</template>

<script>
import LoadingIcon from '../assets/icons/loading.svg';

export default {
  name: 'VLoading',
  components: {
    LoadingIcon,
  },
};
</script>

<style lang="scss">
  .loading{
    font-size: 34px;
    color: $color-text-active;
  }
</style>
