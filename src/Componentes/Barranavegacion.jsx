import React from 'react'
import './Barrannavegacion.css';

function Barradenavegacion() {
    return (
        <div className='barradenavegacion'>
            <div className='logo'>
                <div className='logocontainer'>
                    <div className='logocontainertop'>NB</div>
                    <div className='logocontainerbottom'>&lt;Desarrollador Web/&gt;</div>
                </div>
            </div>
            <input type="checkbox" id='check' />
            <label for="check" className='icons'>
                <i className='responsivebutton' id="menu-icon">
                    <i className='lineresponsive1'></i>
                    <i className='lineresponsive2'></i>
                    <i className='lineresponsive3'></i>
                </i>
                <div className='equis' id="close-icon"></div>
            </label>







            <div className='opciones'>
                <a href='#Portada'>Inicio</a>
                <a href='#Educacion'>Educacion</a>
                <a href='#Habilidades'>Habilidades</a>
                <a href='#Proyectos'>Proyectos</a>
                <a href='#Contacto'>Contacto</a>
            </div>
        </div>
    )
}
export default Barradenavegacion