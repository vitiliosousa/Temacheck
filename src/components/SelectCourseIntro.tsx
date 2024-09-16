import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";

export default function SelectCourse() {
    return(
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o seu curso" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="lgf">LGF</SelectItem>
                <SelectItem value="leit">LEIT</SelectItem>
                <SelectItem value="lecc">LECC</SelectItem>
                <SelectItem value="lemt">LEMT</SelectItem>
                <SelectItem value="lgbs">LGBS</SelectItem>
                <SelectItem value="lect">LECT</SelectItem>
                <SelectItem value="lee">LEE</SelectItem>
                <SelectItem value="lea">LEA</SelectItem>
                <SelectItem value="lemec">LEMEC</SelectItem>
                <SelectItem value="lca">LCA</SelectItem>
            </SelectContent>
        </Select>

    )
}
