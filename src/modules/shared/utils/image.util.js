function createImage(url, loadHandler, errorHandler) {
  const img = new Image()

  img.onload  = loadHandler
  img.onerror = errorHandler
  img.src     = url

  return img
}

export default {
  createImage
}