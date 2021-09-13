
// Cart interfaces ⬇
export interface CartState {
    items: CartItemValues[];
    Cart_Quantity: number;
    total: number;
}

export interface CartItemValues {
    col_id: number;
    title: string;
    item_id: number;
    name: string;
    price: number;
    imageUrl: string;
    image: string;
    cartQuantity: number;
}

export interface FormDat{
    email:string;
    password:string
}

export interface CartTotalValues {
    total: number;
    quantity: number;
}

// Collection interfaces ⬇

export interface CollectionState {
    collection: { data: CartItemValues[] }
}

// auth interfaces ⬇

export interface AuthState {
    token: string;
    isAuth: boolean;
}

// components ⬇

export interface HeaderComponent {
    setisToggle: (newStates: boolean) => void;
    isToggle: boolean;
}