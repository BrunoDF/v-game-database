import axios from 'axios'

export default class DisposeBag {

  constructor() {
    return axios.CancelToken.source()
  }

}