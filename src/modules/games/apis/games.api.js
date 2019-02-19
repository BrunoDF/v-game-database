import axios from 'axios'
import moment from 'moment';

const API = {

  // game(id) {
  //   const endpoint = `${IGDB_BASE_URL}/games/${id}`
  //   return axios.post(endpoint, `
  //     fields id,artworks,category,cover,genres,name,popularity,rating,platforms,involved_companies;
  //     sort popularity desc;
  //   `)
  // },

  comingSoon(platform, opts) {
    const endpoint = '/release_dates'

    const now = moment().unix()
    const twoWeeksFromNow = moment().add(2, 'weeks').unix()

    const data = `
      fields id,game.id,game.name,game.cover.image_id,date;
      where platform = ${platform} & date > ${now} & date < ${twoWeeksFromNow};
      sort date asc;
    `

    return axios.post(endpoint, data, opts)
  }

}

export default API;