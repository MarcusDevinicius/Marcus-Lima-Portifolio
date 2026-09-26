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
    <section className='projects'>
        <h2>{language === 'pt' ? texts.pt.title : texts.en.title}</h2>
        <article className='projects-container'>
            <ul>
                <li>
                  <a href="">
                    <img src="./src/ART/img/longevidade-de-pets.jpg" alt="" />
                    </a>
                </li>
                <li>
                  <a href="">
                    <img src="./src/ART/img/site-avanti-banner.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="./src/ART/img/site-avanti-banner.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="./src/ART/img/site-avanti-banner.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="./src/ART/img/site-avanti-banner.jpg" alt="" />
                  </a>
                </li>
            </ul>
        </article>
    </section>
  )
}

export default Projects
