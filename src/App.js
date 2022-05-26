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
// import Error from "./Pages/Error/Error";
import Portpholio from "./Pages/Portpholio/Portpholio";
import Purchase from "./Pages/AllProducts/Purchase";
import Order from "./Pages/AllProducts/Order";
import RequireAdmin from "./Pages/RequireAuth/RequireAdmin";




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
          <Route path="/portpholio" element={<Portpholio></Portpholio>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/product" element={<AllProducts></AllProducts>}
          ></Route>
          <Route path="/purchase/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}
          ></Route>
          <Route path="/order/:id" element={<RequireAuth><Order></Order></RequireAuth>}
          ></Route>

          <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="reviews" element={<AddReview></AddReview>}></Route>
            <Route path="myOrder" element={<MyOrders></MyOrders>}></Route>
            <Route path="manage_all_orders" element={<RequireAdmin><ManageAllOrder></ManageAllOrder></RequireAdmin>}></Route>
            <Route path="add_product" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path="make_admin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
            <Route path="manage_products" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          </Route>
          {/* <Route path="*" element={<Error></Error>}></Route> */}

        </Routes>
      </Navbar>

    </>
  );
}

export default App;
