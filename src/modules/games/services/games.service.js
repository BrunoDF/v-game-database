import GamesAPI from '../apis/games.api'
import Game from '../models/game.model'

class GamesService {

  async details(id) {
    const response = await GamesAPI.details(id)

    let [ game ] = [].concat(response.data)
    game = new Game(game)

    return game
  }

  async mostPopularByPlatform(platform) {
    const response = await GamesAPI.mostPopularByPlatform(platform)

    return response.data.map(game => new Game(game))
  }

}

export default new GamesService()