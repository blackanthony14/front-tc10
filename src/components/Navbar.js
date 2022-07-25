import React from "react";
import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Citas Medicas
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/CitasPasadas")}
              style={{
                padding: "8px",
              }}
            >
              Citas Pasadas
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/EditarCitas")}
              style={{
                padding: "8px",
              }}
            >
              Editar Cita
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/CrearCita")}
              style={{
                padding: "8px",
              }}
            >
              Crear Cita
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;