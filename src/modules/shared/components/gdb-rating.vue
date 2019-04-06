<template functional>
  <div v-if="props.rating" class="gdb-rating">{{ props.rating }}</div>
</template>

<style lang="scss" scoped>
  $opacity: .7;

  .gdb-rating {
    display: inline-block;
    background-color: rgba(0,0,0,$opacity);
    font-weight: 700;
    padding: 5px 8px;
    border-radius: 5px;
    border: 2px solid rgba(255,255,255,$opacity);
  }
</style>
