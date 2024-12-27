import React from "react";
import Layout from "../components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Pages/Home";
import ContactUs from "../components/Pages/ContactUs";
import PageNotFound from "../components/PageNotFound";
//import Products from "../components/Pages/Products";
import Profile from "../components/Pages/Profile";
import Logout from "../components/Pages/Logout";
import ProductList from "../components/Pages/admin/product/ProductList";

const PrivateRoute = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default PrivateRoute;
