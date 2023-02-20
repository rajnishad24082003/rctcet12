import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Our_projects_page from "./components/Our_projects_page";
import Home from "./components/Home";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/our_projects"
            element={
              <Our_projects_page result={[1, 2, 3, 4, 5]}></Our_projects_page>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
