import React, { useRef } from 'react'

import mascot1 from './assets/mascot1.png'

function App() {


  const about = useRef(null)
  const technologies = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <section className='welcome'>
        <div>
          <h1>TONY HAUNSCHMIDT</h1>
          <ul>
            <li onClick={() => scrollToSection(about)}>About</li>
            <li className='divide'>|</li>
            <li onClick={() => scrollToSection(technologies)}>Technologies</li>
            <li className='divide'>|</li>
            <li onClick={() => scrollToSection(projects)}>Projects</li>
            <li className='divide'>|</li>
            <li onClick={() => scrollToSection(contact)}>Contact</li>
          </ul>
        </div>
        <img src={mascot1} alt='mascot' />
      </section>
      <section className='welcome' ref={about}>
        <h1>About</h1>
      </section>
      <section className='welcome' ref={technologies}>
        <h1>Technologies</h1>
      </section>
      <section className='welcome' ref={projects}>
        <h1>Projects</h1>
      </section>
      <section className='welcome' ref={contact}>
        <h1>Contact</h1>
      </section>
    </>
  )
}

export default App;
