const formErrors = {
  required: 'Campo obrigatório'
}

const computed = {
  label() {
    const [ firstLetter, ...remainings ] = this.name
    return firstLetter.toUpperCase() + remainings.join('')
  },

  getErrors() {
    const errors = []
    const validationParams = Object.values(this.validation.$params)

    if (this.validation.$error || this.validation.$anyError || this.validation.$invalid)
      validationParams.forEach(val => {
        const errorKey = val.type
        const errorMsg =  formErrors[errorKey]
        errors.push(errorMsg)
      })

    return errors
  }
}

export default {
  computed
}