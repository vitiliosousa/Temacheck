'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ImagemLogin from "@/components/ImagemLogin";
import ButtonGoogle from "@/components/ButtonGoogle";

export default function Student() {
  const router = useRouter()
  const signin = () => {
    router.push('/')
  }
  return (
    <main className="flex md:h-screen h-full w-full">
      <ImagemLogin />
      <div className="lg:w-1/2 w-full flex flex-col px-10 md:px-20 py-10">
        <div className="w-full flex justify-end">
          <p className="lg:text-base text-sm">Tem uma conta? <Link href="/" className="underline">Entrar</Link></p>
        </div>
        <div className="w-full h-full flex flex-col justify-center space-y-6">
          <h1 className="lg:text-3xl text-2xl">Criar conta</h1>
          <div className="space-y-4">
            <p className="">Criar conta com google</p>
            <ButtonGoogle onclick={signin} />
          </div>
          <hr />
          <form className="space-y-4">
            <p>Ou criar conta com o seu email</p>
            <Input placeholder="Nome" type="text"/>
            <Input placeholder="Email" type="email"/>
            <Input placeholder="Senha" type="password"/>
            <Input placeholder="Confirmar senha" type="password"/>
            <div className="w-full flex items-center gap-2">
              <Checkbox/>
              <p>Eu concordo com os <Link href="/about/terms-and-conditions" className="underline">Termos e Condições</Link></p>
            </div>
            <Button type="submit" className="w-full" onClick={signin}>Continuar</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
