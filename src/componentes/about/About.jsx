import React from 'react'
import "./about.css"
import ME from '../../assets/img/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>LLega a saber</h5>
      <h2>Acerca de mi</h2>
      <div className="container about-container">
        <div className="about-me">
          <img src={ME} alt="yo" className='about-me-image' />
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className='about-icon' />
              <h5>Idiomas</h5>
              <small>Ingles(B12) - Español(nativo)</small>
            </article>
            <article className="about-card">
              <FiUsers className='about-icon' />
              <h5>Educacion</h5>
              <small> UNMSM - Ingeniería de Software</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className='about-icon' />
              <h5>Proyectos</h5>
              <small>+10 completados</small>
            </article>
          </div>
          <p>Estudiante de Ingenieria de Software, con una base de
            conocimientos en desarrollo de proyectos web personales.
            Busco colaborar en una posicion como desarrollador front-end ya que quisiera poner en práctica los conocimientos adquiridos empírica y académicamente.
          </p>
          <a href="#contact" className='btn btn-primary'>Enviame un mensaje</a>
        </div>
      </div>
    </section>
  )
}

export default About