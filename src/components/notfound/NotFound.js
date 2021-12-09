//import react components
import { Component } from 'react';

//import material ui
import Button from '@mui/material/Button';
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//react-router-dom
import {
    Link
} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <Grid container style={{ marginTop: '100px' }}>
                <Grid align='center' item xs={12}>
                    <DoNotDisturbOnRoundedIcon style={{ fontSize: '100px', color: 'red' }} />
                </Grid>
                <Grid align='center' item xs={12}>
                    <Typography variant="h3" gutterBottom component="div">
                        Page not found!
                    </Typography>
                </Grid>
                <Grid align='center' item xs={12} style={{ marginTop: '100px' }}>
                    <Link
                        to="/"
                        color="inherit"
                        underline="none"
                        style={{ textDecoration: 'none', color: '#565656' }}
                    >
                        <Button variant="contained">Home</Button>
                    </Link>
                </Grid>
            </Grid>
        )
    }
}

export default NotFound;