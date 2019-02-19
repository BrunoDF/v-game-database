import GamesAPI from '../apis/games.api'
import { IGDB_IMAGE_BASE_URL, IGDB_NO_COVER_IMAGE_BASE_URL } from '../../../config/constants'

import '../types/game.d'
import '../types/game_release_date.d'
import '../types/platform.d'

class GamesService {

  // async game(id) {
  //   try {
  //     const response = await GamesAPI.game(id)

  //     /** @type {Game[]} */
  //     let games = []

  //     if (response && response.data) {
  //       games = response.data.map(game => {
  //         game.cover_path = this.formatUrl(game.cover)

  //         return game
  //       })
  //     }

  //     return games
  //   } catch(err) {
  //     throw err
  //   }
  // }

  /** @param {Platform} platform */
  async comingSoon(platform, opts) {
    try {
      const response = await GamesAPI.comingSoon(platform, opts)

      /** @type {GameReleaseDate[]} */
      let gamesReleaseDates = []

      if (response && response.data) {
        gamesReleaseDates = response.data.map(gameReleaseDate => {
          if (gameReleaseDate.game.cover)
            gameReleaseDate.game.cover_path = this.formatUrl(gameReleaseDate.game.cover.image_id)
          else
            gameReleaseDate.game.cover_path = IGDB_NO_COVER_IMAGE_BASE_URL;

          return gameReleaseDate
        })
      }

      return gamesReleaseDates
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