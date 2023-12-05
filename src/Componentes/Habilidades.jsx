import React from 'react'
import '../Componentes/Habilidades.css'
import react from '../Componentes/react.png'
import angular from '../Componentes/angular.png'
import vue from '../Componentes/vue.JPG'
import nodejs from '../Componentes/nodejs.png'
import sql from '../Componentes/sql.jpg'
import figma from '../Componentes/figma.png'
import git from '../Componentes/git.png'


function Habilidades() {
    return (
        <section className='skills' id='Habilidades'>
            <div className='titulo-educacionhab'>
                Habilidades
            </div>
            <div className='skills-container'>
                <div className='box-skills'>
                    <div className='cabecera'>
                        <img className='cabecera-propiedades' src={react} alt="" />
                    </div>

                    <div className='info-skill'>
                        <div className='infoskilltitulo'>
                            React
                        </div>
                        <div className='infoskillparrafo'>
                            <li>JavaScript y ECMAScript 6</li>
                            <li>JSX (JavaScript XML)</li>
                            <li>Component Lifecycle</li>
                            <li>React Router</li>
                            <li>Testing en React</li>
                        </div>
                    </div>
                </div>


                <div className='box-skills'>
                    <div className='cabecera'>
                        <img className='cabecera-propiedades' src={angular} alt="" />
                    </div>
                    <div className='info-skill'>
                        <div className='infoskilltitulo'>
                            Angular
                        </div>
                        <div className='infoskillparrafo'>
                            <li>TypeScript</li>
                            <li>Angular CLI</li>
                            <li>Templates y Data Binding</li>
                            <li>Routing en Angular</li>
                            <li>Angular Lifecycle </li>
                        </div>
                    </div>
                </div>


                <div className='box-skills'>
                    <div className='cabecera'>
                        <img className='cabecera-propiedades' src={vue} alt="" />
                    </div>
                    <div className='info-skill'>
                        <div className='infoskilltitulo'>
                            Vue
                        </div>
                        <div className='infoskillparrafo'>
                            <li>Vue Templates y Directivas</li>
                            <li>Vue Router</li>
                            <li>Gestión de Eventos</li>
                            <li>Testing en Vue.js</li>
                        </div>
                    </div>
                </div>


                <div className='box-skills'>
                    <div className='cabecera'>
                        <img className='cabecera-propiedades' src={nodejs} alt="" />
                    </div>
                    <div className='info-skill'>
                        <div className='infoskilltitulo'>
                            Nodejs
                        </div>
                        <div className='infoskillparrafo'>
                            <li>Express.js</li>
                            <li>API RESTful</li>
                            <li>Manejo de Archivos</li>
                            <li>Base de Datos</li>
                            <li>Seguridad</li>
                            <li>Testing</li>
                        </div>
                    </div>
                </div>

                <div className='box-skills'>
                    <div className='cabecera'>
                        <img className='cabecera-propiedades' src={sql} alt="" />
                    </div>
                    <div className='info-skill'>
                        <div className='infoskilltitulo'>
                            SQL
                        </div>
                        <div className='infoskillparrafo'>
                            <li>Diseño de Bases de Datos</li>
                            <li>Comandos SQL Avanzado</li>
                            <li>Índices y Optimización</li>
                            <li>Vistas y Funciones</li>
                            <li>Stored Procedures y Triggers</li>
                            <li>NoSQL</li>
                        </div>
                    </div>
                </div>


                <div className='box-skills'>
                    <div className='cabecera'>
                        <img className='cabecera-propiedades' src={figma} alt="" />
                    </div>
                    <div className='info-skill'>
                        <div className='infoskilltitulo'>
                            Figma
                        </div>
                        <div className='infoskillparrafo'>
                            <li>Inspección de Diseño</li>
                            <li>Prototipado</li>
                            <li>Responsive Design</li>
                            <li>Principios de Diseño </li>
                            <li>Gestión de Estilos</li>
                        </div>
                    </div>
                </div>
                <div className='box-skills'>
                    <div className='cabecera'>
                        <img className='cabecera-propiedades' src={git} alt="" />
                    </div>
                    <div className='info-skill'>
                        <div className='infoskilltitulo'>
                            Git
                        </div>
                        <div className='infoskillparrafo'>
                            <li>Flujo de Trabajo</li>
                            <li>Trabajo Colaborativo</li>
                            <li>Control de Versiones</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>





    )
}

export default Habilidades