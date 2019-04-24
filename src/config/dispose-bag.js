import axios from 'axios'

class DisposeBag {

  get token() {
    return this._source.token
  }

  create() {
    this.dispose()
    this._source = axios.CancelToken.source()
  }

  dispose(message) {
    if (this._source && !axios.isCancel(this._source.token.reason))
      this._source.cancel(message)
  }

}

export default new DisposeBag()