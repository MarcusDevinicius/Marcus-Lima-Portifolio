import React from 'react'
import './CSS/main.css'

 const Home = ({language}) => {

  const texts = {
    pt: {
        h1: 'Criando interfaces de usuário com paixão e tecnologias modernas web',
        intro: 'Olá, me chamo Marcus Lima e bem vindo ao meu portifólio de Desenvolvedor Front End, estou empolgado para mostrar minhas habilidades e criações .',

    },
    en: {
        h1: 'Creating interfaces de usuário com paixão e tecnologias modernas web.',
        intro: 'Hello, me chamo Marcus Lima e bem vindo ao meu portifólio de Desenvolvedor Front End, estou empolgado para mostrar minhas habilidades e criações .',

    }
  }

  return (
    <section className='home'>
        <h1>{language === 'pt' ? texts.pt.h1 : texts.en.h1}</h1>
        <p>{language === 'pt' ? texts.pt.intro : texts.en.intro}</p>
        <img src="src/ART/img/my-img.png" alt="An image of Marcus." />
        <ul>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Whatsapp</a></li>
            <li><a href="#">Download CV</a></li>
        </ul>
    </section>
  )
}

export default Home;