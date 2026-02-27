<<<<<<< HEAD
//imort tutti i componenti di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import layout
import DefaultLayout from "./layouts/DefaultLayout";

//import pages
import HomePage from "./pages/Homepage";

import MainHeader from "./components/MainHeader";
=======

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainHeader from './components/MainHeader';
import './App.css';

>>>>>>> e2f3f1ba455acef828cdfa89e260cefaef1f4c1b

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/travels/:id" element={<TravelPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
=======
    <>
      <MainHeader />
    </>
    // <h1 className='text-primary d-flex justify-content-center'>sono app.jsx</h1>
  )
>>>>>>> e2f3f1ba455acef828cdfa89e260cefaef1f4c1b
}

export default App;
