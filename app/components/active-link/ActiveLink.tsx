'use client'

import Link from "next/link";
import style from './ActiveLink.module.css'
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string
}

const navItems = [
  {path: '/about', text: 'About',},
  {path: '/pricing', text:'Pricing'},
  {path: '/contact', text:'Contact'}
]



const ActiveLink = ({path, text} : Props) => {

  const pathName = usePathname()

  return (
  <Link 
   className={`mr-2 ${ style.link }  ${ pathName === path && style['active-link']}`}
   href={path}>

    { text }
  </Link>
  )
}

export default ActiveLink