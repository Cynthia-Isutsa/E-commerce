import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {BsPlus, BsEyeFill} from 'react-icons/bs'

const Product = ({product}) => {
  const {category, id, image, title, price} = product;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center '>
            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='' />
          </div>
          <div className='absolute top-2 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <button>
              <div className='flex justify-center items-center text-white bg-red-500 w-12 h-12'>
                <BsPlus size={27}/>
              </div>
            </button>
            <Link className='flex justify-center items-center text-black/90 drop-shadow-xl bg-white w-12 h-12' to={`/product:${id}`} >
              <BsEyeFill size={27} /></Link>
          </div>
        </div>
      </div>
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product:${id}`} >
           <h2 className='font-semibold text-sm'>{title}</h2>
        </Link>
        <div className='font-semibold'>Ksh. {price}</div>
      </div>
    </div>
  )
}

export default Product
