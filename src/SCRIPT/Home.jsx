import React from 'react'
import '../CSS/main.css'

 const Home = ({language}) => {

  const texts = {
    pt: {
        h1: 'Criando interfaces de usuário com paixão e tecnologias modernas Front End',
        intro: 'Olá, me chamo Marcus Lima e bem vindo ao meu portifólio de Desenvolvedor Front End, estou empolgado para mostrar minhas habilidades e criações .',

    },
    en: {
        h1: 'Creating user interfaces with passion and modern Front-End technologies.',
        intro: 'Hello, my name is Marcus Lima, and welcome to my Front-End Developer portfolio. I’m excited to showcase my skills and projects.',

    }
  }

  return (
    <section className='home'>
        <h1>{language === 'pt' ? texts.pt.h1 : texts.en.h1}</h1>
        <p>{language === 'pt' ? texts.pt.intro : texts.en.intro}</p>
        <img src="src/ART/img/my-img.png" alt="An image of Marcus." />
        <ul>
            <li><a href="#">LinkedIn <img className='arrow-icon' src="src/ART/icons/arrow.svg" alt="" /></a></li>
            <li><a href="#">GitHub <img className='arrow-icon' src="src/ART/icons/arrow.svg" alt="" /></a></li>
            <li><a href="#">Whatsapp <img className='arrow-icon' src="src/ART/icons/arrow.svg" alt="" /></a></li>
            <li><a href="#">Download CV</a></li>
        </ul>
    </section>
  )
}

export default Home;