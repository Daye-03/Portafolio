import { CodeIcon } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export function CardStack(){
  return(
    <Card className="bg-gray-500/20 border-0 text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-3"> 
          <div className="flex items-center justify-center size-10 rounded-lg bg-yellow-600/20"><CodeIcon className="text-yellow-500"/></div>
          Stack
        </CardTitle>
      </CardHeader>   
    </Card>
  )
}