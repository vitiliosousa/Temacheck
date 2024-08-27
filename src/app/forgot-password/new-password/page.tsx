'use client'
import React from "react";
import ImagemLogin from '../../../components/ImagemLogin'
import {Input} from '../../../components/ui/input'
import {Button} from '../../../components/ui/button'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
    const router = useRouter()
    const otp = () => {
        router.push('/')
    }
    return(
        <main className="flex h-full md:h-screen w-full">
            <ImagemLogin/>
            <div className="lg:w-1/2 w-full flex flex-col md:px-20 p-10 md:text-base text-sm">
                <div className="w-full flex justify-end">
                    <p>Lembrou da senha? <Link href="/" className="underline">Entrar</Link></p>
                </div>
                    <div className="w-full h-full flex flex-col justify-center space-y-6">
                    <h1 className="lg:text-3xl text-2xl">Nova Senha</h1>
                    <div className="space-y-4 w-full flex flex-col items-center">
                        <Input placeholder="Senha" type="password"/>
                        <Input placeholder="Confirmar senha" type="password"/>
                        <Button className="w-full" onClick={otp}>Trocar senha</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}