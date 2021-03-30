import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import ContactForm from './components/Contact';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
