import router from './router'
import { DEFAULT_TITLE } from './constants'

class MetaManager {

  setPageTitle(title = router.currentRoute.meta.title) {
    document.title = title || DEFAULT_TITLE
  }

}

export default new MetaManager()