# 0. First steps

## 0.1. Create the project

Just run in your desktop `npx create-react-app yourAppName`

## 0.2. Let src folder and public folder empty

![](./src/assets/readme/1.png)
![](./src/assets/readme/2.png)

## 0.3. index.html

In public folder, create an index.html file, and write exclamation mark to set basic snippet structure.

Note: install ES7 React Snippets vsCode extension.

And create a div with id="root"

## 0.4. Create an Assets folfer inside src folder

There we'll set our images or any media files.

## 0.5. Create an index.js file in src folder

This file will be the only with js extension, rest will be jsx files.

Note: By the way, create a index.css in src folder too.

# 1. Let's create all components

## 1.1. App.jsx

Create and App.jsx file in src folder.

Write *"rafce"* to snip the basic estructure of a *"React Arrow Functional Component Export"*

```js
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
```

## 1.2. Write basic imports in index.js

```js
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```

## 1.3. First view in our browser

Just open a new terminal in vsCode and run `npm start`.

## 1.4. Let's create a components folder and css folder

Create these two folders inside src folder, to create the rest component and separate the jsx files and the css files.

## 1.5. Calling our components in App.jsx

Come back to App.jsx to call all components, between react fragments.

```jsx
import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
```

## 1.6. Setting the basic and general styles in index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

:root {
    --color-bg: #1f1f38;
    --color-bg-variant: #2c2c6c;
    --color-primary: #4db5ff;
    --color-primary-variant: rgba(77, 181, 255, 0.4);
    --color-white: #fff;
    --color-light: rgba(255, 255, 255, 0.6);

    --transition: all 400ms ease;

    --container-width-lg: 75%;
    --container-width-md: 86%;
    --container-width-sm: 90%;
}

html {
    scroll-behavior: smooth;
}

::-webkit-scrollbar {
    display: none;
}

body {
    font-family: 'Poppins', sans-serif;
    background: var(--color-bg);
    color: var(--color-white);
    line-height: 1.7;
    background-image: url(../src/assets/img/bg-texture.png);
}

/* ========================= GENERAL STYLES ======================== */

.container {
    width: var(--container-width-lg);
    margin: 0 auto;
}

h1, h2, h3, h4, h5 {
    font-weight: 500;
}

h1 {
    font-size: 2.5rem;
}

section {
    margin-top: 8rem;
}

section > h2, 
section > h5 {
    text-align: center;
    color: var(--color-light);
}

section > h2 {
    color: var(--color-primary);
    margin-bottom: 3rem;
}

.text-light {
    color: var(--color-light);
}

a {
    color: var(--color-primary);
    transition: var(--transition);
}

a:hover {
    color: var(--color-white);
}

.btn {
    width: max-content;
    display: inline-block;
    color: var(--color-primary);
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition: var(--transition);
}

.btn:hover {
    background: var(--color-white);
    color: var(--color-bg);
    border-color: transparent;
}

.btn-primary {
    background: var(--color-primary);
    color: var(--color-bg);
}

img {
    display: block;
    width: 100%;
    object-fit: cover;
}

/* ===================== MEDIA QUERIES (MEDIUM DEVICES) ================= */

@media screen and (max-width: 1024px) {
    .container {
        width: var(--container-width-md);
    }

    section {
        margin-top: 6rem;
    }
}

/* ===================== MEDIA QUERIES (SMALL DEVICES) ================= */

@media screen and (max-width: 600px) {
    .container {
        width: var(--container-width-sm);
    }

    section > h2 {
        margin-bottom: 2rem;
    }
}
```

# 2. Header component

## 2.1. header development

We're going to create two components more for Header.

- CTA.jsx (for cv buttons)
- HeaderSocials.jsx (for social icons)

```jsx
import React from 'react'
import '../css/CTA.css'
import CV from '../../src/assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA
```

To install react-icons library just run: `npm install react-icons --save`

```jsx
import React from 'react'
import '../css/HeaderSocials.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blank" rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
```

And finally, the header component would be:

```jsx
import React from 'react'
import '../css/Header.css'
import CTA from './CTA'
import ME from '../../src/assets/img/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>NombreApellido1</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
```

## 2.2. Header.css

```css
header {
    height: 100vh;
    padding-top: 7rem;
    /* overflow: hidden; */
    margin-bottom: 15rem;
}

.header__container {
    text-align: center;
    height: 100%;
    position: relative;
}

/* =================== CTA ================= */

