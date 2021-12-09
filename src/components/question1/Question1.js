//import react components
import { Component } from 'react';

//import material ui
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

class Question1 extends Component {
  constructor() {
    super();

    this.state = {
      selectedChoice: 'isPrime',
      inputNum: 0
    };
  }

  handleChangeSelect = (event) => {
    this.setState({
      selectedChoice: event.target.value
    })
  }

  handleInputNumber = (event) => {
    this.setState({
      inputNum: event.target.value
    })
  }

  handleBlurInputNumber = (event) => {
    const input = event.target.value
    if (input < 0) {
      this.setState({
        inputNum: 1
      })
      return;
    }

    this.setState({
      inputNum: Math.round(input)
    })
  }

  //================= REF: https://www.codegrepper.com/code-examples/javascript/prime+number+program+in+js =====
  checkPrimeNumber = (num) => {
    for (let i = 2; i * i <= num; i++)
      if (num % i === 0)
        return false;
    return num > 1;
  }
  //================= REF: https://www.codegrepper.com/code-examples/javascript/prime+number+program+in+js =====

  //========== REF: https://www.geeksforgeeks.org/check-number-fibonacci-number/ ==================
  checkIsPerfectSquare = (num) => {
    let ps = parseInt(Math.sqrt(num));
    return (ps * ps === num);
  }

  checkFibonacciNumber = (num) => {
    return this.checkIsPerfectSquare(5 * num * num + 4) ||
      this.checkIsPerfectSquare(5 * num * num - 4);
  }
  //========== REF: https://www.geeksforgeeks.org/check-number-fibonacci-number/ ==================

  render() {
    return (
      <Grid container style={{ minWidth: '600px', overflowX: 'auto' }}>
        <Grid item xs style={{ width: '200px', maxWidth: '200px', borderRight: '1px solid black' }}>
          <TextField variant="outlined" value={this.state.inputNum} onChange={this.handleInputNumber} onBlur={this.handleBlurInputNumber} style={{ padding: '10px' }} />
        </Grid>
        <Grid item xs style={{ minWidth: '100px', borderRight: '1px solid black' }}>
          <Box sx={{ minWidth: 120, padding: '10px' }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={'isPrime'}
                value={this.state.selectedChoice}
                onChange={this.handleChangeSelect}
              >
                <MenuItem value={"isPrime"}>isPrime</MenuItem>
                <MenuItem value={"isFibonacci"}>isFibonacci</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs style={{ width: '300px', maxWidth: '300px', borderRight: '1px solid black' }}>
          {this.state.selectedChoice === 'isPrime' ? this.checkPrimeNumber(this.state.inputNum) + '' : this.checkFibonacciNumber(this.state.inputNum) + ''}
        </Grid>
      </Grid>
    )
  }
}

export default Question1;