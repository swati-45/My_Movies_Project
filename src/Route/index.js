import React from "react";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeContainer from "../Container/Home";
import AboutContainer from "../Container/About";
import MoviesContainer from "../Container/Movies";
import TvSeriesContainer from "../Container/TVSeries";
import SearchContainer from "../Container/Search";
import DetailsContainer from "../Container/Details";
import ContactContainer from "../Container/Contact";

import FooterComponents from "../Components/Footer";
import HeaderComponents from "../Components/Header";
const RouterComponent=()=>{
    return(
        <>
        <BrowserRouter>
        <HeaderComponents/>
        <Routes>
             <Route path="/" element={<HomeContainer/>}/>
             <Route path="/about" element={<AboutContainer/>}/>
             <Route path="/movies" element={<MoviesContainer/>}/>
              <Route path="/contact" element={<ContactContainer/>}/>
             <Route path="/series" element={<TvSeriesContainer/>}/>
             <Route path="/search" element={<SearchContainer/>}/>
             <Route path="/details/:mediatype/:moviesid" element={<DetailsContainer/>}/>
         </Routes>
         <FooterComponents/>
        </BrowserRouter>
        </>
    )
}
export default RouterComponent;