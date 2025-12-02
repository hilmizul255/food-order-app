import './pages.css';
import { Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

function Admin() {
    return (
        <Grid container >
            <Grid size={3} ><Sidebar/></Grid>
            <Grid size={9} sx={{backgroundColor: '#EDEDED'}}><Main/></Grid>
        
        </Grid>
    );
}

export default Admin;