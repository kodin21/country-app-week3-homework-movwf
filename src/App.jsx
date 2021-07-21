import React from 'react';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Header />
      <Tabs />
      <Footer />
    </div>
  );
}

export default App;
