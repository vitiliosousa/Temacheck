import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";

export default function SelectCourse() {
    return(
        <Select required>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o seu curso" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="lgf">LGF (Licenciatura em Gestão e Finanças)</SelectItem>
                <SelectItem value="leit">LEIT (Licenciatura em Engenharia Informatica e de Telecomunicações)</SelectItem>
                <SelectItem value="lecc">LECC (Licentiatura em Engenharia e Ciencia dos Computadores)</SelectItem>
                <SelectItem value="lemt">LEMT (Licenciatura em Engenharia Mecania e de Telecomunicações)</SelectItem>
                <SelectItem value="lgbs">LGBS (Licenciatura em Gestão Bancaria e de Seguros)</SelectItem>
                <SelectItem value="lect">LECT (Licenciatura em Engenharia Civil e de Transportes)</SelectItem>
                <SelectItem value="lee">LEE (Licenciatura em Engenharia Electrotecnica)</SelectItem>
                <SelectItem value="lea">LEA (Licenciatura em Engenharia Ambiental)</SelectItem>
                <SelectItem value="lemec">LEMEC (Licenciatura em Engenharia Electromecanica)</SelectItem>
                <SelectItem value="lca">LCA (Licenciatura em Contabilidade e Auditoria)</SelectItem>
            </SelectContent>
        </Select>

    )
}
