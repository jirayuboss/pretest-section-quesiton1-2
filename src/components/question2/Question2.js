//import react components
import { Component } from 'react';

//import material ui
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

//import axios
const axios = require('axios').default;

class Question2 extends Component {
    constructor() {
        super();

        this.state = {
            responseObj: [],
            searchInput: ''
        };
    }

    componentDidMount() {
        this.handleGetCategories();
    }

    handleChangeSearchInput = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    handleGetCategories = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: 'https://api.publicapis.org/categories'
            });

            this.setState({
                responseObj: response.data
            });
        }
        catch (err) {

        }
    }

    render() {
        return (
            <Grid container spacing={5}>
                <Grid item>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Data</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.responseObj.filter(obj => obj.toLowerCase().includes(this.state.searchInput.toLowerCase())).map((row) => (
                                    <TableRow
                                        key={row}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{row}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item>
                    <Typography variant="h6" gutterBottom component="div">
                        Search
                    </Typography>
                    <TextField id="outlined-basic" variant="outlined" onChange={this.handleChangeSearchInput} />
                </Grid>
            </Grid>
        )
    }
}

export default Question2;