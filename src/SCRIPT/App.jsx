import React from 'react'
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Home from './Home';
import Footer from './Footer';

function App() {
  const [language, setLanguage] = React.useState('pt');
  return (
    <>
      <Header language={language} setLanguage={setLanguage}/>
      <Home language={language}/>
      <About language={language}/>
      <Skills language={language}/>
      <Projects language={language}/>
      <Footer />
    </>
  )
}

export default App
