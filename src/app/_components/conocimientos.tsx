import { Button } from "@/components/ui/button";
import { tecnologies } from "@/data/tecnologies";
import { CodeIcon } from "lucide-react";


export default function Conocimientos() {
    return (
        <section id="conocimientos" className="text-center flex items-center justify-center py-36 px-2 flex-col relative">
            <p className="text-7xl font-extrabold font-sans text-slate-700 dark:text-slate-100 mb-5 "><CodeIcon size={80}/></p>
            <h1 className=" text-4xl md:text-6xl font-extrabold font-sans mb-2 dark:text-slate-100 text-shadow-xl">Conocimientos</h1> 
            <p className="text-4xl font-extrabold  dark:text-slate-300 text-slate-700  mb-2">Ténologias</p>
            <div className="flex gap-5 mt-5 flex-wrap justify-center">
                {tecnologies.map((tecnology,id) => (
                    <Button key={id} variant={'outline'} size={'lg'} className="border ">
                        <p className="text-xl font-extrabold  ">{tecnology.name}</p>
                    </Button>
                ))}

            </div>
        </section>
    );
}