import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import React from "react"
import ActiveLink from "../active-link/ActiveLink"

const navItems = [
  {path: '/about', text: 'About',},
  {path: '/pricing', text:'pricing'},
  {path: '/contact', text:'contact'}
]

type item = {
path: string
text: string
}

export const Navbar = () => {

  //ESTO NO SE VA A EJECUTAR PORQUE ES UN SERVER COMPONENT, TENGO QUE ESPECIFICAR QUE ES UN CLIENTE COMPONENT
  console.log('Navbar creado')
  return (
    <nav className='flex border-l-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link href="/" passHref>
          <a className="mr-2"><HomeIcon className="mr-2"/>Home</a>
        </Link>

        <div className="flex flex-1">        </div>

        {
        navItems.map((item: item, index: number) => (
        <ActiveLink key={index} path={item.path} text={item.text}/> 
        ))
        }

        {/* la diferencia entre el Link de next/link y el <a> es que el <Link> parece que te estas navegando en una simple page app y no recarga la pagina */}
        {/* <Link href="/about" className="mr-2">About</Link>
        <Link href="/pricing" className="mr-2">Pricing</Link>
        <Link href="/contact" className="mr-2">Contact</Link> */}
    </nav>
  )
}

