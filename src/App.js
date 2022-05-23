import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blogs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Review from "./Pages/Reviews/Review";
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
        </Routes>
      </Navbar>

    </>
  );
}

export default App;
