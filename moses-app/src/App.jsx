import { useState } from 'react'
import Header from './components/Header'
import Introduction from './components/intro/Intro';
import Skills from './components/intro/Skills';
import Services from './components/services/Services';
import AboutMe from './components/About/about-me';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Skills />
      <Services />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App;