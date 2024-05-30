/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tOnF6UPDszh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import { LaptopIcon,ArrowDownCircleIcon,LinkedinIcon,GithubIcon,DownloadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { ButtonTheme } from "./button-theme"


export default function Header() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 fixed  z-50 bg-white opacity-95 dark:bg-slate-950 border-b">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet defaultOpen={false} >
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle Menu de navegacion</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" >
            <Link href="#hero">
              <LaptopIcon className="h-6 w-6" />
              <span className="sr-only">Laptop icono</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link scroll className="flex w-full items-center py-2 text-lg font-semibold" href="#hero">
                Inicio
              </Link>
              <Link  scroll className="flex w-full items-center py-2 text-lg font-semibold" href="#conocimientos">
                Conocimientos
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#experiencia">
                Expriencia
              </Link>
              <Link scroll  className="flex w-full items-center py-2 text-lg font-semibold" href="#proyectos">
                Proyectos
              </Link>
              {/* <Link scroll className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Contact
              </Link> */}
            </div>
          </SheetContent>
        </Sheet>
        <Link className="mr-6 hidden lg:flex" href="#hero">
          <LaptopIcon className="h-6 w-6" />
          <span className="sr-only">ShadCN</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-600  focus:text-blue-600  focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-black-100/50 data-[state=open]:text-black-100/50 dark:bg-gray-950  dark:hover:text-blue-500 dark:focus:text-blue-500  dark:data-[active]:text-blue-500 dark:data-[state=open]:text-blue-500"
                href="#hero"
              >
                Inicio
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-600  focus:text-blue-600  focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-black-100/50 data-[state=open]:text-black-100/50 dark:bg-gray-950  dark:hover:text-blue-500 dark:focus:text-blue-500  dark:data-[active]:text-blue-500 dark:data-[state=open]:text-blue-500"
                href="#conocimientos"
              >
                Conocimientos
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-600  focus:text-blue-600  focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-black-100/50 data-[state=open]:text-black-100/50 dark:bg-gray-950  dark:hover:text-blue-500 dark:focus:text-blue-500  dark:data-[active]:text-blue-500 dark:data-[state=open]:text-blue-500"
                href="#experiencia"
              >
                Experiencia
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-600  focus:text-blue-600  focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-black-100/50 data-[state=open]:text-black-100/50 dark:bg-gray-950  dark:hover:text-blue-500 dark:focus:text-blue-500  dark:data-[active]:text-blue-500 dark:data-[state=open]:text-blue-500"
                href="#proyectos"
              >
                Proyectos
              </Link>
            </NavigationMenuLink>

            {/* <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-600  focus:text-blue-600  focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-black-100/50 data-[state=open]:text-black-100/50 dark:bg-gray-950  dark:hover:text-blue-500 dark:focus:text-blue-500  dark:data-[active]:text-blue-500 dark:data-[state=open]:text-blue-500"
                href="#"
              >
                Contact
              </Link>
            </NavigationMenuLink> */}

          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex gap-2">
          <ButtonTheme />
        </div>
      </header>
    </div>
  )
}

function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


// function LaptopIcon(props:any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
//       <line x1="2" y1="20" x2="22" y2="20" />
//     </svg>
//   );
// }