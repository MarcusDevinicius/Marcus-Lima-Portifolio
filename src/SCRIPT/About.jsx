import React from 'react'
import '../CSS/main.css'

const About = ({language}) => {

    const texts = {
        pt: {
            title: 'Sobre mim',
            paragraph: 'Meu nome é Marcus Vinícius, me interessei por tecnologia no final de 2023 e desde então me aprofundei em Programação Front End tendo como principal linguagem JavaScript. Depois de um tempo me identifiquei com UI design, o que me levou a aprender a ferramenta Figma algo que melhorou minha performance como Desenvolvedor Web.'
        },

        en: {
            title: 'About me',
            paragraph: 'My name is Marcus Vinícius. I became interested in technology in late 2023 and have since focused on Front-End development, with JavaScript as my primary programming language. Over time, I also developed an interest in UI design, which led me to learn Figma and improve my performance as a Web Developer.'
        }
    }

  return (
    <section className='about'>
        <h2>{language === 'pt' ? texts.pt.title : texts.en.title}</h2>
        <p>{language === 'pt' ? texts.pt.paragraph : texts.en.paragraph}</p>
    </section>
  )
}

export default About