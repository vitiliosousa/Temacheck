import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";

export default function SelectCourse() {
    return(
        <Select required>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Curso" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="lgf">LGF</SelectItem>
                <SelectItem value="leit">LEIT</SelectItem>
                <SelectItem value="lecc">LECC</SelectItem>
                <SelectItem value="lemt">LEMT</SelectItem>
                <SelectItem value="lgbs">LGBS</SelectItem>
                <SelectItem value="lect">LECT</SelectItem>
                <SelectItem value="lee">LEE</SelectItem>
                <SelectItem value="lea">LEA</SelectItem>
            </SelectContent>
        </Select>
  
    )
}
