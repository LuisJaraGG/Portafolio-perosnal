import { CodeIcon,ProjectorIcon } from "lucide-react";

export default function Projects() {
    return (
        <section id="proyectos" className="text-center flex items-center justify-center py-40 px-2 flex-col relative">
            <p className="text-7xl font-extrabold font-sans text-slate-700 dark:text-slate-100 mb-5 "><ProjectorIcon size={80}/></p>
            <h1 className="text-6xl font-extrabold font-sans mb-2 dark:text-slate-100 text-shadow-xl">Proyectos</h1> 
            <p className="text-4xl font-extrabold  dark:text-slate-300 text-slate-700  mb-10">Area de trabajo</p>
            <div className="flex gap-10 md:gap-8 mt-5 flex-wrap justify-center ">
            <a href="https://initial-sale-qa.skyairline.com/es/chile" target="_blank">
                <div className="w-[250px]  h-[200px]">
                    <div className="w-[90%] shadow-xl hover:w-full transition-all duration-250 mx-auto">
                        <img src="/images/sky-screen.png" alt="Sky Screen" className="rounded-se-sm rounded-ss-sm" />
                        <div className="bg-slate-950 dark:bg-blue-950 text-slate-100 p-3 rounded-ee-sm rounded-es-sm">
                            Sky Orden
                        </div>
                    </div>
                </div>
            </a>

            <a href="https://kallpafactura.pe/" target="_blank">
                <div className="w-[250px]  h-[200px]">
                    <div className="w-[90%] shadow-xl hover:w-full transition-all duration-250 mx-auto">
                        <img src="/images/kallpa-screen.png" alt="Kallpa Screen" className="rounded-se-sm rounded-ss-sm" />
                        <div className="bg-slate-950 dark:bg-blue-950 text-slate-100 p-3 rounded-ee-sm rounded-es-sm">
                            Kallpa Facturacion
                        </div>
                    </div>
                </div>
            </a>
            <a href="https://cbetcloud.com/" target="_blank">
                <div className="w-[250px]  h-[200px]">
                    <div className="w-[90%] shadow-xl hover:w-[100%] transition-all duration-250 mx-auto">
                        <img src="/images/cbet-screen.png" alt="Cbet Screen" className="rounded-se-sm rounded-ss-sm" />
                        <div className="bg-slate-950 dark:bg-blue-950 text-slate-100 p-3 rounded-ee-sm rounded-es-sm">
                            Cbet
                        </div>
                    </div>
                </div>
            </a>
            <a href="https://guardsoft.pe/" target="_blank">
                <div className="w-[250px]  h-[200px]">
                    <div className="w-[90%] shadow-xl hover:w-[100%] transition-all duration-250 mx-auto">
                        <img src="/images/guardsoft-landing-screen.png" alt="Apitotal Screen" className="rounded-se-sm rounded-ss-sm" />
                        <div className="bg-slate-950 dark:bg-blue-950 text-slate-100 p-3 rounded-ee-sm rounded-es-sm">
                            Guardsoft Landing
                        </div>
                    </div>
                </div>
            </a>
            <a href="https://vilcatoma-git-master-honeymale.vercel.app/#about" target="_blank">
                <div className="w-[250px]  h-[200px]">
                    <div className="w-[90%] shadow-xl hover:w-full transition-all duration-250 mx-auto">
                        <img src="/images/vilcatoma-screen.png" alt="Vilcatoma Screen" className="rounded-se-sm rounded-ss-sm" />
                        <div className="bg-slate-950 dark:bg-blue-950 text-slate-100 p-3 rounded-ee-sm rounded-es-sm">
                            Vilcatoma Landing
                        </div>
                    </div>
                </div>
            </a>
            <a href="https://www.cimag.pe/" target="_blank">
                <div className="w-[250px]  h-[200px]">
                    <div className="w-[90%] shadow-xl hover:w-full transition-all duration-250 mx-auto">
                        <img src="/images/cimag-screen.png" alt="Cimag Screen" className="rounded-se-sm rounded-ss-sm" />
                        <div className="bg-slate-950 dark:bg-blue-950 text-slate-100 p-3 rounded-ee-sm rounded-es-sm">
                            Cimag Landing
                        </div>
                    </div>
                </div>
            </a>
            <a href="https://autosales.ecar.pe/" target="_blank">
                <div className="w-[250px]  h-[200px]">
                    <div className="w-[90%] shadow-xl hover:w-full transition-all duration-250 mx-auto">
                        <img src="/images/autosales-screen.png" alt="Apitotal Screen" className="rounded-se-sm rounded-ss-sm" />
                        <div className="bg-slate-950 dark:bg-blue-950 text-slate-100 p-3 rounded-ee-sm rounded-es-sm">
                            Ecar Autosales
                        </div>
                    </div>
                </div>
            </a>
            <a href="https://d1alcbp9i5op4n.cloudfront.net/auth/login" target="_blank">
                <div className="w-[250px]  h-[200px]">
                    <div className="w-[90%] shadow-xl hover:w-full transition-all duration-250 mx-auto">
                        <img src="/images/ascenso-screen.png" alt="Apitotal Screen" className="rounded-se-sm rounded-ss-sm" />
                        <div className="bg-slate-950 dark:bg-blue-950 text-slate-100 p-3 rounded-ee-sm rounded-es-sm">
                            Ascenso Admin
                        </div>
                    </div>
                </div>
            </a>
            </div>
        </section>
    )
}