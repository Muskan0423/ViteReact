import { Link } from "react-router-dom"


function Header() {
  return (
    <div>
      <header className="flex justify-between bg-slate-50 px-1 ">
        React Routing
        <ul className="gap-4 flex " >
           <Link to="/"> <li>Home</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/aboutus"><li>About Us</li></Link>
            <Link to="/Blogs"><li>Blogs</li></Link>
        </ul>
      </header>
    </div>
  )
}

export default Header
