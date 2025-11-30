import { Card, CardContent, Typography } from '@mui/material';

function MealsItem(props) {

    const {name, description, price} = props.item;
    return (
<Card>
            <CardContent>
              <Typography variant="h5">Card {name}</Typography>
              <Typography variant="body2">{description}</Typography>
            </CardContent>
          </Card>
    );
}

export default MealsItem;