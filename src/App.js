import { useState } from 'react';


//Components
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

//React Router
import { Route, Routes} from 'react-router';

import './App.css';

function App() {

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route exact path="/" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='*' element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );

}

export default App;
