import { UserRoundIcon } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export function CardPerfil(){
  return(
    <Card className="bg-gray-500/20 border-0 text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-lg bg-violet-500/20"><UserRoundIcon className="text-violet-500"/></div>
          Sobre mi</CardTitle>
      </CardHeader>
    </Card>
  )
}