import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ValidateSelect } from "./ValidateSelect";

interface ValidateThemeProps {
  data: any;
  onClose: () => void;
}

export function ValidateTheme({ data, onClose }: ValidateThemeProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[100vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Detalhes do Tema</DialogTitle>
          <DialogDescription>
            Veja mais informações sobre o tema selecionado.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full gap-1.5">
            <Label className="font-semibold">Nome:</Label>
            <p>{data.nome}</p>
          </div>
          <div className="grid w-full gap-1.5">
            <Label className="font-semibold">Título:</Label>
            <p>{data.titulo}</p>
          </div>
          <div className="grid w-full gap-1.5">
            <Label className="font-semibold">Problema:</Label>
            <p>{data.problema}</p>
          </div>
          <div className="grid w-full gap-1.5">
            <Label className="font-semibold">Objetivo Geral:</Label>
            <p>{data.objetivoGeral}</p>
          </div>
          <div className="grid w-full gap-1.5">
            <Label className="font-semibold">Objetivos Específicos:</Label>
            <p>{data.objetivoEspecifico}</p>
          </div>
          <Textarea placeholder="Comentário(opcional)" />
          <ValidateSelect />
        </div>
        <DialogFooter>
          <Button type="button" onClick={onClose} className="gap-2">
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
