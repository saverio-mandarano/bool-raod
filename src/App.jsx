//imort tutti i componenti di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import layout
import DefaultLayout from "./layouts/DefaultLayout";

//import pages
import HomePage from "./pages/Homepage";
import TravelPage from "./pages/TravelPage";






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/travels/:id" element={<TravelPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
