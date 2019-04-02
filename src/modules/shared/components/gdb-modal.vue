<template>
  <div class="gdb-modal">
    <div class="gdb-modal-backdrop" @click="close"></div>
    <div class="gdb-modal-content">
      <div class="gdb-modal-content-header">
        <span v-if="title" class="gdb-modal-content-header-title">{{ title }}</span>
        <font-awesome-icon :icon="['fa', 'times-circle']" class="gdb-modal-content-header-close" @click="close" />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title()  {
      let title
      if (this.$route.meta.modalOptions)
        title = this.$route.meta.modalOptions.title

      return title
    }
  },
  methods: {
    close() {
      this.$router.push({ name: 'games' })
    }
  }
}
</script>

<style lang="scss" scoped>
.gdb-modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .gdb-modal-backdrop {
    background-color: rgba(0,0,0,0.3);
    height: inherit;
    width: inherit;
  }

  .gdb-modal-content {
    background-color: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translate3d(-50%,0,0);
    width: 600px;
    min-height: 100px;

    .gdb-modal-content-header {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      padding: 15px 20px;
      font-size: 24px;
      color: #333333;

      .gdb-modal-content-header-title {
        width: 100%
      }

      .gdb-modal-content-header-close {
        cursor: pointer;
      }
    }
  }
}
</style>


