import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blogs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Review from "./Pages/Reviews/Review";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/review" element={<Review></Review>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/product" element={<AllProducts></AllProducts>}></Route>

        </Routes>
      </Navbar>

    </>
  );
}

export default App;
