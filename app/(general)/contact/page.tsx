import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "PAGINA DE CONTACTO",
    description: "Acá está el formulario de contacto",
    keywords: ['Contact', 'Lucas', 'información']
  };

const ContactPage = () => {
  return (
    <>
        <span className='text-7xl'>Contact Page</span>
    </>
    )
}

export default ContactPage