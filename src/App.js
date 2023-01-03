import {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [pageSelected, setPageSelected] = useState('about')

  return (
    <div className="App">
      <Nav
      pageSelected={pageSelected}
      setPageSelected={setPageSelected}
      />
      {pageSelected==='about' && <About/>}
      {pageSelected==='projects' && <Projects/>}
      {pageSelected==='contact' && <Contact/>}
      <Footer />
    </div>
  );
}

export default App;
