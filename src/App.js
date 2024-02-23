import Header from "./Components/Header";
import Cards from "./Components/Cards";

import AddMovies from "./Components/AddMovies";
import {Route, Routes } from "react-router-dom";
import Detail from "./Components/Detail";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovies" element={<AddMovies />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      
    </div>
  );
}

export default App;
