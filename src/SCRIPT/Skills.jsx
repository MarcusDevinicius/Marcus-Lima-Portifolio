import React from 'react'
import '../CSS/main.css'
const Skills = ({language}) => {

  const [skill, setSkill] = React.useState('html');

  function switchSkill(event) {
    const state = event.currentTarget.className;
    console.log(event.currentTarget.className);
    setSkill(state);
  }

  const states = {
    pt: { 
      html: {
        title: 'HTML',
        text: 'Possuo cerca de 2 anos de experiência com HTML5, utilizando tags semânticas e boas práticas para estruturar páginas de forma organizada e acessível.'
      },

      css: {
        title: 'CSS',
        text: 'Iniciei os estudos em CSS3 juntamente com HTML e, ao longo da prática, desenvolvi interfaces responsivas, animações e landing pages modernas.'
      },

      js: {
        title: 'JavaScript',
        text: 'Com JavaScript ES6, desenvolvi lógica de programação, manipulação do DOM e funcionalidades interativas voltadas para uma melhor experiência do usuário.'
      },

      figma: {
        title: 'Figma',
        text: 'Utilizo o Figma para planejar interfaces e protótipos antes do desenvolvimento, tornando a implementação mais organizada e consistente.'
      },

      react: {
        title: 'React',
        text: 'Atualmente utilizo React para desenvolver interfaces reutilizáveis e dinâmicas, aplicando componentes, estados e boas práticas do ecossistema.'
      },

      github: {
        title: 'GitHub',
        text: 'Utilizo Git e GitHub para versionamento de código, gerenciamento de projetos e colaboração, mantendo um histórico organizado das aplicações.'
      }
    },
    
    en: {
      html: {
        title: 'HTML',
        text: 'I have around 2 years of experience with HTML5, using semantic tags and best practices to structure pages in an organized and accessible way.'
      },

      css: {
        title: 'CSS',
        text: 'I started learning CSS3 alongside HTML and, through practice, developed responsive interfaces, animations, and modern landing pages.'
      },

      js: {
        title: 'JavaScript',
        text: 'With JavaScript ES6, I have developed programming logic, DOM manipulation, and interactive features focused on providing a better user experience.'
      },

      figma: {
        title: 'Figma',
        text: 'I use Figma to plan interfaces and prototypes before development, making the implementation more organized and consistent.'
      },

      react: {
        title: 'React',
        text: 'I currently use React to develop reusable and dynamic interfaces, applying components, state management, and best practices from the ecosystem.'
      },

      github: {
        title: 'GitHub',
        text: 'I use Git and GitHub for version control, project management, and collaboration, maintaining an organized history of my applications.'
      }
    }
  }

  return (
    <section className='skills'>
        <h1 className='title'>Skills</h1>
        {language === 'pt' && (
          <aside>
            <h2>{states.pt[skill].title}</h2>
            <p>{states.pt[skill].text}</p>
          </aside>
          )}

          {language === 'en' && (
            <aside>
              <h2>{states.en[skill].title}</h2>
              <p>{states.en[skill].text}</p>
            </aside>
          )}
        
        <nav className='skills-icon'>
          <ul>
            <li>
              <button className='html' onClick={switchSkill}><img src="src/ART/icons/html.svg" alt="Logo do HTML 5" /></button>
            </li>
            <li>
              <button className='css' onClick={switchSkill}><img src="src/ART/icons/css.svg" alt="Logo do CSS 3" /></button>
            </li>
            <li>
              <button className='js' onClick={switchSkill}><img src="src/ART/icons/js.svg" alt="Logo do JavaScript" /></button>
            </li>
            <li>
              <button className='figma' onClick={switchSkill}><img src="src/ART/icons/figma.svg" alt="Logo do Figma" /></button>
            </li>
            <li>
              <button className='react' onClick={switchSkill}><img src="src/ART/icons/react.svg" alt="Logo do React" /></button>
            </li>
            <li>
              <button className='github' onClick={switchSkill}><img src="src/ART/icons/github.svg" alt="Logo do GitHub" /></button>
            </li>
          </ul>
        </nav>
    </section>
  )
}

export default Skills
