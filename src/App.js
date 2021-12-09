import './App.css';

//import react components
import { Component } from 'react';

//import components
import Question1 from './components/question1/Question1';
import Question2 from './components/question2/Question2';

//import router
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Question1 />} />
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;