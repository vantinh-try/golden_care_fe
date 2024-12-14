import React from 'react';
import Header from './components/Header';
// import AuthForm from './components/AuthForm';
import MainBanner from './components/MainBanner';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';  // Import Clients component
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <Services />
      <About />
      <Clients /> 
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
