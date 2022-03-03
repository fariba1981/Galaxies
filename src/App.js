//import 'bootstrap/dist/css/bootstrap.css';
import React, { useContext, useState } from "react";
import "./App.css";
import PHOTOS from "./PHOTOS.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Photos from "./pages/photos/Photos";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import ThemeContext from "./contexts/ThemeContexts";
import themeConfig from "./configs/theme";
import SinglePhoto from './pages/photos/SinglePhoto'


const App = () => {

  const [activeTheme, setActiveTheme] = useState('green');

  return (
    <ThemeContext.Provider value={{theme : themeConfig[activeTheme], setActiveTheme}}>
      <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={
              <div> 
                <Photos photos={PHOTOS}/>
              </div>}/>
            <Route path="/about" element={
                <div>
                  <About />
                </div>} />
            <Route path="/blog" element={
                <div>
                  <Blog />
                </div>}/>
            <Route path="/contact" element={
                <div>
                  <Contact />
                </div>}/>
            <Route path="/photo/:id" element={
                <div>
                  <SinglePhoto />
                </div>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  </ThemeContext.Provider>
  );
};
export default App;
