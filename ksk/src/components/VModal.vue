<template>
  <div
    v-if="isModalVisible"
    ref="modal"
    class="modal"
    :style="{
      '--left': modalCoords.x + 'px',
      '--top': modalCoords.y + 'px',
    }"
    @click="remove"
  >
    <trash-icon class="modal-icon" />
    <span class="modal-text">удалить</span>
  </div>
</template>

<script>
import TrashIcon from '../assets/icons/trash.svg';

export default {
  name: 'VModal',
  components: {
    TrashIcon,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modalCoords: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    isModalVisible: {
      get() {
        return this.$props.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  watch: {
    isModalVisible(val) {
      if (val) {
        document.addEventListener('click', this.hideModalTarget, true);
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.setCoords);
  },
  destroyed() {
    document.removeEventListener('click', this.setCoords);
  },
  methods: {
    hideModalTarget(e) {
      if (!this.$refs.modal.contains(e.target)) {
        this.hideModal();
      }
      document.removeEventListener('click', this.hideModalTarget, true);
    },
    hideModal() {
      this.isModalVisible = false;
    },
    remove() {
      this.$nextTick(() => this.hideModal());
      this.$emit('remove');
    },
    setCoords(e) {
      this.modalCoords = {
        x: e.clientX,
        y: e.clientY,
      };
    },
  },
};
</script>

<style lang="scss">
.modal {
  background: $color-bg-light;
  box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
  border-radius: 2px;
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: fixed;
  top: var(--top);
  left: var(--left);
  transform: translate(-100%, 10px);

  &-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: $color-heading-dark;
    transition: .3s ease;
  }

  &-icon {
    font-size: 12px;
    color: $border-color-style-4;
    transition: .3s ease;
  }

  $p: &;

  &:hover,
  &:active {
    #{$p}-text{
      color: $color-text-active;
    }
    #{$p}-icon{
      color: $color-text-active;
    }
  }
}
</style>
