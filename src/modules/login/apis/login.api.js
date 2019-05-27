const API = {

  login(username, password) {
    return new Promise((resolve, reject) => {
      const error   = new Error('Invalid username or password')
      const payload = {
        headers: {
          authorization: 'ca94fd027732ee92609eb738f1f17232'
        }
      }

      setTimeout(() => {
        username === 'Vue' && password === '1234' ? resolve(payload) : reject(error)
      }, 1000)
    });
  }

}

export default API