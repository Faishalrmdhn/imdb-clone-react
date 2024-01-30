import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination';
import Favourites from './components/Favourites';
import PageNotFound from './components/PageNotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
function App() {
  const [banner, setBanner] = useState('')
  const backdrop =(val)=>{
    setBanner(val)
  }
  // console.log(banner);
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={
            <>
              <Banner banner={banner}></Banner>
              <Movies backdrop={backdrop}></Movies>
              <Pagination></Pagination>
            </>
          }></Route>
          <Route path='favourite' element={
            <>
              <Favourites></Favourites>
            </>
          }></Route>

          <Route path='*' element={
            <PageNotFound></PageNotFound>
          }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
