import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";

export default function SelectStatus() {
    return(
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="leit">Aprovado</SelectItem>
                <SelectItem value="lecc">Pendente</SelectItem>
                <SelectItem value="lemt">Reprovado</SelectItem>
            </SelectContent>
        </Select>
  
    )
}
