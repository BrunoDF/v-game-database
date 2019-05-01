import axios from 'axios'

async function preloadImage(url, loadHandler, errorHandler) {

  const { data } = await axios.get(url, { responseType: 'blob' })

  const fileReader = new FileReader()

  fileReader.onloadend = loadHandler
  fileReader.onerror   = errorHandler

  fileReader.readAsDataURL(data)

  return fileReader

}

export default {
  preloadImage
}