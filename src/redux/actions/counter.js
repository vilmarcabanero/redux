import * as CONST from 'utils/constants/actionTypes'

export const increment = () => {
  return {
    type: CONST.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: CONST.DECREMENT
  }
}