.cta {
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
}

/* ============= Header Socials ============ */

.header__socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;
}

.header__socials::after {
    content: '';
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
}

/* ================= ME.png ================== */

.me {
    background: linear-gradient(var(--color-primary), transparent);
    width: 22rem;
    height: 30rem;
    position: absolute;
    left: calc(50% - 11rem);
    margin-top: 4rem;
    border-radius: 12rem 12rem 0 0;
    overflow: hidden;
    padding: 5rem 1.5rem 1.5rem 1.5rem;
}

/* ================ SCROLL DOWN ============== */

.scroll__down {
    position: absolute;
    right: -2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 0.9rem;
}

/* ===================== MEDIA QUERIES (MEDIUM DEVICES) ================= */
@media screen and (max-width: 1024px) {
    header {
        height: 68vh;
    }
}

/* ===================== MEDIA QUERIES (SMALL DEVICES) ================= */
@media screen and (max-width: 600px) {
    header {
        height: 100vh;
    }

    .header__socials,
    .scroll__down {
        display: none;
    }
}
```

# 3. Navbar component

## 3.1. Navbar development

```jsx
import React from 'react'
import '../css/Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav>
      <a href="#header" className='active'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar
```

## 3.2. Navbar.css

```css
nav {
    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
}

nav a {
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
    font-size: 1.1rem;
}

nav a:hover {
    background: rgba(0, 0, 0, 0.3);
}

nav a.active {
    background: var(--color-bg);
    color: var(--color-white);
}
```

### Active class functionality

To do this, we have to import the useState hook.

With the classname, we have to check wich section we're in with the id section, and let to know to useState hook, what class have to set as "active".

```jsx
const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#header" className={activeNav === '#' ? 'active' : ''} 
      onClick={() => setActiveNav('#')}
      >
        <AiOutlineHome/>
      </a>
      <a href="#about"  className={activeNav === '#about' ? 'active' : ''} 
      onClick={() => setActiveNav('#about')}
      >
        <AiOutlineUser/>
      </a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} 
      onClick={() => setActiveNav('#experience')}
      >
        <BiBook/>
      </a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} 
      onClick={() => setActiveNav('#services')}
      >
        <RiServiceLine/>
      </a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} 
      onClick={() => setActiveNav('#contact')}
      >
        <BiMessageSquareDetail/>
      </a>
    </nav>
  )
}
```

# 4. About component

## 4.1. About section development

```jsx
import React from 'react'
import '../css/About.css'
import ME from '../../src/assets/img/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Compiled</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores et velit quisquam nesciunt fugiat laudantium culpa veritatis consequuntur magni, itaque odio saepe exercitationem. Optio ad, doloremque praesentium error, sequi in libero, dolores quasi minima nesciunt distinctio. Magni corporis possimus ipsa tempora, illum sint aut, sapiente eos, deleniti culpa repellendus quidem?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
```

## 4.2. About.css

```css
.about__container {
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
}

.about__me {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
    display: grid;
    place-items: center;
}

.about__me-image {
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: var(--transition);
}

.about__me-image:hover {
    transform: rotate(0);
}

.about__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.about__card {
    background: var(--color-bg-variant);
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: var(--transition);
}

.about__card:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
}

.about__icon {
    color: var(--color-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
}

.about__card h5 {
    font-size: 0.95rem;
}

.about__card small {
    font-size: 0.7rem;
    color: var(--color-light);
}

.about__content p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);
}

/* ===================== MEDIA QUERIES (MEDIUM DEVICES) ================= */
@media screen and (max-width: 1024px) {
    .about__container {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .about__me {
        width: 50%;
        margin: 2rem auto 4rem;
    }

    .about__content p {
        margin: 1rem 0 1.5rem;
    }
}

/* ===================== MEDIA QUERIES (SMALL DEVICES) ================= */
@media screen and (max-width: 600px) {
    .about__me {
        width: 65%;
        margin: 0 auto 3rem;
    }

    .about__cards {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .about__content {
        text-align: center;
    }

    .about__content p {
        margin: 1.5rem 0;
    }
}
```

# 5. Experience component

## 5.1. Experience section development

```jsx
import React from 'react'
import '../css/Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
```

## 5.2. Experience.css

```css
.experience__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.experience__container > div {
    background: var(--color-bg-variant);
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
}

.experience__container > div:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
}

.experience__container > div h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
}

.experience__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
}

.experience__details {
    display: flex;
    gap: 1rem;
}

