import React,{useContext} from 'react'
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { SidebarContext } from '../context/SidebarContext'

const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  return (
    <div>
      
    </div>
  )
}

export default Sidebar
 