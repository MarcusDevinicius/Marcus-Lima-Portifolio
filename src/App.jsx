import React from 'react'
import Header from './Header';
import Home from './Home';

function App() {
  const [language, setLanguage] = React.useState('pt');
  return (
    <>
      <Header language={language} setLanguage={setLanguage}/>
      <Home language={language}/>
    </>
  )
}

export default App
