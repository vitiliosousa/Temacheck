'use client'
import React from "react";
import ImagemLogin from '../../../components/ImagemLogin'
import {Button} from '../../../components/ui/button'
import Link from "next/link";
import { useRouter } from "next/navigation";
import OTP from "../../../components/OTP";

export default function ForgotPassword() {
    const router = useRouter()
    const otp = () => {
        router.push('/forgot-password/new-password')
    }
    return(
        <main className="flex h-full md:h-screen w-full">
            <ImagemLogin/>
            <div className="lg:w-1/2 w-full flex flex-col md:px-20 p-10 md:text-base text-sm">
                <div className="w-full flex justify-end">
                    <p>Lembrou da senha? <Link href="/" className="underline">Entrar</Link></p>
                </div>
                    <div className="w-full h-full flex flex-col justify-center space-y-6">
                    <h1 className="lg:text-3xl text-2xl">Insira o codigo</h1>
                    <div className="space-y-4 w-full flex flex-col items-center">
                        <div className="w-full text-center flex justify-center">
                            <p>Um codigo foi enviado para o seu email</p>
                        </div>
                        <OTP/>
                        <Button className="w-full">Reenviar codigo</Button>
                        <Button className="w-full" onClick={otp}>Continuar</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}