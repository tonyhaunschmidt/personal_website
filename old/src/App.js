import React, { useRef } from 'react'

import Carousel from 'react-bootstrap/Carousel'

import mascot1 from './assets/mascot1.png'
import mascot2 from './assets/mascot2.png'
import pis from './assets/PIS.png'
import facecook from './assets/facecook.png'
import getmemes from './assets/getmemes.png'
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
          <p>In my previous career in the contracts kitchen design industry, I often found opportunities where I could put my self-taught spreadsheet skills to good use and practise my creativity and problem solving skills to create various tools. This increasingly became my passion and sparked my interest in software engineering.</p>
<<<<<<< HEAD:old/src/App.js
          <p>Initially learning the basics, I fell in love with coding and felt like I was discovering my superpower. I soon enrolled on a full time software engineering bootcamp with General Assembly where at a fast pace, I delved much deeper into the world of coding and began to learn the industry standards.</p>
=======
          <p>Initially learning the basics, I fell in love with coding and felt that I was discovering my superpower. I soon enrolled on a full time software engineering bootcamp with General Assembly where at a fast pace, I delved much deeper into the world of coding and began to learn the industry standards.</p>
>>>>>>> edbb3a86451978a92315428f680ea22183760255:src/App.js
          <p>I am extremely excited about the possibilities and challenges that this career change presents and I am very eager to be part of an industry that makes such an impact on everything we do. I am looking for opportunities where I can continue to grow and develop my skills in a fast paced environment and challenge myself.</p>
        </div>
        <img src={mascot2} alt='mascot' />
        <div>
          <h4><span>-</span>Interests<span>-</span></h4>
          <p><span>Reading-</span> I'll generally read anything and everything. Can you really walk past a Waterstones and not go in?! Some of my favourites include; '1984' by George Orwell, 'Perfume' by Patrick Süskind and 'The Iron Man' by Ted Hughes. I also really enjoy Audible and love listening to books while running, hiking or out for a drive.</p>
          <p><span>Hiking-</span> Among other things, being close to the Lake District is a big positive to living in Manchester. I recently bought an SUV that I'm intending to build a back conversion for so I can go for longer trips and enjoy car camping while doing weekend hiking trips.</p>
          <p><span>Board Games-</span> Introduced to me a few years ago, I am still really enjoying falling deeper and deeper into the world of board games with the regular trip to the local board game cafe. I'm looking forward to attending this year's UK Games Expo in Birmingham.</p>

        </div>
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
        <Carousel interval={null}>
          <Carousel.Item>
            <div className='img_container'>
              <img src={pis} alt='property investment simulator' />
            </div>
            <Carousel.Caption>
              <h3>The Property Investment Simulator</h3>
              <p className='stats'>8 Days <span>|</span> Solo Project</p>
              <p>My final project on the General Assembly Software Engineering Immersive course was to develop a full-stack application with an SQL back-end using Django and a React front-end in one week. Being very interested in FinTech and understanding the advantages of using an SQL database with financial data, I was gravitated to developing a game-like application where you can simulate investing in property.</p>
              <p>I had a huge amount of fun not only playing with the game-like mechanics but also structuring the data and working through the different functionalities of putting an offer on a property, applying for a mortgage, managing your properties and more.</p>
              <div className='links'>
                <a href='https://github.com/tonyhaunschmidt/GA-PROJECT-4-PROPERTY_INVESTMENT_SIMULATOR' target='_blank' rel="noopener noreferrer">
                  <div className='single_container'>
                    <i class="devicon-github-original"></i>
                  </div>
                </a>
                <a href='https://propertyinvestmentsimulator.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                  <div className='link single_container'></div>
                </a>
              </div>
              <div className='tech'>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-python-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-sass-original"></i>
                <i class="devicon-html5-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-django-plain-wordmark"></i>
                <i class="devicon-postgresql-plain"></i>
                <i class="devicon-redis-plain"></i>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='img_container'>
              <img src={facecook} alt='facecook' />
            </div>
            <Carousel.Caption>
              <h3>FaceCook</h3>
              <p className='stats'>7 Days <span>|</span> Group Project (3)</p>
              <p>My first full-stack project, as part of a group of 3, was to create an application using the full MERN stack. FaceCook is a social media app where you can share recipes and plan your meals. I thoroughly enjoyed this project and learnt a lot from the time spent working on it, including the importance of planning and what kind of pitfalls to look out for when designing your own back-end as well as developing productive ways to share and organise the workload using Trello and having daily meetings.</p>
              <p>I adopted a role as team leader in this project before developing the initial concept and plan for the back-end data structure. I then went on to code the home page, search page, profile pages, meal plan scheduler and shopping list functionality among other things.</p>
              <div className='links'>
                <a href='https://github.com/tonyhaunschmidt/GA-PROJECT-3-FACECOOK' target='_blank' rel="noopener noreferrer">
                  <div className='single_container'>
                    <i class="devicon-github-original"></i>
                  </div>
                </a>
                <a href='https://gafacecook.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                  <div className='link single_container'></div>
                </a>
              </div>
              <div className='tech'>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-sass-original"></i>
                <i class="devicon-html5-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-nodejs-plain"></i>
                <i class="devicon-express-original"></i>
                <i class="devicon-mongodb-plain"></i>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='img_container'>
              <img src={getmemes} alt='getmeme' />
            </div>
            <Carousel.Caption>
              <h3>GetMemes</h3>
              <p className='stats'>2 Days <span>|</span> Pair Project</p>
              <p>This two day assignment was to, in a pair, create a front-end React App using a public API. GetMemes is a fun meme browser. As well as getting to showcase our newly learnt React and framework knowledge, this was a great project to get familiar with pair-coding, in which we agreed upon a shared vision and utilised each of our strengths and skills to realise that vision. </p>
              <p>My contributions to this project was mainly functionality in the form of page navigation, handling API requests and working with the data.</p>
              <div className='links'>
                <a href='https://github.com/tonyhaunschmidt/GA-PROJECT-2-GETMEMES' target='_blank' rel="noopener noreferrer">
                  <div className='single_container'>
                    <i class="devicon-github-original"></i>
                  </div>
                </a>
                <a href='https://getmeme.netlify.app/' target='_blank' rel="noopener noreferrer">
                  <div className='link single_container'></div>
                </a>
              </div>
              <div className='tech'>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-sass-original"></i>
                <i class="devicon-html5-plain"></i>
                <i class="devicon-react-original"></i>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='img_container'>
              <img src={tetris} alt='tetris' />
            </div>
            <Carousel.Caption>
              <h3>Tetris</h3>
              <p className='stats'>7 Days <span>|</span> Solo Project</p>
              <p>Using Vanilla HTML, CSS and JavaScript the assignment was to build a grid based game in one week. Wanting to challenge myself and seeing it as a big step up from what we covered in the lectures I decided to recreate the classic game, Tetris. This project really solidified my fundamental JavaScript and let me flex my logic based coding skills.</p>
              <div className='links'>
                <a href='https://github.com/tonyhaunschmidt/GA-PROJECT-1-TETRIS' target='_blank' rel="noopener noreferrer">
                  <div className='single_container'>
                    <i class="devicon-github-original"></i>
                  </div>
                </a>
                <a href='https://tonyhaunschmidt.github.io/GA-PROJECT-1-TETRIS/' target='_blank' rel="noopener noreferrer">
                  <div className='link single_container'></div>
                </a>
              </div>
              <div className='tech'>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-html5-plain"></i>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
      <footer>
        <p><span>- -</span> - - - <span>- -</span></p>
      </footer>
    </>
  )
}

export default App;
