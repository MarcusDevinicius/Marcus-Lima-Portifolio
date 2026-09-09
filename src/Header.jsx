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

    function changeLang() {
        if(language === 'pt') {
            setLanguage('en');
        } else {
            setLanguage('pt')
        }
    }

  return (
    <header>
        <nav>
            <ul>
                <li><a href="#">{language === 'pt' ? texts.pt.home : texts.en.home}</a></li>
                <li><a href="#">{language === 'pt' ? texts.pt.abtMe : texts.en.abtMe}</a></li>
                <li><a href="#">{language === 'pt' ? texts.pt.skills : texts.en.skills}</a></li>
                <li><a href="#">{language === 'pt' ? texts.pt.projects : texts.en.projects}</a></li>
            </ul>
        </nav>
        <button onClick={changeLang} className={`flag flag-${language}`}>
            <div className={`switch switch-${language}`}></div>
        </button>
    </header>
  )
}

export default Header;