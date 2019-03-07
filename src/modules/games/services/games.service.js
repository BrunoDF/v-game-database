import GamesAPI from '../apis/games.api'
import { IGDB_IMAGE_BASE_URL, IGDB_NO_COVER_IMAGE_BASE_URL } from '@/config/constants'

import '../types/game.d'
import '../types/platform.d'

class GamesService {

  /** @param {number} id */
  async details(id, opts) {
    try {
      const response = await GamesAPI.details(id, opts)

      /** @type {Game} */
      let game

      if (response && response.data) {
        [ game ] = response.data

        const image_id = game.cover && game.cover.image_id
        game.cover_path = formatImageUrl(image_id)

        return game
      }

      return game
    } catch(err) {
      console.error(err)
      throw err
    }
  }

  /** @param {Platform} platform */
  async mostPopularByPlatform(platform, opts) {
    try {
      const response = await GamesAPI.mostPopularByPlatform(platform, opts)

      /** @type {Game[]} */
      let games = []

      if (response && response.data) {
        games = response.data.map(game => {
          const image_id = game.cover && game.cover.image_id
          game.cover_path = formatImageUrl(image_id)

          return game
        })
      }

      return games
    } catch(err) {
      console.error(err)
      throw err
    }
  }

}

function formatImageUrl(image_id) {
  return image_id ? IGDB_IMAGE_BASE_URL.replace(/%s/, image_id) : IGDB_NO_COVER_IMAGE_BASE_URL
}

export default new GamesService()