function handler(e) {
  if (e.deltaY !== 0) {
    e.preventDefault();

    const multiplier = 1.5;
    const offset = e.deltaY * multiplier;
    this.scrollLeft += offset;
  }
}

export default {
  wheelHorizontalScroll: {
    bind: function (el) {
      el.addEventListener('wheel', handler)
    },
    unbind: function(el) {
      el.removeEventListener('wheel', handler)
    }
  }
}