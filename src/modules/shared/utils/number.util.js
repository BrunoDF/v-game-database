function isNumber(val) {
  const parsedValue    = parseFloat(val)
  const isNumber       = !isNaN(parsedValue)
  const isFiniteNumber = isFinite(val)

  return isNumber && isFiniteNumber
}

export {
  isNumber
}