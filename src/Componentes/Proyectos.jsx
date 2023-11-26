import React from 'react'
import '../Componentes/Proyectos.css'
import clustering from '../Componentes/clustering.JPG'
function Proyectos() {
    return (
        <section className='proyectos-section' id='Proyectos'>
            <div className='tituloproyectos'>
                Proyectos
            </div>
            <div className='proyectos-container'>
                <div className='proyectos-box'>
                    <div className='cabecera-proyectos' style={{ backgroundImage: `url('https://apuestalegal.pe/wp-content/uploads/2023/05/estadisticas-deportivas-apuestas-peru.jpg')` }}>
                        <a href="https://www.ejemplo.com" className='linkbtn'>
                            Visitar Pagina Web
                        </a>
                    </div>

                    <div className='info-proyectos'>
                        <div className='tituloproyectosbottom'>Estadisticas Liga 1 </div>
                        <div className='detallesproyectos'>
                            Aplicacion  para ver las estadisticas, resultados
                            de los partidos por temporada, torneo y jornada. Haciendo
                            comparaciones entre equipos y mostrando el porcentaje
                            de probabilidades de los mercados de apuestas mas comunes.
                            La informacion disponible es de los ultimos 6 años, para hacer
                            analisis de las fechas y resultados de la liga 1 de Peru.
                        </div>
                        <div className='boxtecnologias'>
                            <div className='tecnologias'>React</div>
                            <div className='tecnologias'>Nodejs</div>
                            <div className='tecnologias'>Express</div>
                            <div className='tecnologias'>MySQL</div>
                            <div className='tecnologias'>Apis</div>
                        </div>


                    </div>
                </div>


                <div className='proyectos-box'>
                    <div className='cabecera-proyectos' style={{ backgroundImage: `url('https://vilmanunez.com/wp-content/uploads/2019/02/editor-de-videos.png'` }}>
                        <a href="https://www.ejemplo.com" className='linkbtn'>
                            Visitar Pagina Web
                        </a>
                    </div>
                    <div className='info-proyectos'>
                        <div className='tituloproyectosbottom'>Editor de Fotos</div>
                        <div className='detallesproyectos'>
                            Aplicacion  para ver las estadisticas, resultados
                            de los partidos por temporada, torneo y jornada. Haciendo
                            Aplicacion  para ver las estadisticas, resultados
                            de los part
                        </div>
                        <div className='boxtecnologias'>
                            <div className='tecnologias'>Django</div>
                            <div className='tecnologias'>Django REST framework</div>

                        </div>
                    </div>
                </div>


                <div className='proyectos-box'>
                    <div className='cabecera-proyectos' style={{ backgroundImage: `url(${clustering})` }}>
                        <a href="https://www.ejemplo.com" className='linkbtn'>
                            Visitar Pagina Web
                        </a>
                    </div>
                    <div className='info-proyectos'>
                        <div className='tituloproyectosbottom'>Clusterizacion Sector Agropecuario</div>
                        <div className='detallesproyectos'>
                            En este proyecto de ciencia de datos,
                            se aplicaron algoritmos de machine
                            learning a un conjunto de datos que
                            describe las características de los
                            productores agropecuarios en Perú. El
                            objetivo fue obtener conglomerados de
                            productores que comparten características
                            similares, abarcando todo el territorio peruano,
                            incluyendo la costa, sierra y selva.
                        </div>
                        <div className='boxtecnologias'>
                            <div className='tecnologias'>Python</div>
                            <div className='tecnologias'>RStudio</div>
                            <div className='tecnologias'>Power BI</div>


                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Proyectos