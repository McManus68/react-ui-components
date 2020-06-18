export function reduceParams(params) {
  return params.reduce((obj, current) => {
    obj[current.name] = current.value
    return obj
  }, {})
}
