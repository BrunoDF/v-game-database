import { IGDB_IMAGE_BASE_URL, IGDB_NO_COVER_IMAGE_BASE_URL } from '@/config/constants'

// export default function Game(rawData = {}) {

//   let id     = rawData.id
//   let name   = rawData.name
//   let cover  = rawData.cover
//   let rating = rawData.rating

//   this.getId     = () => id
//   this.getName   = () => name
//   this.getCover  = () => cover
//   this.getRating = () => rating

//   this.cover_path = () => {
//     let cover_path = IGDB_NO_COVER_IMAGE_BASE_URL;

//     if (cover && cover.image_id)
//       cover_path = IGDB_IMAGE_BASE_URL.replace(/%s/, cover.image_id)

//     return cover_path
//   }

// }

export default class Game {
  constructor (rawData = {}) {
    this.id          = rawData.id
    this.name        = rawData.name
    this.cover       = rawData.cover
    this.rating      = rawData.rating
  }

  get cover_path () {
    let cover_path = IGDB_NO_COVER_IMAGE_BASE_URL;

    if (this.cover && this.cover.image_id)
      cover_path = IGDB_IMAGE_BASE_URL.replace(/%s/, this.cover.image_id)

    return cover_path
  }
}