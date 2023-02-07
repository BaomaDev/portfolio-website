import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Achievements from './pages/achievements/Achievements';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import LayoutHome from './widget/LayoutHome';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <LayoutHome>
            <Home/>
          </LayoutHome>
        } />

        <Route path='/skills' element={
          <LayoutHome>
            <Skills/>
          </LayoutHome>
        } />

        <Route path='/achievements' element={
          <LayoutHome>
            <Achievements/>
          </LayoutHome>
        } />

        <Route path='/projects' element={
          <LayoutHome>
            <Projects/>
          </LayoutHome>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;