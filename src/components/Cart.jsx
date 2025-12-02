import { Box, Modal, Typography, Button, Divider } from '@mui/material';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from '../store/cart-context';

function Cart(props) {
    const { cartData, totalPrice } = useContext(CartContext);
    return (
        <Modal
            open={true}
            aria-labelledby="simple-popup-title"
            aria-describedby="simple-popup-description"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <Box
                sx={{
                    backgroundColor: '#fff',   // white box
                    borderRadius: 2,           // rounded corners
                    padding: 4,                // spacing inside
                    width: 400,                // width of box
                    boxShadow: 24,             // subtle shadow
                }}
            >
                <Typography variant="h6">
                    Total Cart
                </Typography>
                <br></br>
                {cartData.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
                <Divider sx={{ width: '100%', borderColor: 'black' }} />
                <br></br>
                <Box>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography variant="h6">
                            Total Amount
                        </Typography>
                        <Typography sx={{ alignItems: "center" }}>
                            ${totalPrice}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                        <Button variant="contained" color="primary" onClick={props.hideModal}>Close</Button>
                        <Button variant="contained" color="primary">Order</Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}

export default Cart;