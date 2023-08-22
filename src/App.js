import About from './Links/About';
import Projects from './Links/Projects';
import Resume from './Links/Resume';
import Check from './Links/Check';
import { Stack, Box, AppBar, Toolbar, Button, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Box>
        <AppBar position="static"> 
        <Toolbar>
            <Button color="inherit" component={Link} to='/'>About Me</Button>
            <Button color="inherit" component={Link} to="/resume">Resume</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
        </Toolbar>
        </AppBar>
      </Box>

    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/resume' element={<Resume />}/>
      <Route path='/projects' element={<Projects />}/>
    </Routes>   
    </div>
  );
}

export default App;
