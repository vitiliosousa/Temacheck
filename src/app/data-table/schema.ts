import { z } from "zod";

export const temaSchema = z.object({
  id: z.string(),
  nome: z.string(),
  titulo: z.string(),
  status: z.enum(["aprovado", "reprovado", "pendente"]),
  dataSubmissao: z.string(),
  problema: z.string(),
  objetivoEspecifico: z.string(),
  objetivoGeral: z.string()
});

export type Tema = z.infer<typeof temaSchema>;
