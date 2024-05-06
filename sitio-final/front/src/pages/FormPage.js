import React from "react";
import { useState } from "react";
import axios from 'axios';

const FormPage = (props) => {
      const initialForm = {  
        nombre: '',
        email: '',  
        telefono: '',
        mensaje: '' 
      }  
      
      const [sending, setSending] = useState(false);  
      const [msg, setMsg] = useState('');
      const [formData, setFormData] = useState(initialForm);  
      
      const handlechange = e => {  
          const { name, value } = e.target;  
          setFormData(oldData => ({  
              ...oldData,  
              [name]: value //forma dinamica  
      }));  
      }

      
      const handleSubmit= async e => {  
       e.preventDefault();  
       setMsg('');  
       setSending(true)  
       const response = await axios.post("http://localhost:3000/api/form", formData);  
       setSending(false);  
       setMsg(response.data.message);  
       if (response.data.error === false) {  
           setFormData(initialForm)  
      }
    }


    return (
      <main className="holder contacto">
        <div>
            <h3>Contacto</h3>
              <form action="/form" method="post" onSubmit= {handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputnombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="inputnombre" name="nombre" value={formData.nombre} onChange={handlechange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputapellido" className="form-label">Email</label>
                <input type="text" className="form-control" id="inputapellido" name="email" value={formData.email} onChange={handlechange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Telefono</label>
                <input type="text" className="form-control" id="inputEmail4" name="telefono" value={formData.telefono } onChange={handlechange} />
              </div>            
              <div className="col-md-6">
                <label htmlFor="inputciudad" className="form-label">Mensaje</label>
                <textarea className="form-control" id="inputciudad" name="mensaje" value={formData.mensaje} onChange={handlechange} />
              </div>          
              <div className="col-12">
                <button type="submit" className="btn btn-primary" value="Enviar">Enviar</button>
              </div>      
            </form>

            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
        </div>
        </main>
    );
}

export default FormPage;
