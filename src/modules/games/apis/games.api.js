import axios from 'axios'
const API = {

  details(id) {
    const endpoint = '/games'

    const data = `
      fields id,name,cover.image_id,popularity,rating;
      where id = ${id};
    `
    return axios.post(endpoint, data)
  },

  mostPopularByPlatform(platform) {
    const endpoint = '/games'

    const data = `
      fields id,name,cover.image_id,popularity,rating;
      where platforms = ${platform};
      sort popularity desc;
    `
    return axios.post(endpoint, data)
  }

}

export default API;