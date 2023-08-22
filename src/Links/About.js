import React from "react";
import { Box, Typography } from "@mui/material";

function About(){

    console.log('about')

    return(

        <Box id="about" 
        style={{ 
            width: '100%', 
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center', 
            marginTop: 25,
            maxWidth: 600,
            margin: '25px auto'}}  >
            <Typography sx={{wordBreak: 'break-word'}}>
            Put some info about yourself here put it in a box so it is confined to one area and wraps look cool 
            </Typography>
        </Box>
    )
}

export default About