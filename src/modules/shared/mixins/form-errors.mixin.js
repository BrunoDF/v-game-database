const formErrorsMsgs = {
  required: 'Campo obrigatório'
}

const computed = {
  formErrors() {
    const errors = []
    const validationParams = Object.values(this.validation.$params)

    if (this.validation.$error || this.validation.$anyError)
      validationParams.forEach(val => {
        const errorKey = val.type
        const errorMsg = formErrorsMsgs[errorKey]
        errors.push(errorMsg)
      })

    return errors
  }
}

export default {
  computed
}