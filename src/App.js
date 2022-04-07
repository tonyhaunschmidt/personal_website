import React, { useRef } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import mascot1 from './assets/mascot1.png'
import mascot2 from './assets/mascot2.png'
import tetris from './assets/tetris.png'

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
          <div className='subheading'>
            <h4>J U N I O R</h4><h4>S O F T W A R E</h4><h4>D E V E L O P E R</h4>
          </div>
        </div>
        <img src={mascot1} alt='mascot' />
      </section>
      <section className='about' ref={about}>
        <div>
          <h2><span>---</span> About Me <span>---</span></h2>
          <p>In my previous career in the contracts kitchen design industry I often found opportunities where I could put my self-taught spreadsheet skills to good use and practice my creativity and problem solving skills to create various tools. This increasingly became my passion and sparked my interest in software engineering.</p>
          <p>Initially learning the basics, I fell in love with coding and felt like I was discovering my superpower. I soon enrolled on a full time software engineering bootcamp with General Assembly where at a fast pace, I delved much deeper into the world of coding and began to learn the industry standards.</p>
          <p>I am extremely excited about the possibilities and challenges that this career change presents and I am very eager to be part of an industry that makes such an impact on everything we do. I am looking for opportunities where I can continue to grow and develop my skills in a fast paced environment and challenge myself.</p>
        </div>
        <img src={mascot2} alt='mascot' />
      </section>
      <section className='technologies' ref={technologies}>
        <h2><span>---</span> Technologies <span>---</span></h2>
        <div className='container'>
          <div>
            <i class="devicon-javascript-plain"></i>
            <p>JavaScript</p>
          </div>
          <div>
            <i class="devicon-css3-plain"></i>
            <p>CSS</p>
          </div>
          <div>
            <i class="devicon-html5-plain"></i>
            <p>HTML</p>
          </div>
          <div>
            <i class="devicon-react-original"></i>
            <p>React</p>
          </div>
          <div>
            <i class="devicon-sass-original"></i>
            <p>Sass</p>
          </div>
          <div>
            <i class="devicon-nodejs-plain"></i>
            <p>Node.js</p>
          </div>
          <div>
            <i class="devicon-express-original"></i>
            <p>Express</p>
          </div>
          <div>
            <i class="devicon-mongodb-plain"></i>
            <p>MongoDB</p>
          </div>
          <div>
            <i class="devicon-python-plain"></i>
            <p>Python</p>
          </div>
          <div>
            <i class="devicon-django-plain-wordmark"></i>
            <p>Django</p>
          </div>
          <div>
            <i class="devicon-postgresql-plain"></i>
            <p>PostgreSQL</p>
          </div>
          <div>
            <i class="devicon-redis-plain"></i>
            <p>Redis</p>
          </div>
          <div>
            <i class="devicon-vscode-plain"></i>
            <p>VS Code</p>
          </div>
          <div>
            <i class="devicon-yarn-plain"></i>
            <p>Yarn</p>
          </div>
          <div>
            <i class="devicon-npm-original-wordmark"></i>
            <p>npm</p>
          </div>
          <div>
            <i class="devicon-github-original"></i>
            <p>GitHub</p>
          </div>
          <div>
            <i class="devicon-git-plain"></i>
            <p>Git</p>
          </div>
          <div>
            <i class="devicon-slack-plain"></i>
            <p>Slack</p>
          </div>
          <div>
            <i class="devicon-heroku-original"></i>
            <p>Heroku</p>
          </div>
        </div>
      </section>
      <section className='projects' ref={projects}>
        <h2><span>---</span> Projects <span>---</span></h2>


      </section>
      <section className='contact' ref={contact}>
        <h2><span>---</span> Contact <span>---</span></h2>
        <div className='container'>
          <a href='https://github.com/tonyhaunschmidt' target='_blank' rel="noopener noreferrer">
            <div className='single_container'>
              <i class="devicon-github-original"></i>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/tony-haunschmidt/' target='_blank' rel="noopener noreferrer">
            <div className='single_container'>
              <i class="devicon-linkedin-plain"></i>
            </div>
          </a>
          <a href='mailto:tonyhaunschmidt@gmail.com'>
            <div className='mail single_container'></div>
          </a>
        </div>

      </section>
    </>
  )
}

export default App;
