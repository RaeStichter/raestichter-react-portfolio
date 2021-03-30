import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
