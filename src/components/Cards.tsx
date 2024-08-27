'use client'
import { User } from "lucide-react"
import { BadgeCheck } from "lucide-react"
import { Badge } from "lucide-react"
import { useRouter } from "next/navigation"
export default function Cards() {
    const router = useRouter()
    const student = () => {
        router.push('signup/student')
    }
    const teacher = () => {
        router.push('signup/teacher')
    }
    return (
        <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="border border-cinza w-full md:w-1/2 p-2 rounded space-y-10 bg-slate-100 ease-in duration-150 hover:-translate-y-2 hover:bg-zinc-950 hover:text-white" onClick={student} >
                <div className="flex justify-between">
                    <User size={20} />
                    <Badge size={20} />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold">
                        Estudante
                    </h1>
                    <p className="text-muted-foreground text-xs">
                        Estudantes podem submeter temas
                    </p>
                </div>
            </div>
            <div className="border border-cinza w-full md:w-1/2 p-2 rounded space-y-10 bg-slate-100 ease-in duration-150 hover:-translate-y-2 hover:bg-zinc-950 hover:text-white" onClick={teacher} >
                <div className="flex justify-between">
                    <User size={20} />
                    <BadgeCheck size={20} />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold">
                        Docente
                    </h1>
                    <p className="text-muted-foreground text-xs">
                        Docentes podem avaliar temas
                    </p>
                </div>
            </div>
        </div>
    )
}