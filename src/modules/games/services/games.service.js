import GamesAPI from '@/modules/games/apis/games.api'
import Game from '@/modules/games/models/game.model'

class GamesService {

  async mostPopularByPlatform(platform) {
    const response = await GamesAPI.mostPopularByPlatform(platform)

    return response.data.map(game => new Game(game))
  }

}

export default new GamesService()