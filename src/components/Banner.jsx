import '../mui-styles/Banner.css';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';


function Banner() {
    return (
        <> <section className="hero">
            <div className="hero-card">
                <Typography variant="h1">FOODYNERD</Typography>
                <Typography variant="p">IS WHERE YOU GET YOUR FAVORITE FOOD</Typography>
                <Button variant="contained" color="secondary">DISCOVER</Button>
            </div>
            <div className="overlay"></div>
        </section>
        </>

    );
}

export default Banner;
