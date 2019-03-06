<template>
  <div class="gdb-overlay">
    <slot name="text"></slot>
    <slot name="complement"></slot>
  </div>
</template>

<style lang="scss" scoped>
.gdb-overlay {
  color: #ffffff;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
  height: 95%;
  width: 95%;
  border-radius: 5px;
  transform: translate3d(2.5%, 2.5%, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  padding: 5px;
}
</style>


