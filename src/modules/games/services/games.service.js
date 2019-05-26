import GamesAPI from '@/modules/games/apis/games.api'
import Game from '@/modules/games/models/game.model'

class GamesService {

  async details(id) {
    const response = await GamesAPI.details(id)

    const [ result ] = [].concat(response.data)

    return new Game(result)
  }

  async mostPopularByPlatform(platform) {
    const response = await GamesAPI.mostPopularByPlatform(platform)

    return response.data.map(game => new Game(game))
  }

}

export default new GamesService()