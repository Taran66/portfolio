import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './section/Hero'
import Nav from './components/Nav'
import AboutMe from './section/AboutMe'
import Services from './section/Services'
import Projects from './section/Projects'

const App = () => 
(
  <main>
    <section>
      <div
          className="absolue inset-0 bg-cover bg-center bg-no-repeat h-screen "
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
        }}
      >
        <Nav />
        <Hero />
      </div>
      <div className="absolute inset-0 bg-slate-950 opacity-70"></div>
    </section>
    <section>
      <AboutMe />
    </section>
    <section>
      <Services />
    </section>
    <section>
      <Projects />
    </section>
  </main>
)


export default App
