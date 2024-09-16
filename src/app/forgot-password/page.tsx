'use client'
import React from "react";
import ImagemLogin from '../../components/ImagemLogin'
import {Input} from '../../components/ui/input'
import {Button} from '../../components/ui/button'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
    const router = useRouter()
    const otp = () => {
        router.push('/forgot-password/otp')
    }
    return(
        <main className="flex h-full md:h-screen w-full">
            <ImagemLogin/>
            <div className="lg:w-1/2 w-full flex flex-col md:px-20 p-10 md:text-base text-sm">
                <div className="w-full flex justify-end">
                    <p>Lembrou da senha? <Link href="/" className="underline">Entrar</Link></p>
                </div>
                    <div className="w-full h-full flex flex-col justify-center space-y-6">
                    <h1 className="lg:text-3xl text-2xl">Esqueceu a senha?</h1>
                    <form className="space-y-4">
                        <p>Insira o endereço que usou para se registrar</p>
                        <Input placeholder="Insira o seu email" type="email" className="w-full"/>
                        <Button type="submit" className="w-full" onClick={otp}>Enviar codigo</Button>
                        <p className="text-center text-muted-foreground">Um codigo foi enviado para o seu email</p>
                    </form>
                </div>
            </div>
        </main>
    )
}