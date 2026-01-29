
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoMailUnread } from "react-icons/io5";
import "../App";
import { Link, Outlet, useLocation } from "react-router";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState('/')
  const location = useLocation();

  

 useEffect(() =>{
  setLink(location.pathname || '/')
 },[location.pathname])


 const linkClick = (path) =>{
   setLink(path)
 }


  const toggleMenu = () => {
    setOpen(!open);
  };



  return (
      <div>
        <div className="bg-green-800 text-white py-4 md:py-6 sticky z-0 top-0">
      <nav className="container mx-auto flex justify-between items-center ">

        <div className="logo px-7">
          <Link to='/'>
            <img src="vite.svg" alt="logo" />
          </Link>
        </div>

        <div className="text-3xl px-7 md:hidden ">
          <button onClick={toggleMenu}>
            {open ? <IoMdClose /> : <IoMenu />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-5 md:space-x-7">
            <li>
              <Link to='/' onClick={() => linkClick('/')} className={`${link === '/' ? 'text-red-600' : 'hover:text-green-300'}`}>
                Home
              </Link>  
            </li>

            <li> 
              <Link to='/about' onClick={() => linkClick('/about')} className={`${link === '/about' ? 'text-red-600' : 'hover:text-green-300'}`}>
                About
              </Link>  
            </li>

            <li> 
              <Link to='/contact' onClick={() => linkClick('/contact')} className={`${link === '/contact' ? 'text-red-600' : 'hover:text-green-300'}`}>
                Contact
              </Link>  
            </li>

            <li>
              <Link to='/service' onClick={() => linkClick('/service')} className={`${link === '/service' ? 'text-red-600' : 'hover:text-green-300'}`}>
                Service
              </Link> 
            </li>

            <li> 
              <Link to='/menu' onClick={() => linkClick('/menu')} className={`${link === '/menu' ? 'text-red-600' : 'hover:text-green-300'}`}>
                Menu
              </Link> 
            </li>

        </ul>




        <div className="hidden md:block">
          <b className="flex items-center  gap-5">
            <IoMailUnread className="text-2xl mt-2" /> razillur2002@gmail.com
          </b>
        </div>




        {/* mobile menu */}
       
          <div className= {`md:hidden absolute bg-green-600 top-full left-0 right-0 w-full ${open ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col items-center py-4 gap-2">
                <li> <Link to='/'>Home</Link>  </li>
                <li> <Link to='/about'>About</Link>  </li>
                <li> <Link to='/contact'>Contact</Link>  </li>
                <li> <Link to='/service'>Service</Link>  </li>
                <li> <Link to='/menu'>Menu</Link>  </li>
                <li>
                    <b className="flex items-center sm:text-xs gap-5">
                      <IoMailUnread className="text-2xl mt-2" />
                      razillur2002@gmail.com
                    </b>
                </li> 
            </ul>
          </div> 

      </nav>
    </div>


        <main className="items">
          <Outlet/>
        </main>

        <div>
          <footer>
            <b className="text-center text-black py-2  block">  &copy; copy right All Desigin by Zillur Rahman ..!!</b>
          </footer>
        </div>
</div>
  );
};

export default Layout;
