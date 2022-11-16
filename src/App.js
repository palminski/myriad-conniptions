import {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

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
      {pageSelected==='resume' && <Resume/>}
      {pageSelected==='contact' && <Contact/>}
    </div>
  );
}

export default App;
