import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ValidateSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Pendente" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Avaliar</SelectLabel>
          <SelectItem value="Aprovado">Aprovado</SelectItem>
          <SelectItem value="Reprovado">Reprovado</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
