import { Param } from '@bit/mcmanus68.webmaker.types.types'

export function reduceParams(params: Param[]) {
  return params.reduce((obj, current) => {
    obj[current.name] = current.value
    return obj
  }, {})
}
