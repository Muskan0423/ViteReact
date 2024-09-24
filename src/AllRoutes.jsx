import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Aboutus from "./Pages/Aboutus"
import Products from "./Pages/Products"
import Blog from "./Pages/Blog"


const AllRoutes = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
   
   
   
   </BrowserRouter>
  )
}

export default AllRoutes
