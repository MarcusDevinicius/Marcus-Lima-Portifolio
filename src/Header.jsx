import React from 'react'
import './CSS/main.css'

const Header = ({language, setLanguage}) => {

    const texts = {
        pt: {
            home: 'INÍCIO',
            abtMe: 'SOBRE MIM',
            skills: 'HABILIDADES',
            projects: 'PROJETOS'
        },

        en: {
            home: 'HOME',
            abtMe: 'ABOUT ME',
            skills: 'SKILLS',
            projects: 'PROJECTS'
        }
    }

  return (
    <header>
        <nav>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
        <button className={`flag flag-${language}`}>
            <div className='switch'></div>
        </button>
    </header>
  )
}

export default Header;