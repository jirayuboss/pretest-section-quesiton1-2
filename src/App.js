import './App.css';

//import react components
import { Component } from 'react';

//import components
import Home from './components/home/Home';
import Question1 from './components/question1/Question1';
import Question2 from './components/question2/Question2';
import NotFound from './components/notfound/NotFound';

//import router
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
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;