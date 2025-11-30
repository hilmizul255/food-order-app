import { Card, CardContent, Typography, Paper, Box } from '@mui/material';
import Grid from '@mui/material/Grid';


function MealsItem(props) {

  const { name, description, price, image } = props.item;
  return (
    <Grid
      xs={12}
      sm={6}
      md={4}

    >
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Paper sx={{ borderRadius: 5, overflow: "hidden", height: "250px", width: "250px" }}>
            <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
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
          
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MealsItem;