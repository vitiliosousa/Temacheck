'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ImagemLogin from "../components/ImagemLogin";
import ButtonGoogle from "../components/ButtonGoogle";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const router = useRouter()
  const login = () => {
    router.push('/data-table')
  }
  return (
    <main className="flex h-full lg:h-screen w-full">
      <ImagemLogin />
      <div className="lg:w-1/2 w-full flex flex-col md:px-20 p-10 text-sm md:text-base">
        <div className="w-full flex justify-end">
          <p>Não tem uma conta? <Link href="/signup" className="underline">Criar Conta</Link></p>
        </div>
        <div className="w-full h-full flex flex-col justify-center space-y-6">
          <h1 className="lg:text-3xl text-2xl">Entrar</h1>
          <div className="space-y-4">
            <p>Entrar com google</p>
            <ButtonGoogle onclick={login} />
          </div>
          <hr />
          <form className="space-y-4">
            <p className="text-sm md:text-base">Ou continue com o seu endereço de email</p>
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Senha" type="password" required />
            <div className="flex justify-between items-center pb-4">
              <div className="flex items-center justify-center gap-2">
                <Checkbox />
                <label>Lembrar me</label>
              </div>
              <Link href={'/forgot-password'} className="underline">Esqueceu a senha?</Link>
            </div>
            <Button type="submit" className="w-full " onClick={login}>Entrar</Button>
          </form>
          <p className="text-center">Ao continuar, voce automaticamente concorda com os nossos <Link href={'/about/terms-and-conditions'} className="underline">Termos de Serviço</Link> e <Link href={'/about/privacy-policy'} className="underline">Politicas de Privacidade</Link></p>
        </div>
      </div>
    </main>
  );
}
