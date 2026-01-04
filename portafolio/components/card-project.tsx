import { RocketIcon } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export function CardProject(){
  return(
    <Card className="bg-gray-500/20 border-0 text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-lg bg-blue-800/20"><RocketIcon className="text-blue-500"/></div> Proyectos</CardTitle>
      </CardHeader>   
    </Card>
  )
}