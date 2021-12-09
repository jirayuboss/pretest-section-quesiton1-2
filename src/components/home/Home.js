//import react components
import { Component } from 'react';

//import material ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//react-router-dom
import {
    Link
} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Grid container style={{ marginTop: '100px' }}>
                <Grid align='center' item xs={12}>
                    <Typography variant="h4" gutterBottom component="div">
                        Section 2
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Please click on button to go to the question.
                    </Typography>
                </Grid>
                <Grid align='center' item xs={6} style={{ marginTop: '100px' }}>
                    <Link
                        to="/question1"
                        color="inherit"
                        underline="none"
                        style={{ textDecoration: 'none', color: '#565656' }}
                    >
                        <Button variant="contained">Question 1</Button>
                    </Link>
                </Grid>
                <Grid align='center' item xs={6} style={{ marginTop: '100px' }}>
                    <Link
                        to="/question2"
                        color="inherit"
                        underline="none"
                        style={{ textDecoration: 'none', color: '#565656' }}
                    >
                        <Button variant="contained">Question 2</Button>
                    </Link>
                </Grid>
            </Grid>
        )
    }
}

export default Home;