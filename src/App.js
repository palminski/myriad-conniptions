import {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';

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
    </div>
  );
}

export default App;
