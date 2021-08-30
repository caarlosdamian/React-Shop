import { CART_ADD_ITEM, CART_CLEAR, CART_REMOVE_ITEM, CART_UPDATE_QUANTITY_ITEM } from "../constants";

const initState = {
    items: []
}

const cartReducer = (state = initState, action) => {
    const exists = state.items.some(producto => action.producto?.item_id === producto.item_id)

    const addExistingProduct = state.items.map((producto) =>
        producto.item_id === action.producto?.item_id
        ? {
            ...producto,
            quantity: producto.quantity + 1,
            }
        : producto
    )
    switch (action.type) {
        case CART_ADD_ITEM:
            return {
                ...state,
                items: exists ? addExistingProduct : [ ...state.items, { ...action.producto, quantity: 1 }]
            }
        case CART_UPDATE_QUANTITY_ITEM:
            return {
                ...state,
                items: state.items.map(
                    item => item.item_id === action.item_id
                    ? { ...item, quantity: action.quantity }
                    : item
                )
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(({ item_id }) => action.item_id !== item_id),
            }
        case CART_CLEAR:
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
}

export default cartReducer