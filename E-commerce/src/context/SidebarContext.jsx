import React, {createContext, useState} from 'react'

export const SidebarContext = createContext()

const SidebarProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () =>{
      
  }


  return (  
    
    <SidebarContext.Provider>
      {provider}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
