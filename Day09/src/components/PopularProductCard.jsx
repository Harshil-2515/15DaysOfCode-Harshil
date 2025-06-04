import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />

        <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="rating" width={24} height={24} /> 
        <p className='font-montserrat text-slate-gray text-xl leading-normal'>(4.5)</p>
        </div> 
        <h3 className='font-semibold leading-normal text-2xl mt-2 font-palanquin'>{name}</h3>
        <p className='font-semibold font-montserrat text-coral-red mt-2 leading-normal text-xl'>{price}</p>
    </div>
  )
}

export default PopularProductCard