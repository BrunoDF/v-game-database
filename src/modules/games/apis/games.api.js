import axios from 'axios'
import disposeBag from '../../../config/dispose-bag'

const API = {

  details(id) {
    const endpoint = '/games'

    const data = `
      fields id,name,cover.image_id,popularity,rating;
      where id = ${id};
    `
    return axios.post(endpoint, data, { cancelToken: disposeBag.token })
  },

  mostPopularByPlatform(platform) {
    const endpoint = '/games'

    const data = `
      fields id,name,cover.image_id,popularity,rating;
      where platforms = ${platform};
      sort popularity desc;
    `
    return axios.post(endpoint, data, { cancelToken: disposeBag.token })
  }

}

export default API;