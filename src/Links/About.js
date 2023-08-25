import React from "react";
import { Box, Typography } from "@mui/material";

function About(){

    console.log('about')

    return(
    <Box
    id="about"
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    }}
    >  
        <Box id="about" 
        sx={{
            maxWidth: 600,
            padding: '25px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }} >
            <Typography variant='h2'>
                Welcome to my website!
            </Typography>
            <Typography sx={{wordBreak: 'break-word'}}>
                My name is Caiden Nason - welcome! My journey with software engineering began in 2019, while I
                was the events manager for a top congressional campaign. 
            </Typography>
        </Box>
    </Box>
    )
}

export default About