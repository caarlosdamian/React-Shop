import { CartItemValues } from '../types';
// Gets total quantity of items in the cart


export const getTotalQuantityCart = (cartProducts: CartItemValues[])  => cartProducts?.reduce((acc, curr) => acc + curr.cartQuantity, 0)

// Gets total price from all items in the cart
export const getTotalPriceCart = (cartProducts: CartItemValues[]) => {
    const totalByProduct = cartProducts?.map(({ price, cartQuantity }, i) => price * cartQuantity)
    return totalByProduct?.reduce((acc, curr) => acc + curr, 0)
}
// const arr = ['Arturo', 'Juan', 'Pedro']
// const result = arr.map((el, i) => { return { name: el, index: i } })