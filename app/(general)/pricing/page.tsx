import React from 'react'
import type { Metadata } from 'next';

//SI NO PONEMOS LA METADATA, SE PONDRÁ POR DEFECTO LA DEL LAYOUT
export const metadata: Metadata = {
    title: "Pagina de Princing",
    description: "Aquí estarán mis precios",
    keywords: ['About Page', 'Lucas', 'información']
  };

const PricingPage = () => {
  return (
    <>
    <span className='text-7xl'>Pricing Page</span>
    </>
  )
}

export default PricingPage