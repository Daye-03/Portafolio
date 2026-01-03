import { Card, CardHeader, CardTitle } from "./ui/card";

export function CardStack(){
  return(
    <Card className="bg-gray-500/20 border-0 text-white">
      <CardHeader>
        <CardTitle>Stack</CardTitle>
      </CardHeader>   
    </Card>
  )
}