import fs from "fs";
import path from "path";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


async function getData() {
  const filePath = path.join(
    process.cwd(),
    "src/app/data-table",
    "data.json"
  );
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

export default async function Page() {
  const data = await getData();
  console.log("data", data);

  return (
    <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold">Temas</h1>
        <Avatar>
            <AvatarImage src="https://github.com/vitiliosousa.png"/>
            <AvatarFallback>V</AvatarFallback>
        </Avatar>
     </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
