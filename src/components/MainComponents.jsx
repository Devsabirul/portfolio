import React from 'react'
import About from './about/About'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Header from './header/Header'
import Hero from './hero/Hero'
import HireSection from './hire/HireSection'
import Portfolio from './portfolio/Portfolio'
import Service from './service/Service'

const MainComponents = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HireSection />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default MainComponents
