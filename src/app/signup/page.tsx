import Cards from "../../components/Cards";
import Link from "next/link";
import ImagemLogin from "@/components/ImagemLogin";

export default function SignUp() {
  return (
    <main className="flex h-full md:h-screen w-full">
      <ImagemLogin/>
      <div className="lg:w-1/2 w-full flex flex-col px-10 md:px-20 py-10 lg:text-base text-sm">
        <div className="w-full flex justify-end">
          <p>Tem uma conta? <Link href="/" className="underline">Entrar</Link></p>
        </div>
        <div className="w-full h-full flex flex-col justify-center space-y-6">
          <h1 className="lg:text-3xl text-2xl">
            Se apresente
          </h1>
          <p className="text-xs text-muted-foreground text-center">
            Selecione uma das opções para participar desta comunidade colaborativa.
          </p>
          <Cards />
          <p className="text-muted-foreground text-xs text-center">
            De forma a garantir que somete docentes se registem como tal, a criação de contas para docentes será revisada por pessoas responsaveis pela criação de contas de docentes de modo a garantir que somente docentes se registem como tal.</p>
        </div>
      </div>
    </main>
  );
}
