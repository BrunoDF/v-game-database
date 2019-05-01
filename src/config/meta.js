import router from './router'
import { DEFAULT_TITLE } from './constants'

function setPageTitle(title = router.currentRoute.meta.title) {
  document.title = title || DEFAULT_TITLE
}

export default {
  setPageTitle
}