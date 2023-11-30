import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Countries from "./pages/Countries";
import SingleCountry from "./pages/SingleCountry";
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { MdSearch } from 'react-icons/md'
import { AiFillInfoCircle } from 'react-icons/ai'
import SearchCountry from './pages/SearchCountry';
import About from './pages/About';
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
    
      <header className="flex fixed items-center justify-around inset-x-0 top z-0 flex-wrap bg-white p-8">
        <div class="flex fixed items-center flex-shrink-0 text-black mr-6">
        <img src="https://st.depositphotos.com/61800286/54444/v/450/depositphotos_544446984-stock-illustration-earth-globe-planet-map-continents.jpg" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
          <span class="font-semibold text-xl tracking-tight">The County List</span>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/:name" element={<SingleCountry />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/SearchCountry" element={<SearchCountry />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
      <footer className="flex justify-around block fixed inset-x-0 bottom-0 z-10 bg-white shadow items-center">
        <NavLink to="/" className="flex flex-col items-center decoration-none font-times new roman p-1">
          <HiHome className="mb-2 text-xl" />
          Countries
        </NavLink>
        <NavLink to="/SearchCountry" className="flex flex-col items-center decoration-none font-times new roman p-1">
          <MdSearch className="mb-2 text-xl" />
          Search Country
        </NavLink>
        <NavLink to="/About" className="flex flex-col items-center decoration-none font-times new roman p-1">
          <AiFillInfoCircle className="mb-2 text-xl" />
          About
        </NavLink>
        <NavLink to="/Profile" className="flex flex-col items-center decoration-none font-times new roman p-1">
          <MdGroup className="mb-2 text-xl" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
