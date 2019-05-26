import { IGDB_IMAGE_BASE_URL, IGDB_NO_COVER_IMAGE_BASE_URL } from '@/config/constants'

export default class Game {

  /**
   * @constructor
   * @param {Object} param
    * @param {Number} param.id
    * @param {String} param.name
    * @param {Number} param.rating
    * @param {Object} param.cover
      * @param {String} param.cover.image_id
   */
  constructor ({ id, name, cover, rating }) {
    this.id     = id
    this.name   = name
    this.cover  = cover
    this.rating = rating
  }

  get cover_path () {
    let cover_path = IGDB_NO_COVER_IMAGE_BASE_URL;

    if (this.cover && this.cover.image_id)
      cover_path = IGDB_IMAGE_BASE_URL.replace(/%s/, this.cover.image_id)

    return cover_path
  }

}
