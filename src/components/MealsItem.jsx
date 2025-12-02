import { Card, CardContent, Typography, Paper, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import itemsContext from '../store/items-context';
import CartContext from '../store/cart-context';


function MealsItem(props) {

  const { name, description, price, image } = props.item;
  const { switchPage, removeItem } = useContext(itemsContext);
  const cartCtx = useContext(CartContext);
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Paper sx={{ borderRadius: 5, overflow: "hidden", height: "250px", width: "100%" }}>
            <img src={image || null} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          </Paper>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1, justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="body2">{description}</Typography>
            </Box>
            <Box>
              <Typography variant="h5">${price}</Typography>
            </Box>
          </Box>
          {switchPage === "User" ? (
            <Box >
              <Button variant="contained" color="primary" fullWidth onClick={() => { cartCtx.addItem({ ...props.item, quantity: 1 }); props.OnshowCart(); }}>Add to Cart</Button>
            </Box>
          ) : (
            <Box>
              <Button variant="contained" color="error" fullWidth onClick={() => removeItem(props.item.id)}>Remove Item</Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MealsItem;