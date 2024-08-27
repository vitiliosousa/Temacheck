import Image from "next/image";
import Login from '../../public/login.svg'
export default function ImagemLogin() {
  return (
    <div className="w-1/2 lg:flex items-center justify-center hidden">
      <Image src={Login} alt="Imagem de login" className="size-3/4" />
    </div>
  )
}