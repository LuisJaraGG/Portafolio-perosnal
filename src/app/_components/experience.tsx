import { CodeIcon, Workflow,GlassesIcon,LucideWorkflow,BanknoteIcon} from "lucide-react"
import { CustomDialog } from "./customDialog"
import { DialogHeader } from "@/components/ui/dialog"
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"

export default function Experience() {
    return (
    <section id="experiencia" className="text-center  py-36 px-2 relative bg dark:dark-bg">
        <div className="flex items-center justify-center flex-col ">
            <p className="text-7xl font-extrabold font-sans text-slate-700 dark:text-slate-100 mb-5 "><Workflow size={80}/></p>
            <h1 className="text-5xl md:text-6xl font-extrabold font-sans mb-2 dark:text-slate-100 text-shadow-xl">Experiencia</h1> 
            <p className="text-4xl font-extrabold  dark:text-slate-300 text-slate-700  ">Área laboral</p>
        </div>
        
        <div className="mt-32 max-w-[500px] mx-auto">
        <CustomDialog TriggerComponent={            
            <div className="w-[250px] h-[250px] mx-auto md:mx-0">
                <div className="w-[90%] h-[90%] mx-auto my-auto hover:w-full hover:h-full  px-6 py-14 rounded-full bg-black flex flex-col items-center justify-center text-white cursor-pointer shadow-2xl hover:bg-blue-700  transition-all duration-300">
                    <GlassesIcon size={40}/>
                    <p className="text-lg font-bold">Desarrollo frontend</p>
                    <p className="hover:text-md">Guardsoft</p>
                </div>
            </div>} 
            ContentComponent={
                <>
                <h1 className="text-3xl font-bold">Desarrollo frontend</h1>
                <p> <span className="font-bold">Empresa:</span> Guardsoft</p>
                <p> <span className="font-bold">Fecha:</span> 2024</p>
                <p> <span className="font-bold">Lugar:</span> Trujillo, Peru</p>
                <p className="text-justify">Desarrollo de una aplicación web para la administración de un sistema de venta de autos, Ecar Autosales, diseñada con Angular, integrando Repatcha</p>
                <div className="flex gap-5 mt-5 flex-wrap justify-center">
                    <img src="/images/ts.svg" alt="TS icono" className="w-16 " />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular icono" className="w-20" />
                    <img src="/images/aws.svg" alt="AWS icono" className="w-16" />
                </div>

                <p className="text-justify">Desarrollo de landing para la empresa Guardsoft</p>
                <div className="flex gap-5 mt-5 flex-wrap justify-center ">
                    <img src="/images/ts.svg" alt="TS icono" className="w-16" />
                    <img src="/images/react.svg" alt="React icono" className="w-16 rounded-full" />
                    <img src="https://tse3.mm.bing.net/th/id/OIP.DVvWvo4fH06T05R6wg3xowHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Shadcn icono" className="w-16 border rounded-md" />
                </div>

                <p className="text-justify">Desarrollo de Landing Page para la empresa Kallpa Facturacion</p>
                <div className="flex gap-5 mt-5 flex-wrap justify-center ">
                    <img src="/images/ts.svg" alt="TS icono" className="w-16 " />
                    <img src="/images/angular.svg" alt="Angular icono" className="w-20" />
                    <img src="https://www.drupal.org/files/issues/2022-09-23/recaptcha-project-browser-transparent.png" alt="Captcha icono" className="w-16" />
                </div>

                <p className="text-justify">Desarrollo de landing para estudio juridico Vilcatoma</p>
                <div className="flex gap-5 mt-5 flex-wrap justify-center">
                    <img src="/images/ts.svg" alt="TS icono" className="w-16 " />
                    <img src="/images/react.svg" alt="React icono" className="w-16" />
                    <img src="https://tse3.mm.bing.net/th/id/OIP.DVvWvo4fH06T05R6wg3xowHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Shadcn icono" className="w-16 border rounded-md" />
                </div>
                </>
            }
            />
            
            <CustomDialog
            TriggerComponent={
                    <div className="w-[250px] h-[250px] mx-auto">
                    <div className="w-[90%] h-[90%] mx-auto my-auto hover:w-full hover:h-full  px-6 py-14 rounded-full bg-black flex flex-col items-center justify-center text-white cursor-pointer shadow-2xl hover:bg-blue-700  transition-all duration-300">
                        <LucideWorkflow size={50}/>
                        <h1 className="text-lg font-bold">Desarrollo FullStack</h1>
                        <p>Guardsoft</p>
                    </div>
                </div>
            }
            ContentComponent={
                <>
                <h1 className="text-3xl font-bold">Desarrollo FullStack</h1>
                <p> <span className="font-bold">Empresa:</span> Guardsoft - Cbet - Sky Airline</p>
                <p> <span className="font-bold">Fecha:</span> 2024 - 2025</p>
                <p> <span className="font-bold">Lugar:</span> Trujillo, Peru</p>
                <p className="text-justify">Desarrollo de funcionalidades criticas para el modulo de ORDEN de sky airline</p>
                <div className="flex  mt-5 flex-wrap justify-center">
                    <img src="/images/ts.svg" alt="TS icono" className="w-16 mx-auto" />
                    <img src="/images/angular.svg" alt="Angular icono" className="w-20 mx-auto" />
                    <img src="/images/nestjs.svg" alt="NestJS icono" className="w-16 mx-auto" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue icono" className="w-16 mx-auto" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" alt="RabbitMQ icono" className="w-16 mx-auto" />
                </div>

                <p className="text-justify">Desarrollo de funcionalidades para mejorar el rendimiento de aplicacion de cbet</p>
                <div className="flex  mt-5 flex-wrap justify-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="SpringBoot icono" className="w-16 mx-auto" />
                    <img src="/images/ts.svg" alt="TS icono" className="w-16 mx-auto" />
                    <img src="/images/angular.svg" alt="Angular icono" className="w-20 mx-auto" />
                    <img src="/images/java.svg" alt="Java icono" className="w-16 mx-auto" />
                </div>

                <p className="text-justify">Desarrollo de Landing Page y Sistema administrativo de Cimag</p>
                <div className="flex  mt-5 flex-wrap justify-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="NextJS icono" className="w-16 mx-auto" />
                    <img src="https://tse3.mm.bing.net/th/id/OIP.DVvWvo4fH06T05R6wg3xowHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Shadcn icono" className="w-16 mx-auto" />
                    <img src="/images/ts.svg" alt="TS icono" className="w-16 mx-auto" />
                </div>

                <p className="text-justify">Desarrollo utilizando NestJS, Angular y AWS, de una aplicación web para la administración de un sistema de Encuestas</p>
                <div className="flex  mt-5 flex-wrap justify-center">
                    <img src="/images/ts.svg" alt="TS icono" className="w-16 mx-auto" />
                    <img src="/images/angular.svg" alt="Angular icono" className="w-20 mx-auto" />
                    <img src="/images/nestjs.svg" alt="NestJS icono" className="w-16 mx-auto" />
                    <img src="/images/aws.svg" alt="AWS icono" className="w-16 mx-auto" />
                </div>
            </>
            }
            />

            <CustomDialog
            TriggerComponent={
                <div className="w-[250px] h-[250px] mx-auto md:mx-0 md:ml-auto">
                    <div className="w-[90%] h-[90%] mx-auto my-auto hover:w-full hover:h-full  px-6 py-14 rounded-full bg-black flex flex-col items-center justify-center text-white cursor-pointer shadow-2xl hover:bg-blue-700  transition-all duration-300">
                    <BanknoteIcon size={50}/>
                    <h1 className="text-lg font-bold">Freelance</h1>
                    <p>Asociados</p>
                    </div>
                </div>
            }
            ContentComponent={
                <>
                <h1 className="text-3xl font-bold">Freelance</h1>
                <p> <span className="font-bold">Fecha:</span> 2024</p>
                <p> <span className="font-bold">Lugar:</span> Trujillo, Peru</p>
                <p className="text-justify">Desarrollo fullstack de Apitotal, sistema de consultas integradas utilizando Express, NodeJS, MongoDB, Angular, Aws</p>
                <div className="flex gap-7 mt-5 flex-wrap justify-center">
                    <img src="/images/angular.svg" alt="Angular icono" className="w-16 " />
                    <img src="/images/ts.svg" alt="TS icono" className="w-16 " />
                    <img src="/images/aws.svg" alt="AWS icono" className="w-16 " />
                    <img src="/images/express.svg" alt="Express icono" className="w-16 " />
                </div>

                <p className="text-justify">Mantenimiento de modulos y desarrollo de funcionalidades de sistema web Teki con el uso de Angular, Java, SpringBoot</p>
                <div className="flex gap-5 mt-5 flex-wrap justify-center">
                    <img src="/images/angular.svg" alt="Angular icono" className="w-16 " />
                    <img src="/images/java.svg" alt="NestJS icono" className="w-16 " />
                    <img src="/images/spring.svg" alt="TS icono" className="w-16 " />
                </div>
            </>
            }
            />

            



        </div>


    </section>
    )
}