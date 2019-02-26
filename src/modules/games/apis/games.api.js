import axios from 'axios'

const API = {

  mostPopularByPlatform(platform, opts) {
    const endpoint = '/games'

    const data = `
      fields id,name,cover.image_id,popularity,rating;
      where platforms = ${platform};
      sort popularity desc;
    `
    return axios.post(endpoint, data, opts)
  }

}

export default API;