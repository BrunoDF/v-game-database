import LoginAPI from '../apis/login.api'

class LoginService {

  async login(username, password) {
    try {
      const response = await LoginAPI.login(username, password)

      const token = response.headers.authorization

      localStorage.setItem('token', token)

      return token
    } catch(err) {
      console.error(err)
      throw err
    }
  }

  async logout() {
    try {
      localStorage.removeItem('token')
    } catch(err) {
      console.error(err)
      throw err
    }
  }

}

export default new LoginService()