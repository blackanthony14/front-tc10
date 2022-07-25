import React from 'react'
import axios from 'axios'
import {Container, Box} from '@mui/material'
import './styles.css'

function NewCita() {
    const [datos, setDatos] = React.useState(null);
    const [fetched, setFetched] = React.useState(false);


    const handleInputChange = (type, e) => {
        let tempDatos = {
          ...datos,
        };
        tempDatos[type] = e.target.value;
        setDatos(tempDatos);
      };

    const postAPI = async (datas, callback) => {
        // const finalData = JSON.stringify(data);
        console.log({ datas });
        const data={
            "nombre":datas.nombre,
            "metodoContacto":datas.metodoContacto,
            "telefono":Number(datas.telefono),
            "correo":datas.correo,
            "fecha":Date(datas.fecha)
        }
         const res = await axios
          .post("https://tc9.herokuapp.com/citas/post", datas)
          .then((res) => {
            callback(null);
            setFetched(true);
            
          } )
          .catch((err) => {
            console.error(err);
          });
      };


    const handleSubmit = () => {
        postAPI(datos, setDatos);
      };
  return (
    <Box className='App' sx={{
        width: 600,
        height: 600,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
    <div className="inputContainer">
        <input type="text" onChange={(e) => handleInputChange("nombre", e)} value={datos?.nombre} />
        <p>Nombre: {datos?.nombre}</p>
      </div>
      <div className="inputContainer">
        <input type="text" onChange={(e) => handleInputChange("metodoContacto", e)} value={datos?.metodoContacto} />
        <p>Metodo de contacto: {datos?.metodoContacto}</p>
      </div>
      <div className="inputContainer">
        <input type="number" onChange={(e) => handleInputChange("telefono", e)} value={datos?.telefono} />
        <p>Telefono: {datos?.telefono}</p>
      </div>
      <div className="inputContainer">
        <input type="email" onChange={(e) => handleInputChange("correo", e)} value={datos?.correo} />
        <p>Correo: {datos?.correo}</p>
      </div>
      <div className="inputContainer">
        <input type="date" onChange={(e) => handleInputChange("fecha", e)} value={datos?.fecha} />
        <p>Fecha: {datos?.fecha}</p>
      </div>
      <div className="inputContainer">
        <input type="time" onChange={(e) => handleInputChange("horas", e)} value={datos?.horas} />
        <p>Hora: {datos?.horas}</p>
      </div>
      <button style={{ width: "250px" }} onClick={handleSubmit}>
        Submit
      </button>
      </Box>
  )
}

export default NewCita