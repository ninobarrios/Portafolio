import React from 'react'
import foto from './fotoNB.png'
import '../Componentes/Portada.css'
function Portada() {
    return (
        <section className='portada' id='Portada'>
            <div className='portadacontent'>
                <div className='superior'>
                    <div className='circle'>
                        <img src={foto} alt="" />

                    </div>
                </div>
                <div className='inferior'>
                    <div className='name'>
                        Nino <span className='barrios'>Barrios</span>
                    </div>
                    <div className='areadesarrollo'>
                        Desarrollo <span className='barrios'>Web</span>
                    </div>
                    <div className='division'></div>
                    <div className='descripcion'>
                        Soy ingeniero de sistemas, me especializo
                        en la creación de páginas web desde cero,
                        comprendiendo a fondo la arquitectura y
                        asegurando un código organizado y comprensible.
                        Mi enfoque se centra en adaptarme a las últimas
                        tecnologías, garantizando soluciones eficientes
                        y modernas.

                    </div>
                </div>

                
            </div>
            <div className='organizar-items'>
                    <div className='palabras-clave'>
                        <div className='textoclave'>
                            React
                        </div>
                    </div>
                    <div className='palabras-clave'>
                        <div className='textoclave'>
                            Vue
                        </div>
                    </div>
                    <div className='palabras-clave'>
                        <div className='textoclave'>
                            Angular
                        </div>
                    </div>
                    <div className='palabras-clave'>
                        <div className='textoclave'>
                            Nodejs
                        </div>
                    </div>
                    <div className='palabras-clave'>
                        <div className='textoclave'>
                            SQL
                        </div>
                    </div>
                    <div className='palabras-clave'>
                        <div className='textoclave'>
                            Python
                        </div>
                    </div>
                    <div className='palabras-clave'>
                        <div className='textoclave'>
                            Django
                        </div>
                    </div>
                    <div className='palabras-clave'>
                        <div className='textoclave'>
                            .NET
                        </div>
                    </div>
                    <div className='palabras-clave'>
                        <div className='textoclave'>
                            Ciencia de datos
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Portada