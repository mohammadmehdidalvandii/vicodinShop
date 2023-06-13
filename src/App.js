import './App.css';
import React from "react";
import {routes} from './routes'
import { useRoutes } from 'react-router-dom';
import TopNav from './components/TopNav/TopNav';
import CenterNav from './components/CenterNav/CenterNav';
import Footer from './components/Footer/Footer'
import NavCenterRes from './components/NavCenterRes/NavCenterRes';
function App() {

  let router = useRoutes(routes)
  return (
   <>
   <TopNav/>
   <CenterNav />
   <div className="NavCenterRes">
    <NavCenterRes/>
   </div>
    {router}
    <Footer/> 
   </>
  );
}

export default App;
