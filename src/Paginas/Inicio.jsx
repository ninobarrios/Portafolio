import React, { useState } from 'react';
import './Inicio.css';
import Portada from '../Componentes/Portada';
import Educacion from '../Componentes/Educacion';
import Habilidades from '../Componentes/Habilidades';
import Proyectos from '../Componentes/Proyectos';
import Contacto from '../Componentes/Contacto';
import Footer from '../Componentes/Footer';

function Inicio() {
    const [activeSection, setActiveSection] = useState(null);

    const handleSetActiveSection = (section) => {
        setActiveSection(section === activeSection ? null : section);
    };

    return (
        <div className='main'>
            <Portada isActive={activeSection === 'portada'} setActiveSection={() => handleSetActiveSection('portada')} />
            <Educacion isActive={activeSection === 'educacion'} setActiveSection={() => handleSetActiveSection('educacion')} />
            <Habilidades isActive={activeSection === 'habilidades'} setActiveSection={() => handleSetActiveSection('habilidades')} />
            <Proyectos isActive={activeSection === 'proyectos'} setActiveSection={() => handleSetActiveSection('proyectos')} />
            <Contacto isActive={activeSection === 'contacto'} setActiveSection={() => handleSetActiveSection('contacto')} />
            <Footer />
        </div>
    );
}

export default Inicio;
