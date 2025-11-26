import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Typography,
} from "@mui/material";
import { useContext } from 'react';
import itemsContext from '../../store/items-context';



function FoodItem(props) {
    const itemsCtx = useContext(itemsContext);
    return (
        <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image={props.image}
                    alt={props.name}
                />

                <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                        {props.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {props.desc}
                    </Typography>

                    <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                        ${props.price}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                {itemsCtx.switchPage === "User" ? <Button variant="contained" color="secondary" fullWidth>
                    ADD TO CART
                </Button>: <Button variant="contained" color="error" fullWidth>
                    REMOVE FROM CART
                </Button>}
            </CardActions>
        </Card>
    );
}

export default FoodItem;