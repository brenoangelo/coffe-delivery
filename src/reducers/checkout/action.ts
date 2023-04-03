import { Product } from "./reducer"

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function addNewProductAction(newProduct: Product) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct
    }
  }
}

export function removeProductAction(id: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id
    }
  }
}