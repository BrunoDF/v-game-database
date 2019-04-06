import { isNumber } from '../utils/number.util'

function asInteger(value, digits = 0) {
  let valueAsInteger

  if (value && isNumber(value))
    valueAsInteger = value.toFixed(digits)

  return valueAsInteger
}

export default asInteger