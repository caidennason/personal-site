import './Css/PersonalSite.css'
import About from './Links/About';
import Projects from './Links/Projects';
import Resume from './Links/Resume';
import { Stack, Box, AppBar, Toolbar, Button, Typography, IconButton } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
        <AppBar 
        position="static" 
        sx={{ backgroundColor: 'black', 
        color: 'white', 
        maxWidth: 700, 
        width: '100%', 
        mx: 'auto',
        borderRadius: '8px',
        marginTop: 0.5 }}> 
        <Toolbar sx={{justifyContent: 'center'}}>
            <Button sx={{mr: 2}}color="inherit" component={Link} to='/'>About Me</Button>
            <Button sx={{mr: 2}} color="inherit" component={Link} to="/resume">Resume</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, ml: 3 }}
                >
                  <a
                    href='https://www.linkedin.com/in/caiden-nason/'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='linkedin-link'
                  >
                    <LinkedInIcon/>
                  </a>
              </IconButton>
            
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                  <a
                    href='https://github.com/caidennason'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='github-link'
                    >
                      <GitHubIcon/>
                  </a>
              </IconButton>
            
        </Toolbar>
        </AppBar>

    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/resume' element={<Resume />}/>
      <Route path='/projects' element={<Projects />}/>
    </Routes>   
  
    </div>
  );
}

export default App;
