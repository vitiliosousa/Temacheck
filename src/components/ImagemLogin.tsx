import Image from "next/image";
import Login from '../../public/Temacheck.svg'
import {ModeToggle} from "@/components/ModeToggle";
export default function ImagemLogin() {
  return (
    <div className="w-1/2 lg:flex items-center justify-center hidden">
        <div className={"self-start pt-10"}>
            <ModeToggle/>
        </div>
        <Image src={Login} alt="Imagem de login" className="size-3/4" />
    </div>
  )
}