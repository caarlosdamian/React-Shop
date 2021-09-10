// Gets total quantity of items in the cart
export const getTotalQuantityCart = cartProducts => cartProducts?.reduce((acc, curr) => acc + curr.quantity, 0)

// Gets total price from all items in the cart
export const getTotalPriceCart = cartProducts => {
    const totalByProduct = cartProducts?.map(({ price, quantity}) => price * quantity)
    return totalByProduct?.reduce((acc, curr) => acc + curr, 0)
}