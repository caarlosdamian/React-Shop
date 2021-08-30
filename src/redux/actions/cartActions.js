import { CART_ADD_ITEM, CART_CLEAR, CART_REMOVE_ITEM, CART_UPDATE_QUANTITY_ITEM } from "../constants";

// add an item to cart
export const addItem = item => ({ type: CART_ADD_ITEM, producto: item })

// update (+ or -) quantity of an specific item in the cart
export const updateItemQuantity = (item_id, quantity) => ({ type: CART_UPDATE_QUANTITY_ITEM, item_id, quantity })

// removes an specific item from cart
export const removeCartItem = item_id => ({ type: CART_REMOVE_ITEM, item_id })

// removes all items in the cart
export const cleanCart = () => ({ type: CART_CLEAR })