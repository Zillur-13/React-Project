

import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Menu from './Menu'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='service' element={<Service />} />
          <Route path='menu' element={<Menu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Root
