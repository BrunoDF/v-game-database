<template>
  <div class="gdb-card gdb-card-skew-left">
    <img :src="imgPath" />
    <!-- <span>{{ name }}</span> -->
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    imgPath: { type: String }
  }
}
</script>

<style lang="scss" scoped>
$minCardSize: 180px;

.gdb-card {
  background-color: #ececec;
  color: $darkGray;
  border: 1px solid $borderColor;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  transition: transform 150ms ease-in-out;
  position: relative;
  min-height: $minCardSize;
  min-width: $minCardSize;
  z-index: 0;

  &.gdb-card-skew-left {
    transform: skewY(-10deg);
  }

  &:hover {
    transform: scale3d(1.5, 1.5, 1) skewY(0);
    z-index: 1;
  }
}
</style>


