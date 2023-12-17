import React from 'react'
import '../Componentes/Proyectos.css'
import cluster from '../Componentes/cluster.JPG'
import logoextension from '../Componentes/logo-extension.png'
function Proyectos() {
    return (
        <section className='proyectos-section' id='Proyectos'>
            <h1 className='tituloproyectos'>Proyectos</h1>
            <div className='proyectos-container'>
                <div className='proyectos-box'>
                    <div className='cabecera-proyectos' style={{ backgroundImage: `url('https://cienciasdeportivas.com/wp-content/uploads/ECD038.jpg')` }}>
                        <div className='descripcionproyecto'>
                            Estadisticas deportivas Liga 1,
                            comparaciones, analisis e historial
                            de los resultados de la competicion.
                        </div>
                        <a href="https://ninobarrios.github.io/Analisis_Deportivo/" className='linkbtn'>
                            Visitar Pagina Web
                        </a>
                    </div>
                    <div className='boxtecnologias'>
                        <div className='tecnologias'>React</div>
                        <div className='tecnologias'>Node JS</div>
                        <div className='tecnologias'>Express</div>
                        <div className='tecnologias'>SQL</div>
                    </div>
                </div>




                <div className='proyectos-box'>
                    <div className='cabecera-proyectos' style={{ backgroundImage: `url('https://vilmanunez.com/wp-content/uploads/2019/02/editor-de-videos.png'` }}>
                        <div className='descripcionproyecto'>
                            Kit de herramientas para diseño
                        </div>
                        <a href="https://ninobarrios.github.io/Kit/" className='linkbtn'>
                            Visitar Pagina Web
                        </a>
                    </div>
                    <div className='boxtecnologias'>
                        <div className='tecnologias'>Python</div>
                        <div className='tecnologias'>Django</div>
                    </div>
                </div>




                <div className='proyectos-box'>
                    <div className='cabecera-proyectos' style={{ backgroundImage: `url(${cluster})` }}>
                        <div className='descripcionproyecto'>
                            Clustering sector agropecuario del Perú 
                        </div>
                        <a href="https://app.powerbi.com/groups/me/list?experience=power-bi" className='linkbtn'>
                            Visitar Pagina Web
                        </a>
                    </div>
                    <div className='boxtecnologias'>
                        <div className='tecnologias'>Python</div>
                        <div className='tecnologias'>Data Science</div>
                        <div className='tecnologias'>Power BI</div>
                        
                    </div>
                </div>

                <div className='proyectos-box'>
                    <div className='cabecera-proyectos' style={{ backgroundImage: `url(${logoextension})` }}>
                        <div className='descripcionproyecto'>
                            Tema dinamico para Visual Studio Code
                        </div>
                        <a href="https://marketplace.visualstudio.com/items?itemName=tema-dinamico.theme-extensions" className='linkbtn'>
                            Ir a descargar tema
                        </a>
                    </div>
                    <div className='boxtecnologias'>
                        <div className='tecnologias'>Visual Studio Code Extension</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos