import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Our_projects_page from "./components/Our_projects_page";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Hobby from "./components/Hobby";
import About from "./components/About";
import LoginPage from "./components/LoginPage";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/AboutUs" element={<About></About>}></Route>
          <Route path="/HobbyBasedClubs" element={<Hobby></Hobby>}></Route>
          <Route
            path="/OurProjects"
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
