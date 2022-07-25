import {Container} from '@mui/material'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import NewCita from './components/NewCita';
import CitasPorximas from './components/CitasPorximas';
import EditCita from './components/EditCita';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Container sx={{display:'flex', float:'left'}}>
      <CitasPorximas sx={{float:'left'}}/>
    <Routes>
      <Route path = '/CrearCita' element = {<NewCita/>}></Route>
      <Route path = '/CitasProximas' element = {<CitasPorximas/>}></Route>
      <Route path = '/EditarCitas' element = {<EditCita/>}></Route>
    </Routes>
    </Container>
    </BrowserRouter>
  );
}

export default App;
