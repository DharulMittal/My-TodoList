import React from 'react'
import logo from "../assets/todo.png";

const Nav = () => {
  return (
    <div className='bg-[#451f1f] text-[#ffff48ba] flex justify-between p-[5px] opacity-85 box-border transition-all px-14 sticky top-0 max-h-[5vh] duration-1000 min-h-[30px]' >
      <div className="todologo flex">
        <img src={logo} alt="logo" className='size-6' />
        <div>ToDo-List</div>
      </div>
      <div className='gap-4 max-md:hidden' >
        <ul className='flex gap-5'>
          <li className='hover:text-xl hover:text-[yellow] transition-all cursor-pointer'>Home</li>
          <li className='hover:text-xl hover:text-[yellow] transition-all '><a href="https://github.com/DharulMittal">GitHub</a></li>
          <li className='hover:text-xl hover:text-[yellow] transition-all '><a href="https://www.instagram.com/dharulmittal/">Instagram</a></li>
          <li className='hover:text-xl hover:text-[yellow] transition-all '><a href="https://www.linkedin.com/in/dharul-mittal-3467b124b/">Linkden</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
