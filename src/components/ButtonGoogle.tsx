import { Button } from "./ui/button"
import Image from "next/image"
import Google from '../../public/Google.svg'
import { ReactEventHandler } from "react"

interface ButtonGoogleProps{
    onclick : ReactEventHandler<HTMLButtonElement>
}

export default function ButtonGoogle({onclick}:ButtonGoogleProps) {
    return(
        <Button onClick={onclick} className="w-full gap-2 bg-white text-black border hover:bg-zinc-100">
              <Image src={Google} alt="logo da google"/>
              Google
        </Button>
    )
}