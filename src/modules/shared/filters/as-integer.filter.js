import { isNumber } from '../utils/number.util'

function asInteger(value) {
  let valueAsInteger

  if (value && isNumber(value))
    valueAsInteger = value.toFixed(0)

  return valueAsInteger
}

export default asInteger