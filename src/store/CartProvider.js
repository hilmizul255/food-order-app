import CartContext from "./cart-context";
import { useState } from "react";

function CartProvider(props) {
    const [cartData, setCartData] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemHandler = (item) => {
        setCartData((prev) => [...prev, item]);
        setTotalQuantity((prev) => prev + item.quantity);
        setTotalPrice((prev) => prev + item.price * item.quantity);
    };


    const increaseItemHandler = (id) => {
        const filteredItems = cartData.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        setCartData(filteredItems)
        setTotalQuantity((prev) => prev + 1);
    };

    const decreaseItemHandler = (id) => {
        const existingItem = cartData.find((item) => item.id === id);
        if (existingItem.quantity > 1) {
            const decreaseItems = cartData.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
            setCartData(decreaseItems)
            setTotalQuantity((prev) => prev - 1);
        } else {
            const removeItems = cartData.filter((item) => item.id !== id)
            setCartData(removeItems)
            setTotalQuantity((prev) => prev - 1);
        }
    };

    const totalPriceHandler = () => {
        let total = 0;
        cartData.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    const contextValue = {
        cartData: cartData,
        totalQuantity: totalQuantity,
        totalPrice: totalPriceHandler(),
        addItem: addItemHandler,
        increaseItem: increaseItemHandler,
        decreaseItem: decreaseItemHandler,
    };


    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
