import React from 'react'
import Header from './Header';

function App() {
  const [language, setLanguage] = React.useState('pt');
  return (
    <>
      <Header language={language} setLanguage={setLanguage}/>
    </>
  )
}

export default App
