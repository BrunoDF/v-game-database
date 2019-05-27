import LoginAPI from '../apis/login.api'

class LoginService {

  async login(username, password) {
    const response = await LoginAPI.login(username, password)

    const token = response.headers.authorization

    localStorage.setItem('token', token)

    return token
  }

  isLoggedIn() {
    let isLoggedIn = false
    const token = localStorage.getItem('token')

    if (token)
      isLoggedIn = true

    return isLoggedIn
  }

  async logout() {
    localStorage.removeItem('token')
  }

}

export default new LoginService()