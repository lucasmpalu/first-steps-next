import { Navbar } from "@/app/components"
import React from "react"

//EL LAYOUT DENTRO DE LA CARPETA, SERÁ EL LAYOUT CORRESPONDIENTE.

export default function GeneralLayout({children}: { children: React.ReactNode;}) {
  return (
    <>
      <Navbar/>
      <main className="flex flex-col items-center p-24">
        {children}
      </main>
    </>
  );
}