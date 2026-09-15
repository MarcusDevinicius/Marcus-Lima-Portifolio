import React from 'react'
import './CSS/main.css'

const About = ({language}) => {

    const texts = {
        pt: {
            title: 'Sobre mim',
            paragraph: 'Meu nome é Marcus Vinícius, me interessei por tecnologia no final de 2023 e desde então me aprofundei em Programação Front End tendo como principal linguagem JavaScript. Depois de um tempo me identifiquei com UI design, o que me levou a aprender a ferramenta Figma algo que melhorou minha performance como Desenvolvedor Web.'
        },

        en: {
            title: 'About me',
            paragraph: 'My name is Marcus Vinícius, me interessei por tecnologia no final de 2023 e desde então me aprofundei em Programação Front End tendo como principal linguagem JavaScript. Depois de um tempo me identifiquei com UI design, o que me levou a aprender a ferramenta Figma algo que melhorou minha performance como Desenvolvedor Web.'
        }
    }

  return (
    <section className='about'>
        <h1>{language === 'pt' ? texts.pt.title : texts.en.title}</h1>
        <p>{language === 'pt' ? texts.pt.paragraph : texts.en.paragraph}</p>
    </section>
  )
}

export default About