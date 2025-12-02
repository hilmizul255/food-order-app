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
                    backgroundColor: '#fff',  
                    borderRadius: 2,          
                    padding: 4,                
                    width: 400,                
                    boxShadow: 24,             
                }}
            >
                <Typography variant="h6">
                    Total Foods
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
                            Total Price
                        </Typography>
                        <Typography sx={{ alignItems: "center" }}>
                            ${totalPrice}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1, mt: 2, width: "100%", justifyContent: "center" }}>
                        <Button fullWidth variant="contained" color="error" onClick={props.hideModal}>Close</Button>
                        <Button fullWidth variant="contained" color="primary">Order</Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}

export default Cart;