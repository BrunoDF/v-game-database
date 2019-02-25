import GamesAPI from '../apis/games.api'
import { IGDB_IMAGE_BASE_URL, IGDB_NO_COVER_IMAGE_BASE_URL } from '../../../config/constants'

import '../types/game.d'
import '../types/platform.d'

class GamesService {

  /** @param {Platform} platform */
  async mostPopularByPlatform(platform, opts) {
    try {
      const response = await GamesAPI.mostPopularByPlatform(platform, opts)

      /** @type {Game[]} */
      let games = []

      if (response && response.data) {
        games = response.data.map(game => {
          if (game.cover)
            game.cover_path = this.formatUrl(game.cover.image_id)
          else
            game.cover_path = IGDB_NO_COVER_IMAGE_BASE_URL;

          return game
        })
      }

      return games
    } catch(err) {
      console.error(err)
      throw err
    }
  }

  formatUrl(image_id) {
    return IGDB_IMAGE_BASE_URL.replace(/%s/, image_id)
  }

}

export default new GamesService()