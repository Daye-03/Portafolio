import { DownloadIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12  w-full items-center ">
      <div className="lg:col-span-7 gap-4">
        <Badge
          variant="secondary"
          className="border-green-800 bg-green-500/20 text-green-500 text-xs pb-1 font-medium"
        >
          Disponible para trabajar
        </Badge>
        <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white">
          Hola, soy Dayelin <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500">
            Frontend Dev
          </span>
        </h1>
        <p className="text-gray-400 text-xl">
          Transformo ideas creativas en experiencias web excepcionales.
          Especializada en construir interfaces modernas, accesibles y de alto
          rendimiento.
        </p>
        <Button className="bg-gray-500/20 border border-white/10 mt-4">
          <DownloadIcon/>
          CV
        </Button>
      </div>
      <div className="lg:col-span-5 items-center justify-items-center">
        <div className="size-72 rounded-full bg-amber-100 shadow-[0px_0px_60px_rgba(22,23,24,0.35)] shadow-white/20"></div>
      </div>
    </div>
  );
}
