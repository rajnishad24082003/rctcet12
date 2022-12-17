import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Our_projects_page from "./components/Our_projects_page";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/our_projects/:id"
            element={<Our_projects_page result={[1, 2, 3]}></Our_projects_page>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
