// ROUTES
export const LOGIN_ROUTE_NAME       = 'login'
export const AFTER_LOGIN_ROUTE_NAME = 'about'
export const REDIRECT_ROUTE_NAME    = 'games'

// IGDB
export const IGDB_BASE_URL = process.env.VUE_APP_IGDB_BASE_URL
export const IGDB_THUMB_BASE_URL = 'https://images.igdb.com/igdb/image/upload/t_thumb_2x/%s.jpg'
export const IGDB_IMAGE_BASE_URL = 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/%s.jpg'
export const IGDB_NO_COVER_IMAGE_BASE_URL = 'https://images.igdb.com/igdb/image/upload/t_thumb_2x/nocover_qhhlj6.jpg'

// PLATFORMS
export const IGDB_PLATFORMS = {
  PS4: 48,
  XBOX_ONE: 49,
  SWITCH: 130
}
