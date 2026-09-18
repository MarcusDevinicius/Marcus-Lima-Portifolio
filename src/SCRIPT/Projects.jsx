import React from 'react'
import '../CSS/main.css'


const Projects = ({language}) => {
  return (
    <section className='projects'>
        <h2>Projetos</h2>
        <article>
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
