import { React, useState, useEffect } from "react";
import { Stack, Box, Container, Typography, spacing } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles.css"

function CitasPorximas() {
  const [todosEstudiantes, setEstudiantes] = useState(null);
  useEffect(() => {
    const querySearch = async () => {
      if (!todosEstudiantes) {
        const res = await fetch("https://tc9.herokuapp.com/citas");
        const jasonData = await res.json();
        console.log(jasonData);
        setEstudiantes(jasonData);
      }
    };
    querySearch();
  }, []);
  return (
    <Container
      sx={{
        mx: "auto",
        width: "60%",
        mt: 10,
      }}
    >
      <Box className="acordion">
        <ul sx={{ flexGrow: 1}}>
          {todosEstudiantes
            ? todosEstudiantes.map((el, i) => (
                <Stack background_color="black" key ={i}>
                  <Accordion sx={{ width: 300,ml:3,padding:3 }}
                    key={i}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <AccordionSummary sx={{ width: 300, ml:4}}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{el.nombre}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{
                          padding: "8px",
                        }}
                      >
                        Numero: {el.telefono}
                      </Typography>
                      <Typography
                        style={{
                          padding: "8px",
                        }}
                      >
                        Metodo de Contacto: {el.metodoContacto}
                      </Typography>
                      <Typography
                        style={{
                          padding: "8px",
                        }}
                      >
                        Correo: {el.correo}
                      </Typography>
                      <Typography
                        style={{
                          padding: "8px",
                        }}
                      >
                        Fecha de la cita:{el.fecha}
                      </Typography>
                      <Typography
                        style={{
                          padding: "8px",
                        }}
                      >
                        Hora de la cita: {el.horas}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Stack>
              ))
            : "Loading..."}
        </ul>
      </Box>
    </Container>
  );
}

export default CitasPorximas;
