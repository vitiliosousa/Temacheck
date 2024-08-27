'use client'
import ImagemLogin from "@/components/ImagemLogin";
import SelectCourseIntro from "@/components/SelectCourseIntro";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function Course() {
    const router = useRouter()
    const login = () => {
        router.push("/");
    }
    return(
        <main className="flex md:h-screen h-full w-full">
            <ImagemLogin/>
            <div className="lg:w-1/2 w-full flex flex-col px-10 md:px-20 py-5 text-sm md:text-base">
                <div className="w-full flex justify-end">
                    <p className="lg:text-base text-sm">Tem uma conta? <Link href="/" className="underline">Entrar</Link>
                    </p>
                </div>
                <div className="w-full h-full flex flex-col justify-center space-y-4">
                    <h1 className="lg:text-3xl text-2xl">Qual é o seu curso?</h1>
                    <div className="space-y-4">
                        <SelectCourseIntro/>
                        <p className="text-muted-foreground text-center text-xs">
                            Esta informação é importante para que a lista possa ser filtrada por curso
                        </p>
                        <Button className={"w-full"} onClick={login}>Continuar</Button>
                    </div>
                </div>
            </div>
        </main>
)
}