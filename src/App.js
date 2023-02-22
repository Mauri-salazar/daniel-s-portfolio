// import './App.css';
import { Fragment } from 'react';
import { Contact } from './Components/Contact';
import { Header } from './Components/Header';
import { Resume } from './Components/Resume';
import { Skills } from './Components/Skills';
import { Works } from './Components/Works'



function App() {
  return (
    <Fragment>
      <Header />
      <Skills />
      <Resume />
      <Works />
      <Contact />
    </Fragment>
  );
}

export default App;

