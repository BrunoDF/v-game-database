import GamesAPI from '../apis/games.api'
import Game from '../models/game.model'
class GamesService {

  async details(id) {
    try {
      const response = await GamesAPI.details(id)

      let game

      if (response && response.data) {
        [ game ] = response.data
        game = new Game(game)
      }

      return game
    } catch(err) {
      console.error(err)
      throw err
    }
  }

  async mostPopularByPlatform(platform) {
    try {
      const response = await GamesAPI.mostPopularByPlatform(platform)

      let games = []

      if (response && response.data)
        games = response.data.map(game => new Game(game))

      return games
    } catch(err) {
      console.error(err)
      throw err
    }
  }

}

export default new GamesService()