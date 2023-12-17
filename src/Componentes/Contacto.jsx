import React, { useState } from 'react';
import '../Componentes/Contacto.css';
import facebook from '../Componentes/facebook.png';
import github from '../Componentes/github.png';
import linkedin from '../Componentes/linkedin.png';
import correo from '../Componentes/correo-electronico.png';
import emailjs from '@emailjs/browser';
import whatsapp from '../Componentes/whatsapp.png'

function Contacto() {
    const [formData, setFormData] = useState({
        nombrecompleto: '',
        emailcontacto: '',
        asunto: '',
        contenido: ''
    });
    const [redireccionar, setRedireccionar] = useState(false);

    const sendEmail = (event) => {
        event.preventDefault();

        // Validar que todos los campos estén llenos
        if (
            formData.nombrecompleto.trim() === '' ||
            formData.emailcontacto.trim() === '' ||
            formData.asunto.trim() === '' ||
            formData.contenido.trim() === ''
        ) {
            alert('Todos los campos son obligatorios');
            return;
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.emailcontacto)) {
            alert('Ingrese un correo electrónico válido');
            return;
        }

        // Enviar el formulario solo si pasa todas las validaciones
        emailjs.sendForm('service_2aav4cr', 'template_ypi7sxt', event.target, 'Senbt-SInM8NXry48')
            .then(response => {
                console.log(response);
                setFormData({
                    nombrecompleto: '',
                    emailcontacto: '',
                    asunto: '',
                    contenido: ''
                });
                alert("Mensaje enviado con éxito");
                setRedireccionar(true);
            })
            .catch(error => console.log(error));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    if (redireccionar) {
        window.location.href = '/';
    }

    return (
        <section className='contacto-section' id='Contacto'>
            <div className='contacto-info'>
                <div className='titulocontacto'>
                    Contacto
                </div>
                <form className="form" onSubmit={sendEmail}>
                    <label htmlFor="nombrecompleto" className='datos-contacto'>Nombre:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombrecompleto"
                        value={formData.nombrecompleto}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                    />
                    <label htmlFor="exampleInputEmail1" className='datos-contacto'>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="emailcontacto"
                        value={formData.emailcontacto}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                    />
                    <label htmlFor="asunto" className='datos-contacto'>Asunto:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        aria-describedby="emailHelp"
                    />
                    <label htmlFor="contenido" className='datos-contacto'>Mensaje:</label>
                    <textarea
                        className="form-control"
                        name="contenido"
                        value={formData.contenido}
                        onChange={handleChange}
                        rows="3"
                    ></textarea>
                    <button type="submit" className='enviarbtn'>Enviar</button>
                </form>
            </div>
            <div className='redessociales'>
                <a href='https://www.facebook.com' title='Facebook'><img src={facebook} className='face' alt="" /></a>
                <a href='https://www.github.com' title='GitHub'><img src={github} className='github' alt="" /></a>
                <a href='https://www.linkedin.com' title='LinkedIn'><img src={linkedin} className='linkedin' alt="" /></a>
                <a href='mailto:nino.barrios@ucsm.edu.pe' title='Correo' ><img src={correo} className='correo' alt="" /></a>
                <a href='https://wa.me/51965750922' title='WhatsApp'><img src={whatsapp} className='whatsapp' alt="" /></a>

            </div>
        </section>
    )
}

export default Contacto;