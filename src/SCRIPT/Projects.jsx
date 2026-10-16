import React from 'react'
import '../CSS/main.css'


const Projects = ({language}) => {

  const texts = {
    pt: {
      title:  'Projetos'
    },
    en: {
      title: 'Projects'
    }
  }

  const [cover, setCover] = React.useState(false);


  return (
    <section className='projects' id='projects'>
        <h2>{language === 'pt' ? texts.pt.title : texts.en.title}</h2>
        <article className='projects-container'>
            <ul>
                <li data-title="Longevidade de Pets">
                  <a href="">
                    <img src="./src/ART/img/longevidade-de-pets.jpg" alt="" />
                    </a>
                </li>
                <li data-title="Site Avanti">
                  <a href="">
                    <img src="./src/ART/img/site-avanti-banner.jpg" alt="" />
                  </a>
                </li>
                <li data-title="Em Breve">
                  <a href="">
                    <img src="" alt="" />
                  </a>
                </li>
                <li data-title="Em Breve">
                  <a href="">
                    <img src="" alt="" />
                  </a>
                </li>
                <li data-title="Em Breve">
                  <a href="">
                    <img src="" alt="" />
                  </a>
                </li>
            </ul>
        </article>
    </section>
  )
}

export default Projects