.experience__details-icon {
    margin-top: 6px;
    color: var(--color-primary);
}

/* ===================== MEDIA QUERIES (MEDIUM DEVICES) ================= */
@media screen and (max-width: 1024px) {
    .experience__container {
        grid-template-columns: 1fr;
    }

    .experience__container > div {
        width: 80%;
        padding: 2rem;
        margin: 0 auto;
    }

    .experience__content {
        padding: 1rem;
    }
}

/* ===================== MEDIA QUERIES (SMALL DEVICES) ================= */
@media screen and (max-width: 600px) {
    .experience__container {
        gap: 1rem;
    }

    .experience__container > div {
        width: 100%;
        padding: 2rem 1rem;
    }
}
```

# 6. Services component

## 6.1. Services section development

```jsx
import React from 'react'
import '../css/Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, doloremque!</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
```

## 6.2. Services.css

```css
.services__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
}

.service {
    background: var(--color-bg-variant);
    border-radius: 0 0 2rem 2rem;
    border: 1px solid var(--color-primary);
    height: fit-content;
    transition: var(--transition);
}

.service:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
}

.service__head {
    background: var(--color-primary);
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);
}

.service__head h3 {
    color: var(--color-bg);
    font-size: 1rem;
    text-align: center;
}

.service__list {
    padding: 2rem;
}

.service__list li {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.8rem;
}

.service__list-icon {
    color: var(--color-primary);
    margin-top: 2px;
}

.service__list p {
    font-size: 0.9rem;
}

/* ===================== MEDIA QUERIES (MEDIUM DEVICES) ================= */
@media screen and (max-width: 1024px) {
    .services__container {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .service {
        height: auto;
    }
}

/* ===================== MEDIA QUERIES (SMALL DEVICES) ================= */
@media screen and (max-width: 600px) {
    .services__container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}
```

# 7. Portfolio component

## 7.1. Portfolio section development

```jsx
import React from 'react'
import '../css/Portfolio.css'
import IMG1 from '../../src/assets/img/portfolio1.jpg'
import IMG2 from '../../src/assets/img/portfolio2.jpg'
import IMG3 from '../../src/assets/img/portfolio3.jpg'
import IMG4 from '../../src/assets/img/portfolio4.jpg'
import IMG5 from '../../src/assets/img/portfolio5.jpg'
import IMG6 from '../../src/assets/img/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
```

## 7.2. Portfolio.css

```css
.portfolio__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
}

.portfolio__item {
    background: var(--color-bg-variant);
    padding: 1.2rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
}

.portfolio__item:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
}

.portfolio__item-image {
    border-radius: 1.5rem;
    overflow: hidden;
}

.portfolio__item h3 {
    margin: 1.2rem 0 2rem;
}

.portfolio__item-cta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

/* ===================== MEDIA QUERIES (MEDIUM DEVICES) ================= */
@media screen and (max-width: 1024px) {
    .portfolio__container {
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;
    }
}

/* ===================== MEDIA QUERIES (SMALL DEVICES) ================= */
@media screen and (max-width: 600px) {
    .portfolio__container {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}
```

# 8. Testimonials component

## 8.1. Testimonials section development

```jsx
import React from 'react'
import '../css/Testimonials.css'
import AVTR1 from '../../src/assets/img/avatar1.jpg'
import AVTR2 from '../../src/assets/img/avatar2.jpg'
import AVTR3 from '../../src/assets/img/avatar3.jpg'
import AVTR4 from '../../src/assets/img/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
```

## 8.2. Testimonials.css

```css
.container.testimonials__container {
    width: 40%;
}

.client__avatar {
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid var(--color-primary-variant);
}

.testimonial {
    background: var(--color-bg-variant);
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;
}

.client__review {
    color: var(--color-light);
    font-weight: 300;
    display: block;
    width: 80%;
    margin: 0.8rem auto 0;
}

/* ===================== MEDIA QUERIES (MEDIUM DEVICES) ================= */
@media screen and (max-width: 1024px) {
    .container.testimonials__container {
        width: 60%;
    }
}

/* ===================== MEDIA QUERIES (SMALL DEVICES) ================= */
@media screen and (max-width: 600px) {
    .container.testimonials__container {
        width: var(--container-width-sm);
    }

    .client__review {
        width: var(--container-width-sm);
    }
}
```

## 8.3. Swiper.js

To install swiper library, just run: `npm install swiper`

```jsx
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
```

