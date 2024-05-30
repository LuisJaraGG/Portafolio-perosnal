"use client";
import { LaptopIcon,ArrowDownCircleIcon,LinkedinIcon,GithubIcon,DownloadIcon } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="text-center flex items-center justify-center h-screen flex-col relative bg dark:dark-bg">
            <p className="md:text-7xl  font-extrabold font-sans text-slate-700 dark:text-slate-100 mb-5 "><LaptopIcon size={80}/></p>
            <h1 className="md:text-6xl font-extrabold font-sans mb-2 dark:text-slate-100 text-shadow-xl">LUIS ALBARRAN JARA</h1>
            <p className="text-4xl font-extrabold  dark:text-slate-300 text-slate-700  mb-2">Desarrollador FullStack</p>
            <p className="max-w-[600px]  text-gray-600 dark:text-gray-300 text-xl">Desarrollador fullstack con experiencia en la creación y mantenimiento de aplicaciones web. Enfocado ensoluciones eficientes y escalables, cuidando la experiencia del usuario y la calidad del código.</p>
            <a href="/documents/cv.pdf" download className="mt-8" >
                <Button variant="default" size="lg" className="flex gap-x-1 bg-black dark:bg-blue-600 shadow-lg hover:bg-slate-700 shadow-slate-500/50 dark:shadow-blue-500/50 dark:hover:bg-blue-500  text-white">
                    Descargar CV <DownloadIcon size={18}/>
                </Button>
            </a>
            <div className="flex gap-x-5 mt-3">
            <a href="https://www.linkedin.com/in/luis-alberto-albarran-jara-b34122247/" target="_blank" >
                <Button variant="outline" size="lg">
                <LinkedinIcon size={20}/>
                </Button>
            </a>
            <a href="https://github.com/LuisJaraGG" target="_blank">
                <Button variant="outline" size="lg" >
                <GithubIcon size={20}/>
                </Button>
            </a>
            </div>
            <Link href="#conocimientos" className="absolute bottom-4 dark:text-slate-400 text-slate-700 animate-bounce duration-1000">
                <ArrowDownCircleIcon />
            </Link>
        </section>
    );
}