import { Button } from "@/components/ui/button"
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { Textarea } from "./ui/textarea"

export function NewTheme() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-8 gap-2"><Plus className="size-4"/>Novo Tema</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Novo Tema</DialogTitle>
          <DialogDescription>
            Adicione um novo tema
          </DialogDescription>
        </DialogHeader>
        <div className="grid  gap-4 py-4">
        <div className="grid w-full gap-1.5">
          <Label className="font-semibold">Titulo</Label>
          <Textarea placeholder="Introduza o titulo aqui"/>
        </div>
        <div className="grid w-full gap-1.5">
          <Label className="font-semibold">Problema</Label>
          <Textarea placeholder="Introduza o problema aqui"/>
        </div>
        <div className="grid w-full gap-1.5">
          <Label className="font-semibold">Objectivo Geral</Label>
          <Textarea placeholder="Introduza o objectivo geral"/>
        </div>
        <div className="grid w-full gap-1.5">
          <Label className="font-semibold">Objectivos Especificos</Label>
          <Textarea placeholder="Introduza os objectivos especificos"/>
        </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="gap-2"><Plus className="size-4"/>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
