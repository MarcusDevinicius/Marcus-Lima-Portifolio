import React from 'react'
import '../CSS/main.css'
const Skills = ({language}) => {
  return (
    <section className='skills'>
        <h1 className='title'>Skills</h1>
        <aside>
          <h2>HTML</h2>
          <p>Possuo cerca de 2 anos de experiência com HTML5, utilizando tags semânticas e boas práticas para estruturar páginas de forma organizada e acessível. </p>
        </aside>
        <nav className='skills-icon'>
          <ul>
            <li><button><img src="src/ART/icons/html.svg" alt="Logo do HTML 5" /></button></li>
            <li><button><img src="src/ART/icons/css.svg" alt="Logo do CSS 3" /></button></li>
            <li><button><img src="src/ART/icons/js.svg" alt="Logo do JavaScript" /></button></li>
            <li><button><img src="src/ART/icons/figma.svg" alt="Logo do Figma" /></button></li>
            <li><button><img src="src/ART/icons/react.svg" alt="Logo do React" /></button></li>
            <li><button><img src="src/ART/icons/github.svg" alt="Logo do GitHub" /></button></li>
          </ul>
        </nav>
    </section>
  )
}

export default Skills
