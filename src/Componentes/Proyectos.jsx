import React from 'react'
import '../Componentes/Proyectos.css'
import clustering from '../Componentes/clustering.JPG'
function Proyectos() {
    return (
        <section className='proyectos-section' id='Proyectos'>
            <h1 className='tituloproyectos'>Proyectos</h1>
            <div className='proyectos-container'>
                <div className='proyectos-box'>
                    <div className='cabecera-proyectos' style={{ backgroundImage: `url('https://apuestalegal.pe/wp-content/uploads/2023/05/estadisticas-deportivas-apuestas-peru.jpg')` }}>
                        <div className='descripcionproyecto'>
                            Estadisticas deportivas Liga 1,
                            comparaciones, analisis e historial
                            de los resultados de la competicion.
                        </div>
                        <a href="https://www.ejemplo.com" className='linkbtn'>
                            Visitar Pagina Web
                        </a>
                    </div>
                </div>
                <div className='proyectos-box'>
                    <div className='cabecera-proyectos' style={{ backgroundImage: `url('https://vilmanunez.com/wp-content/uploads/2019/02/editor-de-videos.png'` }}>
                        <div className='descripcionproyecto'>
                            Kit de herramientas para diseño
                        </div>
                        <a href="https://www.ejemplo.com" className='linkbtn'>
                            Visitar Pagina Web
                        </a>
                    </div>
                </div>

                <div className='proyectos-box'>
                    <div className='cabecera-proyectos' style={{ backgroundImage: `url(${clustering})` }}>
                        <div className='descripcionproyecto'>
                            Proyecto ciencia de datos, clusterizacion del sector agropecuario peruano.
                        </div>
                        <a href="https://www.ejemplo.com" className='linkbtn'>
                            Visitar Pagina Web
                        </a>
                    </div>
                </div>
            </div>
            <div className='boxtecnologias'>
                <div className='tecnologias'>React</div>
                <div className='tecnologias'>Nodejs</div>
                <div className='tecnologias'>Express</div>
                <div className='tecnologias'>Mysql</div>
                <div className='tecnologias'>Python</div>
                <div className='tecnologias'>Django</div>
                <div className='tecnologias'>Angular</div>
                <div className='tecnologias'>Vue</div>



            </div>
        </section>
    )
}

export default Proyectos