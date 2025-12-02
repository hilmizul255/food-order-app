import { createContext } from "react";

const CartContext = createContext({
    cartData: [],
    totalQuantity: 0,
    totalPrice: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    increaseItem: (id) => { },
    decreaseItem: (id) => { },
});

export default CartContext;
