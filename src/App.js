import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favourites from './components/Favourites';
import PageNotFound from './components/PageNotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={
            <>
              <Banner></Banner>
              <Movies></Movies>
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
