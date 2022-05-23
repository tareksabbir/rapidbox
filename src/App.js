import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blogs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Review from "./Pages/Reviews/Review";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Dashboard from "./Pages/Dahboard/Dahboard";
import MyOrders from "./Pages/Dahboard/MyOrders";
import AddReview from "./Pages/Dahboard/AddReview";
import MyProfile from "./Pages/Dahboard/MyProfile";
import ManageAllOrder from "./Pages/Dahboard/ManageAllOrder";
import AddProduct from "./Pages/Dahboard/AddProduct";
import MakeAdmin from "./Pages/Dahboard/MakeAdmin";
import ManageProducts from "./Pages/Dahboard/ManageProducts";
import Error from "./Pages/Error/Error";



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
          <Route path="/product" element={<RequireAuth><AllProducts></AllProducts></RequireAuth>}
          ></Route>
          <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path="reviews" element={<AddReview></AddReview>}></Route>
            <Route path="profile" element={<MyProfile></MyProfile>}></Route>
            <Route path="manage_all_orders" element={<ManageAllOrder></ManageAllOrder>}></Route>
            <Route path="add_product" element={<AddProduct></AddProduct>}></Route>
            <Route path="make_admin" element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path="manage_products" element={<ManageProducts></ManageProducts>}></Route>
          </Route>
          <Route path="*" element={<Error></Error>}></Route>

        </Routes>
      </Navbar>

    </>
  );
}

export default App;
