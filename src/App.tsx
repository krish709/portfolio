import { useEffect, useState } from 'react'

import './App.css'
import Hero from './HeroPage'
import Header from './Header'
import Section from './Section';
import Footer from './Footer';

function App() {

 const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <>
      <Header dark={dark} toggleTheme={toggleTheme} />
      <Hero />
      <Section/>
      <Footer/>
    </>
  );
};

export default App
