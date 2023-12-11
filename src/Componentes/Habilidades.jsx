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
                        <img className='cabecera-propiedades' src='data:image/jpeg;base64,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' alt="" />
                    </div>
                    <div className='info-skill'>
                        <div className='infoskilltitulo'>
                            Django
                        </div>
                        <div className='infoskillparrafo'>
                            <li>Django MVC Framework</li>
                            <li>Rutas y vistas</li>
                            <li>Plantillas</li>
                            <li>Testing</li>
                            <li>Seguridad</li>
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