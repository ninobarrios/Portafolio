import React from 'react'
import '../Componentes/Educacion.css'
import escudo from '../Componentes/Ucsm-escudo.png'
function Educacion() {
    return (
        <section className='centroeduc' id='Educacion'>
            <div className='titulo-educacion'>
                Formacion Profesional
            </div>
            <div className='centrar'>
                <img className='escudo' src={escudo} alt="" />
                <div className='info'>
                    <div className='infouni'>
                        UNIVERSIDAD CATOLICA SANTA MARIA
                    </div>
                    <div className='infoprof'>
                        Ingeniero de Sistemas
                    </div>
                    <div className='infociudad'>
                        Arequipa-Peru
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Educacion