<template>
  <div class="gdb-card-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.gdb-card-wrapper {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-grow: 1;
  position: relative;
  width: 90%;
  margin: 0 auto;
}
</style>


