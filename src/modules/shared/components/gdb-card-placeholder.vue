<template>
  <div class="gdb-card-placeholder">
    <div class="gdb-card-placeholder-content">
      <font-awesome-icon size="8x" :icon="['fa', 'arrow-circle-up']" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$imageSize: 160px;
$iconSize: 60px;

.gdb-card-placeholder {
  color: white;
  background: linear-gradient(135deg, #{$darkMidGray} 0%, #{$darkDeepGray} 100%);
  height: $cardHeight;
  width: $cardWidth;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
  position: relative;

  .gdb-card-placeholder-content {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

}
</style>