import axios from '@/config/axios'

class GamesAPI {

  mostPopularByPlatform(platform) {
    const endpoint = '/games'

    const data = `
      fields id,name,cover.image_id,popularity,rating;
      where platforms = ${platform};
      sort popularity desc;
    `
    return axios.post(endpoint, data, {
      headers: {
        common: {
          'user-key': 'ca94fd027732ee92609eb738f1f17232'
        }
      }
    })
  }

}

export default new GamesAPI()